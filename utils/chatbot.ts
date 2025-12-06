import { InferenceClient } from "@huggingface/inference";
import { getPortfolioContext } from '../data';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = getPortfolioContext();
const SYSTEM_PROMPT = `You are a helpful assistant answering questions about Bilal Muhammad, a Data Scientist. 
Here is his portfolio information:

${PORTFOLIO_CONTEXT}

Answer questions based only on this information. Be concise and friendly. If asked about something not in the portfolio, politely say you don't have that information. Keep responses to 2-3 sentences when possible.`;

const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

/**
 * Calls Hugging Face Inference API using the official SDK
 */
export async function getChatbotResponse(messages: Message[]): Promise<string> {
  try {
    const client = new InferenceClient(HUGGINGFACE_API_KEY);
    const chatCompletion = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
    });

    if (chatCompletion.choices && chatCompletion.choices.length > 0) {
      return chatCompletion.choices[0].message.content;
    }

    return 'I apologize, but I couldn\'t generate a response. Please try again.';
  } catch (error) {
    console.error('Error in getChatbotResponse:', error);
    if (error instanceof Error) {
      return `Sorry, I encountered an error: ${error.message}. Please try again.`;
    }
    return 'An unexpected error occurred. Please try again.';
  }
}
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

// Using a free model from Hugging Face
const MODEL_NAME = 'mistralai/Mistral-7B-Instruct-v0.2';
const API_URL = `https://api-inference.huggingface.co/models/${MODEL_NAME}`;

/**
 * Formats messages for the Hugging Face API
 */
function formatPrompt(messages: Message[]): string {
  // Build conversation history
  let prompt = SYSTEM_PROMPT + '\n\n';
  
  // Add conversation history (last few messages for context)
  const recentMessages = messages.slice(-6); // Keep last 6 messages for context
  recentMessages.forEach(msg => {
    if (msg.role === 'user') {
      prompt += `User: ${msg.content}\n`;
    } else {
      prompt += `Assistant: ${msg.content}\n`;
    }
  });
  
  prompt += 'Assistant:';
  return prompt;
}

/**
 * Calls Hugging Face Inference API to get chatbot response
 */
export async function getChatbotResponse(messages: Message[]): Promise<string> {
  try {
    const prompt = formatPrompt(messages);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 200,
          temperature: 0.7,
          return_full_text: false,
        },
      }),
    });

    if (!response.ok) {
      // Handle rate limiting or model loading
      if (response.status === 503) {
        const errorData = await response.json();
        if (errorData.error?.includes('loading')) {
          throw new Error('The AI model is loading. Please wait a moment and try again.');
        }
        throw new Error('Service temporarily unavailable. Please try again in a moment.');
      }
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Handle array response (Hugging Face typically returns array)
    if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0];
      let generatedText = firstItem.generated_text || firstItem.text || '';
      
      // If the response includes the prompt, extract only the new part
      if (generatedText.includes('Assistant:')) {
        const parts = generatedText.split('Assistant:');
        generatedText = parts[parts.length - 1].trim();
      }
      
      return generatedText || 'I apologize, but I couldn\'t generate a response. Please try again.';
    }
    
    // Handle object response
    if (data.generated_text) {
      let generatedText = data.generated_text;
      if (generatedText.includes('Assistant:')) {
        const parts = generatedText.split('Assistant:');
        generatedText = parts[parts.length - 1].trim();
      }
      return generatedText.trim();
    }
    
    // Handle nested array structure
    if (data[0]?.generated_text) {
      let generatedText = data[0].generated_text;
      if (generatedText.includes('Assistant:')) {
        const parts = generatedText.split('Assistant:');
        generatedText = parts[parts.length - 1].trim();
      }
      return generatedText.trim();
    }
    
    throw new Error('Unexpected response format from API');
  } catch (error) {
    if (error instanceof Error) {
      // Return user-friendly error messages
      if (error.message.includes('loading') || error.message.includes('unavailable')) {
        return error.message;
      }
      if (error.message.includes('fetch')) {
        return 'Unable to connect to the AI service. Please check your internet connection and try again.';
      }
      return `Sorry, I encountered an error: ${error.message}. Please try again.`;
    }
    return 'An unexpected error occurred. Please try again.';
  }
}

/**
 * Fallback rule-based response for when API fails
 */
export function getFallbackResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Simple keyword matching
  if (lowerMessage.includes('name') || lowerMessage.includes('who are you')) {
    return 'I\'m Bilal Muhammad, a Data Scientist with 7+ years of experience. I specialize in predictive modeling, CRM analytics, and growth strategies.';
  }
  
  if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
    return 'Bilal is currently located in Seoul, South Korea.';
  }
  
  if (lowerMessage.includes('email') || lowerMessage.includes('contact')) {
    return 'You can reach Bilal at mbilalnust@gmail.com.';
  }
  
  if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return 'Bilal has 7+ years of experience as a Data Scientist, currently working at Samsung C&T Corporation. He has worked at companies like Datarize, Protopie, DPWorld, and others.';
  }
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    return 'Bilal\'s skills include Python, SQL, R, PySpark, AWS, Machine Learning (XGBoost, LightGBM), Tableau, Power BI, Airflow, Docker, LLM/RAG, and Prompt Engineering.';
  }
  
  if (lowerMessage.includes('project')) {
    return 'Bilal has worked on several projects including AI Screenshot Assistant, Local RAG Application, Automated Lottery Bot, TTS Video Generator, and AWS ETL Pipeline. Check the Projects section for more details.';
  }
  
  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('school')) {
    return 'Bilal has an MS in Transportation Engineering from KAIST (Korea Advanced Institute of Science and Technology) and a BS in Civil Engineering from NUST (National University of Sciences and Technology).';
  }
  
  return 'I\'m having trouble understanding that question. Could you try asking about Bilal\'s experience, skills, projects, or education?';
}

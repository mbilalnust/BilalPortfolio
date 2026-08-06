import { getPortfolioContext } from '../data';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = getPortfolioContext();
const API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:8000/chat';

// Fallback message if API fails
export function getFallbackResponse(userMessage: string): string {
  const base = "I couldn't reach the assistant API right now.";
  if (userMessage.toLowerCase().includes("experience")) {
    return `${base} Quick summary: Bilal Muhammad is a Data Scientist with 7+ years across e-commerce, mobility, and public sector, strong in predictive modeling and analytics.`;
  }
  return `${base} Please try again in a moment.`;
}

/**
 * Calls your FastAPI backend instead of Hugging Face directly.
 * Sends only the latest user message; backend handles context/instructions.
 */
export async function getChatbotResponse(messages: Message[]): Promise<string> {
  const lastUser = [...messages].reverse().find(m => m.role === 'user');
  const content = lastUser?.content?.trim();
  if (!content) {
    return "Please ask a question.";
  }

  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: content }),
  });

  if (!resp.ok) {
    throw new Error(`API returned ${resp.status}`);
  }

  const data = await resp.json();
  return data.reply || 'I apologize, but I could not generate a response.';
}

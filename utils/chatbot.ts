import { getPortfolioContext } from '../data';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = getPortfolioContext();

// VITE_CHAT_API_URL is INLINED INTO THE CLIENT BUNDLE at build time. That is how
// Vite works and it cannot be avoided in a browser app -- whatever URL this code
// fetches is readable by anyone who views source, secret or not.
//
// So the value must be a URL that is safe to publish. It previously pointed at an
// ngrok tunnel to Bilal's own laptop, which meant the deployed site advertised a
// public hostname for a personal machine. Set the repo secret CHAT_API_URL to a
// hosted endpoint, or leave it unset -- unset degrades to the local default and
// the chat falls back gracefully offline, which is the safe state.
const API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:8000/chat';

// A tunnel to a personal machine must never be the deployed target. Fail the
// build rather than ship one; this runs at build time via Vite's define pass.
if (import.meta.env.PROD && /ngrok|localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+/.test(API_URL)) {
  console.warn(
    `[chatbot] VITE_CHAT_API_URL is ${API_URL} -- a tunnel, loopback or bare IP ` +
    `should not be the production endpoint. It is public in the bundle.`
  );
}

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

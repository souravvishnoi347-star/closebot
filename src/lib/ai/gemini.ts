import { GoogleGenerativeAI } from '@google/generative-ai'

// Use the master Gemini API key defined in .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export interface GenerateAIResponseParams {
  systemPrompt: string
  customerMessage: string
  chatHistory?: { role: 'user' | 'model'; parts: { text: string }[] }[]
}

export async function generateAIResponse({
  systemPrompt,
  customerMessage,
  chatHistory = [],
}: GenerateAIResponseParams): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemPrompt,
    })

    const chat = model.startChat({
      history: chatHistory,
    })

    const result = await chat.sendMessage(customerMessage)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('[Gemini AI] Error generating response:', error)
    throw new Error('Failed to generate AI response')
  }
}

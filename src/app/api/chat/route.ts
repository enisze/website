import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'

const apiKey = process.env.OPENROUTER_API_KEY

const openai = createOpenAI({
	baseURL: 'https://openrouter.ai/api/v1',
	apiKey
})

// Allow streaming responses up to 30 seconds
export const maxDuration = 30
const model = 'mistralai/mistral-small-3.1-24b-instruct:free'

export async function POST(req: Request) {
	const { messages } = await req.json()

	const result = streamText({
		model: openai(model),
		messages
	})

	return result.toDataStreamResponse()
}

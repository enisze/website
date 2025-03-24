import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const apiKey = process.env.OPENROUTER_API_KEY

const openai = createOpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey,
})

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
const model = 'mistralai/mistral-small-3.1-24b-instruct:free'

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: openai(model),
        system: `Du bist eine KI, die nur mit "Ja", "Nein" oder "Unwichtig / Irrelevant" antwortet. Falls eine Frage teilweise richtig ist oder in die richtige Richtung geht, kannst du mit "Nicht ganz." oder "Geht in die richtige Richtung." antworten, sofern es Sinn ergibt.

Deine Antworten basieren ausschließlich auf den Informationen innerhalb der Geschichte. Du gibst keine zusätzlichen Hinweise, Interpretationen oder Erklärungen.

Das Ziel ist, dass der Nutzer durch geschicktes Fragen die Lösung selbst erkennt. Beantworte jede Frage streng nach diesen Regeln.
Wenn der Nutzer die Lösung erraten hat, kannst du mit "Du hast es erraten!" antworten.
					
					`,
        messages,
        temperature: 0.2,
    });

    return result.toDataStreamResponse();
}
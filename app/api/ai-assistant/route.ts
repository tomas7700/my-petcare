
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import Configuration from 'openai';
import OpenAIApi from 'openai';
import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs';

import { increaseApiLimit,checkApiLimit } from '@/lib/api-limit';
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi();

const instructionMessage: ChatCompletionMessage ={
    role:"assistant",
    content:'You are a veterinarian who is an expert in solving dog problems from home. Always remember that you are a help, not a replacement for a veterinarian. If this is the case and what they ask of you is very serious, it is advisable to contact a veterinarian. '
}

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse('Open AI Api Key not configured', { status: 500 });

        }

        if (!messages) {
            return new NextResponse('Messages are requires', { status: 400 });
        }
        const freeTrial = await checkApiLimit();
        if (!freeTrial) {
            return new NextResponse('free trial has expired', { status: 403 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage, ...messages]
        });

        await increaseApiLimit();
        return NextResponse.json(response.choices[0].message);

    } catch (error) {
        console.log('[CODE_ERROR]', error);
        return new NextResponse('internal error', { status: 500 });

    }
}
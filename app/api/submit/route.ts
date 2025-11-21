import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || ''
const N8N_API_KEY = process.env.N8N_API_KEY || ''

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming request body
        const body = await request.json()

        // Validate the data
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, or message' },
                { status: 400 }
            )
        }

        // Send data to n8n webhook
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'key': N8N_API_KEY,
            },
            body: JSON.stringify(body),
        })

        // Check if the request was successful
        if (!response.ok) {
            const errorText = await response.text()
            console.error('n8n webhook error:', errorText)
            return NextResponse.json(
                { error: `n8n webhook failed: ${response.status} ${response.statusText}` },
                { status: response.status }
            )
        }

        // Parse and return the response from n8n
        const data = await response.json()

        return NextResponse.json({
            success: true,
            message: 'Data sent successfully to n8n workflow',
            data: data,
        })
    } catch (error) {
        console.error('API route error:', error)
        return NextResponse.json(
            {
                error: 'Failed to process request',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}

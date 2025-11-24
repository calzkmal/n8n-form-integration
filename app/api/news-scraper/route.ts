import { NextRequest, NextResponse } from 'next/server'

const NEWS_SCRAPER_WEBHOOK_URL = process.env.NEWS_SCRAPER_WEBHOOK_URL || ''
const N8N_API_KEY = process.env.N8N_API_KEY || ''

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming request body
        const body = await request.json()

        // Validate that we have at least one parameter
        if (!body.country && !body.category && !body.sources && !body.q) {
            return NextResponse.json(
                { error: 'At least one parameter (country, category, sources, or q) is required' },
                { status: 400 }
            )
        }

        // Validate that sources is not mixed with country/category
        if (body.sources && (body.country || body.category)) {
            return NextResponse.json(
                { error: 'Cannot use sources parameter with country or category' },
                { status: 400 }
            )
        }

        // Send data to n8n webhook
        const response = await fetch(NEWS_SCRAPER_WEBHOOK_URL, {
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

        // Parse the response from n8n (handle both JSON and text)
        const contentType = response.headers.get('content-type')
        let data

        if (contentType && contentType.includes('application/json')) {
            // Response is JSON
            data = await response.json()
        } else {
            // Response is plain text or other format
            const textData = await response.text()
            data = { message: textData }
        }

        return NextResponse.json({
            success: true,
            message: 'News scraper started successfully',
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

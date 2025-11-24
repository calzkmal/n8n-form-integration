import { NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || ''
const N8N_API_KEY = process.env.N8N_API_KEY || ''

export async function GET() {
    try {
        // Send a test ping to the webhook with minimal data
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'key': N8N_API_KEY,
            },
            body: JSON.stringify({
                test: true,
                ping: 'workflow-status-check',
                timestamp: new Date().toISOString()
            }),
        })

        // Check if the workflow is active based on response
        const isActive = response.ok

        return NextResponse.json({
            isActive,
            status: response.status,
            statusText: response.statusText,
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        console.error('Workflow check error:', error)
        return NextResponse.json(
            {
                isActive: false,
                error: 'Failed to check workflow status',
                details: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 200 } // Return 200 so the client can handle the isActive: false state
        )
    }
}

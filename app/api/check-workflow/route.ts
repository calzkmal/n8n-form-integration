import { NextResponse } from 'next/server'

// Dedicated health check endpoint for workflow status monitoring
const HEALTH_CHECK_URL = 'https://n8n.senja.co.uk/webhook/7a578942-e849-4335-a0a7-adf112c48bb7'
const N8N_API_KEY = process.env.N8N_API_KEY || ''

export async function GET() {
    try {
        // Send a test ping to the health check endpoint
        const response = await fetch(HEALTH_CHECK_URL, {
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

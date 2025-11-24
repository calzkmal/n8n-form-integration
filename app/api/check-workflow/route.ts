import { NextResponse } from 'next/server'

// Dedicated health check endpoint for workflow status monitoring
const N8N_HEALTH_CHECK_URL = process.env.N8N_HEALTH_CHECK_URL || ''
const N8N_API_KEY = process.env.N8N_API_KEY || ''

export async function GET() {
    try {
        // Send a GET request to the health check endpoint
        const response = await fetch(N8N_HEALTH_CHECK_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'key': N8N_API_KEY,
            },
        })

        // Check if the workflow is active based on response
        let isActive = false
        let responseText = ''

        if (response.ok) {
            responseText = await response.text()
            isActive = responseText.trim() === 'Active'
        }

        return NextResponse.json({
            isActive,
            status: response.status,
            statusText: response.statusText,
            responseText,
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

'use client'

import { useEffect, useState } from 'react'

export default function WorkflowStatusBadge() {
    const [isWorkflowActive, setIsWorkflowActive] = useState<boolean | null>(null)

    useEffect(() => {
        const checkWorkflowStatus = async () => {
            try {
                const response = await fetch('/api/check-workflow')
                const statusData = await response.json()
                setIsWorkflowActive(statusData.isActive)
            } catch (error) {
                console.error('Failed to check workflow status:', error)
                setIsWorkflowActive(false)
            }
        }

        checkWorkflowStatus()
    }, [])

    return (
        <div className="hero-badge">
            <span className={`status-dot ${isWorkflowActive === null ? 'checking' : isWorkflowActive ? 'active' : 'inactive'}`}></span>
            <span>
                {isWorkflowActive === null
                    ? 'Checking workflow status...'
                    : isWorkflowActive
                        ? 'Workflow Active'
                        : 'Workflow Inactive'}
            </span>
        </div>
    )
}

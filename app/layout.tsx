import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Sentomate Automation Dashboard',
    description: 'n8n workflow control dashboard for automating tasks',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

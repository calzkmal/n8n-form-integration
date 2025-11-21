import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'n8n Form Integration',
    description: 'Simple form to send data to n8n workflow',
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

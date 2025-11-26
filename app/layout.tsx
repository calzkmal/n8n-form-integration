import type { Metadata } from 'next'
import '@/src/styles/globals.css'

export const metadata: Metadata = {
    title: 'Sentomate Automation Dashboard',
    description: 'n8n workflow control dashboard for automating tasks',
    icons: {
        icon: '/assets/images/icon.png',
        shortcut: '/assets/images/favicon/favicon.ico',
    },
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

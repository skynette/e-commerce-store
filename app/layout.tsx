import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ToastProvider } from '@/providers/toast-provider'
import MyThemeProvider from '@/providers/theme-provider'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Store',
    description: 'Store',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <MyThemeProvider>
                    <ToastProvider />
                    <Navbar />
                    {children}
                    <Footer />
                </MyThemeProvider>
            </body>
        </html>
    )
}

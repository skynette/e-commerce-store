import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ToastProvider } from '@/providers/toast-provider'
import MyThemeProvider from '@/providers/theme-provider'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/modal-provider'


const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Gift Store - Fashion, Electronics, and More',
    description: 'Explore a wide range of high-quality products at Gift Store. Shop for the latest fashion trends, cutting-edge electronics, and much more. Find great deals and enjoy secure online shopping.',
    keywords: 'online shopping, fashion, electronics, deals, e-commerce store',
    assets: [
        'https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&display=swap',
    ]
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
                    {/* @ts-ignore */}
                    <Navbar />
                    <ModalProvider />
                    {children}
                    <Footer />
                </MyThemeProvider>
            </body>
        </html>
    )
}

import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "سيريا باي | حلول دفع متكاملة للتجار في سوريا",
  description: "منصة متكاملة لحلول الدفع الإلكتروني للتجار في سوريا. تقدم خدمات دفع آمنة وسريعة وموثوقة.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileBottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

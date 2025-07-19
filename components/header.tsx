"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">سيريا باي</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              الرئيسية
            </Link>
            <Link href="#payment-solutions" className="text-sm font-medium transition-colors hover:text-primary">
              حلول الدفع
            </Link>
            <Link href="#integration" className="text-sm font-medium transition-colors hover:text-primary">
              التكامل
            </Link>
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              المميزات
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              تواصل معنا
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button className="hidden md:flex">ابدأ الآن</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">فتح القائمة</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <div className="container flex h-full flex-col py-8">
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">إغلاق القائمة</span>
            </Button>
            <nav className="flex flex-col gap-6 text-center">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="#payment-solutions"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                حلول الدفع
              </Link>
              <Link
                href="#integration"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                التكامل
              </Link>
              <Link
                href="#features"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                المميزات
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <Button className="mt-4" onClick={() => setIsMenuOpen(false)}>
                ابدأ الآن
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

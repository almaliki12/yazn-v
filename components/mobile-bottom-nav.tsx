"use client"

import Link from "next/link"
import { Home, CreditCard, BarChart3, MessageCircle, Menu } from "lucide-react"
import { useState } from "react"

export default function MobileBottomNav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* Menú expandido */}
      {showMenu && (
        <div className="fixed inset-0 bg-primary/95 z-50 animate-fade-in">
          <div className="container h-full flex flex-col">
            <div className="flex justify-between items-center py-4">
              <h2 className="text-2xl font-bold text-white">القائمة</h2>
              <button onClick={() => setShowMenu(false)} className="text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-auto py-8">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="mobile-menu-item" onClick={() => setShowMenu(false)}>
                    <Home className="h-6 w-6" />
                    <span className="text-lg">الرئيسية</span>
                  </Link>
                </li>
                <li>
                  <Link href="#payment-solutions" className="mobile-menu-item" onClick={() => setShowMenu(false)}>
                    <CreditCard className="h-6 w-6" />
                    <span className="text-lg">حلول الدفع</span>
                  </Link>
                </li>
                <li>
                  <Link href="#integration" className="mobile-menu-item" onClick={() => setShowMenu(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plug-2"
                    >
                      <path d="M9 2v6" />
                      <path d="M15 2v6" />
                      <path d="M12 17v5" />
                      <path d="M5 8h14" />
                      <path d="M6 11V8h12v3a6 6 0 1 1-12 0v0Z" />
                    </svg>
                    <span className="text-lg">التكامل</span>
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="mobile-menu-item" onClick={() => setShowMenu(false)}>
                    <BarChart3 className="h-6 w-6" />
                    <span className="text-lg">المميزات</span>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="mobile-menu-item" onClick={() => setShowMenu(false)}>
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-lg">تواصل معنا</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-8 px-4">
                <Link href="/login" className="auth-button mb-4" onClick={() => setShowMenu(false)}>
                  تسجيل الدخول
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-in"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>
                </Link>
                <Link href="/register" className="auth-button bg-white text-primary" onClick={() => setShowMenu(false)}>
                  إنشاء حساب
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="22" x2="16" y1="11" y2="11" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Barra de navegación inferior */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-40">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-primary">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">الرئيسية</span>
          </Link>

          <Link
            href="#payment-solutions"
            className="flex flex-col items-center justify-center text-gray-500 hover:text-primary"
          >
            <CreditCard className="h-6 w-6" />
            <span className="text-xs mt-1">حلول الدفع</span>
          </Link>

          <Link href="#features" className="flex flex-col items-center justify-center text-gray-500 hover:text-primary">
            <BarChart3 className="h-6 w-6" />
            <span className="text-xs mt-1">المميزات</span>
          </Link>

          <button
            onClick={() => setShowMenu(true)}
            className="flex flex-col items-center justify-center text-gray-500 hover:text-primary"
          >
            <Menu className="h-6 w-6" />
            <span className="text-xs mt-1">القائمة</span>
          </button>
        </div>
      </div>
    </>
  )
}

import Image from "next/image"
import Link from "next/link"

interface LoginButtonProps {
  className?: string
}

export default function LoginButton({ className = "" }: LoginButtonProps) {
  return (
    <Link href="/login" className={`block ${className}`}>
      <div className="relative h-[60px] w-full rounded-full overflow-hidden">
        <Image src="/images/login-button.jpeg" alt="تسجيل الدخول" fill className="object-cover" />
      </div>
    </Link>
  )
}

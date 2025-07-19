import Image from "next/image"
import { ArrowLeft, CheckCircle } from "lucide-react"
import SocialLinks from "@/components/social-links"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo con gradiente para móviles */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a9d8f]/10 to-transparent md:hidden"></div>

      <div className="container py-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col gap-4 animate-slide-up">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/logo-badge.png"
                alt="شعار سيريا باي"
                width={40}
                height={40}
                className="object-contain"
              />
              <h2 className="text-xl font-bold text-primary">سيريا باي</h2>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              حلول دفع متكاملة <span className="text-primary">للتجار في سوريا</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              نقدم لك منصة دفع إلكتروني متكاملة تساعدك على تنمية أعمالك وتحسين تجربة عملائك
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span>معدلات تحويل أعلى وتجربة دفع سلسة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span>حماية متقدمة ضد الاحتيال</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span>تكامل سهل مع جميع المنصات</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/register"
                className="bg-gradient-to-r from-primary to-teal-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                ابدأ الآن
                <ArrowLeft className="h-4 w-4 inline-block mr-2" />
              </Link>
              <Link
                href="#contact"
                className="bg-white border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 px-6 rounded-full text-center transition-colors"
              >
                تواصل مع المبيعات
              </Link>
            </div>

            <div className="mt-6 md:hidden">
              <p className="mb-2 font-medium">تواصل معنا مباشرة:</p>
              <SocialLinks showLabels={false} iconSize={5} />
            </div>
          </div>

          <div className="relative md:h-[500px] h-[300px] w-full rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image src="/images/pos-banner.png" alt="بوابة الدفع الإلكتروني" fill className="object-contain" priority />
          </div>
        </div>
      </div>

      {/* Banner de herramientas para móviles */}
      <div className="mt-8 md:mt-0 w-full overflow-hidden">
        <div className="relative h-[200px] md:h-[300px] w-full">
          <Image src="/images/tools-banner.jpeg" alt="أدوات تساعد مشروعك ينجح" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

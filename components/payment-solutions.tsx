import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, Globe, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function PaymentSolutions() {
  return (
    <section id="payment-solutions" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          حلول الدفع <span className="text-primary">للتجار</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          نقدم مجموعة متكاملة من حلول الدفع التي تناسب احتياجات مختلف الأعمال التجارية
        </p>
      </div>

      {/* Versión móvil - Tarjetas en carrusel horizontal */}
      <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
        <div className="flex gap-4 w-max">
          <Card className="border-2 hover:border-primary transition-all min-w-[280px] gradient-card">
            <CardHeader className="text-center">
              <div className="feature-icon-container">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white">بطاقات الدفع</CardTitle>
              <CardDescription className="text-white/80">قبول جميع أنواع البطاقات</CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white/90">
              <p>قبول المدفوعات من خلال بطاقات الائتمان والخصم المباشر من جميع البنوك السورية والعالمية</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all min-w-[280px] gradient-card">
            <CardHeader className="text-center">
              <div className="feature-icon-container">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white">المحافظ الإلكترونية</CardTitle>
              <CardDescription className="text-white/80">دفع سريع وآمن</CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white/90">
              <p>تكامل مع المحافظ الإلكترونية المحلية والعالمية لتوفير تجربة دفع سلسة لعملائك</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all min-w-[280px] gradient-card">
            <CardHeader className="text-center">
              <div className="feature-icon-container">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white">الدفع عبر الإنترنت</CardTitle>
              <CardDescription className="text-white/80">حلول للتجارة الإلكترونية</CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white/90">
              <p>بوابات دفع متكاملة لمواقع التجارة الإلكترونية مع واجهات برمجة سهلة التكامل</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all min-w-[280px] gradient-card">
            <CardHeader className="text-center">
              <div className="feature-icon-container">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white">نقاط البيع</CardTitle>
              <CardDescription className="text-white/80">أجهزة متطورة للمتاجر</CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white/90">
              <p>أجهزة نقاط بيع حديثة تدعم جميع وسائل الدفع مع تقارير مبيعات متكاملة</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Versión escritorio - Grid de tarjetas */}
      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 hover:border-primary transition-all">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>بطاقات الدفع</CardTitle>
            <CardDescription>قبول جميع أنواع البطاقات</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>قبول المدفوعات من خلال بطاقات الائتمان والخصم المباشر من جميع البنوك السورية والعالمية</p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary transition-all">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>المحافظ الإلكترونية</CardTitle>
            <CardDescription>دفع سريع وآمن</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>تكامل مع المحافظ الإلكترونية المحلية والعالمية لتوفير تجربة دفع سلسة لعملائك</p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary transition-all">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>الدفع عبر الإنترنت</CardTitle>
            <CardDescription>حلول للتجارة الإلكترونية</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>بوابات دفع متكاملة لمواقع التجارة الإلكترونية مع واجهات برمجة سهلة التكامل</p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary transition-all">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>نقاط البيع</CardTitle>
            <CardDescription>أجهزة متطورة للمتاجر</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>أجهزة نقاط بيع حديثة تدعم جميع وسائل الدفع مع تقارير مبيعات متكاملة</p>
          </CardContent>
        </Card>
      </div>

      {/* Sección de factura/invoice */}
      <div className="mt-16 bg-primary/5 rounded-2xl p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end mb-4">
              <Image src="/images/invoice-icon.png" alt="فاتورة" width={80} height={80} className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-4">نظام فواتير متكامل</h3>
            <p className="text-muted-foreground">
              أصدر فواتير احترافية وتتبع المدفوعات بسهولة مع نظام الفواتير المتكامل. يمكنك إرسال الفواتير إلكترونياً
              وتتبع حالة الدفع في الوقت الفعلي.
            </p>
          </div>
          <div className="relative h-[250px] md:h-[300px]">
            <Image src="/images/tools-banner.jpeg" alt="نظام فواتير" fill className="object-contain rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

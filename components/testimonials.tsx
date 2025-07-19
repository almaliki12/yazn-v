import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          ماذا يقول <span className="text-primary">عملاؤنا</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          تعرف على تجارب التجار الذين يستخدمون بوابة الدفع الإلكتروني الخاصة بنا
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <p className="text-lg">
              "ساعدتنا بوابة الدفع الإلكتروني على زيادة مبيعاتنا عبر الإنترنت بنسبة 40٪. عملية التكامل كانت سهلة للغاية
              والدعم الفني ممتاز."
            </p>
          </CardContent>
          <CardFooter className="flex items-center gap-4 pt-4">
            <div className="h-12 w-12 rounded-full overflow-hidden relative">
              <Image src="/placeholder.svg?height=100&width=100" alt="صورة العميل" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">أحمد محمود</h4>
              <p className="text-sm text-muted-foreground">مدير شركة تكنولوجيا</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <p className="text-lg">
              "نظام التقارير والتحليلات ساعدنا على فهم سلوك العملاء بشكل أفضل. الأمان والموثوقية من أهم ميزات المنصة."
            </p>
          </CardContent>
          <CardFooter className="flex items-center gap-4 pt-4">
            <div className="h-12 w-12 rounded-full overflow-hidden relative">
              <Image src="/placeholder.svg?height=100&width=100" alt="صورة العميل" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">سارة خالد</h4>
              <p className="text-sm text-muted-foreground">صاحبة متجر إلكتروني</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <p className="text-lg">
              "معدلات التحويل ارتفعت بشكل ملحوظ بعد استخدام بوابة الدفع. سهولة الاستخدام والتكامل السلس مع نظامنا كانت
              ميزة رائعة."
            </p>
          </CardContent>
          <CardFooter className="flex items-center gap-4 pt-4">
            <div className="h-12 w-12 rounded-full overflow-hidden relative">
              <Image src="/placeholder.svg?height=100&width=100" alt="صورة العميل" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">محمد عبدالله</h4>
              <p className="text-sm text-muted-foreground">مدير مبيعات</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

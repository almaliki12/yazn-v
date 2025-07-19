import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, BarChart3, Clock, Globe, CreditCard, Wallet } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          مزايا <span className="text-primary">وميزات الأعمال</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          اكتشف كيف يمكن لبوابة الدفع الإلكتروني الخاصة بنا أن تساعد في تنمية أعمالك
        </p>
      </div>

      {/* Versión móvil - Tarjetas en carrusel horizontal */}
      <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
        <div className="flex gap-4 w-max">
          <Card className="hover:shadow-lg transition-all min-w-[280px] blue-gradient-card">
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-white mb-4" />
              <CardTitle className="text-white">أمان متقدم</CardTitle>
              <CardDescription className="text-white/80">حماية كاملة للمعاملات المالية</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                نظام أمان متطور يتوافق مع المعايير العالمية لحماية البيانات المالية والشخصية، مع تشفير من طرف إلى طرف
                لجميع المعاملات.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all min-w-[280px] blue-gradient-card">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-white mb-4" />
              <CardTitle className="text-white">تقارير وتحليلات</CardTitle>
              <CardDescription className="text-white/80">رؤى مفصلة لأداء أعمالك</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                لوحة تحكم متطورة توفر تقارير تفصيلية وتحليلات دقيقة لمساعدتك على فهم أنماط المبيعات واتخاذ قرارات أفضل
                لأعمالك.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all min-w-[280px] blue-gradient-card">
            <CardHeader>
              <Clock className="h-12 w-12 text-white mb-4" />
              <CardTitle className="text-white">معالجة فورية</CardTitle>
              <CardDescription className="text-white/80">تسوية سريعة للمدفوعات</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                معالجة فورية للمدفوعات وتسوية سريعة للأموال في حسابك المصرفي، مما يساعد على تحسين التدفق النقدي لأعمالك.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all min-w-[280px] blue-gradient-card">
            <CardHeader>
              <Globe className="h-12 w-12 text-white mb-4" />
              <CardTitle className="text-white">دعم متعدد العملات</CardTitle>
              <CardDescription className="text-white/80">قبول مدفوعات بعملات مختلفة</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                إمكانية قبول المدفوعات بعملات متعددة، مما يتيح لك توسيع نطاق أعمالك عالمياً وتلبية احتياجات العملاء من
                مختلف البلدان.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Versión escritorio - Grid de tarjetas */}
      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
            <CardTitle>أمان متقدم</CardTitle>
            <CardDescription>حماية كاملة للمعاملات المالية</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              نظام أمان متطور يتوافق مع المعايير العالمية لحماية البيانات المالية والشخصية، مع تشفير من طرف إلى طرف
              لجميع المعاملات.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <BarChart3 className="h-12 w-12 text-primary mb-4" />
            <CardTitle>تقارير وتحليلات</CardTitle>
            <CardDescription>رؤى مفصلة لأداء أعمالك</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              لوحة تحكم متطورة توفر تقارير تفصيلية وتحليلات دقيقة لمساعدتك على فهم أنماط المبيعات واتخاذ قرارات أفضل
              لأعمالك.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <Clock className="h-12 w-12 text-primary mb-4" />
            <CardTitle>معالجة فورية</CardTitle>
            <CardDescription>تسوية سريعة للمدفوعات</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              معالجة فورية للمدفوعات وتسوية سريعة للأموال في حسابك المصرفي، مما يساعد على تحسين التدفق النقدي لأعمالك.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <Globe className="h-12 w-12 text-primary mb-4" />
            <CardTitle>دعم متعدد العملات</CardTitle>
            <CardDescription>قبول مدفوعات بعملات مختلفة</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              إمكانية قبول المدفوعات بعملات متعددة، مما يتيح لك توسيع نطاق أعمالك عالمياً وتلبية احتياجات العملاء من
              مختلف البلدان.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <CardTitle>إدارة الاشتراكات</CardTitle>
            <CardDescription>نماذج دفع متكررة</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              أدوات متطورة لإدارة الاشتراكات والمدفوعات المتكررة، مما يساعد على بناء مصدر دخل مستقر ومستدام لأعمالك.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <Wallet className="h-12 w-12 text-primary mb-4" />
            <CardTitle>رسوم تنافسية</CardTitle>
            <CardDescription>أسعار شفافة بدون رسوم خفية</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              نقدم رسوماً تنافسية وشفافة بدون أي تكاليف خفية، مع خطط تسعير مرنة تناسب احتياجات الأعمال الصغيرة والكبيرة.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Botón de registro para móviles */}
      <div className="mt-12 text-center md:hidden">
        <a
          href="/register"
          className="bg-gradient-to-r from-primary to-teal-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
        >
          ابدأ الآن مجاناً
        </a>
      </div>
    </section>
  )
}

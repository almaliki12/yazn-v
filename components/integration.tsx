import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, ShoppingBag } from "lucide-react"

export default function Integration() {
  return (
    <section id="integration" className="container py-12 md:py-24 bg-muted/50 rounded-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          تكامل <span className="text-primary">سهل وسريع</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          صمم نظام الدفع الخاص بك بسهولة من خلال واجهات برمجة متطورة وأدوات تكامل مرنة
        </p>
      </div>

      <Tabs defaultValue="api" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="api" className="text-lg py-3">
            <Code className="h-5 w-5 ml-2" />
            واجهة برمجية
          </TabsTrigger>
          <TabsTrigger value="ecommerce" className="text-lg py-3">
            <ShoppingBag className="h-5 w-5 ml-2" />
            متاجر إلكترونية
          </TabsTrigger>
          <TabsTrigger value="website" className="text-lg py-3">
            <Globe className="h-5 w-5 ml-2" />
            مواقع الويب
          </TabsTrigger>
        </TabsList>
        <TabsContent value="api" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">واجهة برمجية سهلة الاستخدام</h3>
                  <p className="text-muted-foreground mb-4">
                    نوفر واجهة برمجية (API) قوية وموثقة بشكل جيد تتيح لك دمج حلول الدفع الخاصة بنا في تطبيقك أو موقعك
                    بسهولة.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>دعم لغات البرمجة المختلفة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>توثيق شامل وأمثلة كود</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>بيئة اختبار متكاملة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>دعم فني متخصص</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image src="/placeholder.svg?height=600&width=600" alt="واجهة برمجية" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ecommerce" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">تكامل مع منصات التجارة الإلكترونية</h3>
                  <p className="text-muted-foreground mb-4">
                    نوفر إضافات وتكاملات جاهزة لجميع منصات التجارة الإلكترونية الشهيرة لتسهيل عملية الدمج.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>تكامل مع ووردبريس ووكومرس</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>تكامل مع ماجنتو وشوبيفاي</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>تكامل مع المنصات المحلية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>تثبيت وإعداد سهل</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="تكامل مع منصات التجارة الإلكترونية"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="website" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">حلول لمواقع الويب</h3>
                  <p className="text-muted-foreground mb-4">
                    أدوات سهلة الاستخدام لدمج بوابة الدفع في موقع الويب الخاص بك بغض النظر عن التقنية المستخدمة.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>صفحات دفع مخصصة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>روابط دفع قابلة للمشاركة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>نماذج دفع مدمجة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>تخصيص كامل للواجهة</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="حلول لمواقع الويب"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

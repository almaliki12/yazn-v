import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Send, Camera, Video, Mail, Phone, Globe, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">سيريا باي</h3>
            <p className="text-muted-foreground">
              منصة متكاملة لحلول الدفع الإلكتروني للتجار في سوريا. نقدم خدمات دفع آمنة وسريعة وموثوقة.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="https://wa.me/967739590467"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">واتساب</span>
              </Link>
              <Link
                href="https://t.me/almaliki467"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Send className="h-6 w-6" />
                <span className="sr-only">تيليجرام</span>
              </Link>
              <Link
                href="https://www.instagram.com/almal_ki44"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link
                href="https://www.snapchat.com/add/almali_ki45?share_id=FWsGm9_59Hw&locale=ar-EG"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Camera className="h-6 w-6" />
                <span className="sr-only">سناب شات</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@almal_ki44?_t=ZP-8vNPKqpcfMc&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Video className="h-6 w-6" />
                <span className="sr-only">تيك توك</span>
              </Link>
              <Link
                href="https://www.facebook.com/share/12KEgMHA9L1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">فيسبوك</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#payment-solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  حلول الدفع
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#integration" className="text-muted-foreground hover:text-primary transition-colors">
                  التكامل
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  المميزات
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">الدعم</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  مركز المساعدة
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+967739590467" className="text-muted-foreground hover:text-primary transition-colors">
                  +967 739 590 467
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:almaliki.electronic.services@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  almaliki.electronic.services@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">دمشق، سوريا</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} سيريا باي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

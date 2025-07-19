"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Instagram,
  Camera,
  Video,
  Facebook,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            تواصل <span className="text-primary">معنا</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            نحن هنا لمساعدتك في اختيار الحل المناسب لأعمالك. تواصل معنا وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">الهاتف</h3>
                <p className="text-muted-foreground">+967 739 590 467</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">almaliki.electronic.services@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">العنوان</h3>
                <p className="text-muted-foreground">دمشق، سوريا</p>
              </div>
            </div>
          </div>

          <div className="mt-8 hidden md:block">
            <h3 className="font-semibold mb-4">تواصل معنا عبر وسائل التواصل الاجتماعي</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/967739590467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white p-2 rounded-md transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>واتساب</span>
              </Link>

              <Link
                href="https://t.me/almaliki467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc] hover:text-white p-2 rounded-md transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>تيليجرام</span>
              </Link>

              <Link
                href="https://www.instagram.com/almal_ki44"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C] hover:text-white p-2 rounded-md transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>انستغرام</span>
              </Link>

              <Link
                href="https://www.snapchat.com/add/almali_ki45?share_id=FWsGm9_59Hw&locale=ar-EG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FFFC00]/10 text-[#FFFC00] hover:bg-[#FFFC00] hover:text-black p-2 rounded-md transition-colors"
              >
                <Camera className="h-5 w-5" />
                <span>سناب شات</span>
              </Link>

              <Link
                href="https://www.tiktok.com/@almal_ki44?_t=ZP-8vNPKqpcfMc&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#000000]/10 text-[#000000] dark:text-white hover:bg-[#000000] hover:text-white p-2 rounded-md transition-colors"
              >
                <Video className="h-5 w-5" />
                <span>تيك توك</span>
              </Link>

              <Link
                href="https://www.facebook.com/share/12KEgMHA9L1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white p-2 rounded-md transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>فيسبوك</span>
              </Link>
            </div>
          </div>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/logo-badge.png"
                alt="شعار سيريا باي"
                width={40}
                height={40}
                className="object-contain"
              />
              <CardTitle>استفسار</CardTitle>
            </div>
            <CardDescription>أرسل لنا استفسارك وسنتواصل معك في أقرب وقت ممكن</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">تم إرسال استفسارك بنجاح</h3>
                <p className="text-muted-foreground">شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.</p>
                <Button
                  className="mt-6 bg-gradient-to-r from-primary to-teal-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsSubmitted(false)}
                >
                  إرسال استفسار آخر
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">الاسم الأول</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">الاسم الأخير</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-method">طريقة التواصل المفضلة</Label>
                  <Select>
                    <SelectTrigger id="contact-method">
                      <SelectValue placeholder="اختر طريقة التواصل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">البريد الإلكتروني</SelectItem>
                      <SelectItem value="phone">الهاتف</SelectItem>
                      <SelectItem value="whatsapp">واتساب</SelectItem>
                      <SelectItem value="telegram">تيليجرام</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-type">نوع النشاط التجاري</Label>
                  <Select>
                    <SelectTrigger id="business-type">
                      <SelectValue placeholder="اختر نوع النشاط" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">تجارة التجزئة</SelectItem>
                      <SelectItem value="ecommerce">تجارة إلكترونية</SelectItem>
                      <SelectItem value="services">خدمات</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea id="message" rows={4} required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-teal-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  إرسال
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Botón flotante de WhatsApp para móviles */}
      <div className="md:hidden">
        <a
          href="https://wa.me/967739590467"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-button"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}

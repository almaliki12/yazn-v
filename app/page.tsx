import HeroSection from "@/components/hero-section"
import PaymentSolutions from "@/components/payment-solutions"
import Integration from "@/components/integration"
import Features from "@/components/features"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/testimonials"
import Partners from "@/components/partners"
import LoginButton from "@/components/login-button"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HeroSection />
      <PaymentSolutions />
      <Integration />
      <Features />
      <div className="container md:hidden">
        <LoginButton />
      </div>
      <Testimonials />
      <Partners />
      <ContactForm />
    </div>
  )
}

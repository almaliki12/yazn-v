import Image from "next/image"

export default function Partners() {
  return (
    <section className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          شركاؤنا <span className="text-primary">الموثوقون</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          نتعاون مع مجموعة من أفضل البنوك والمؤسسات المالية لتقديم خدمات دفع موثوقة
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative h-12 w-32 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <Image
              src={`/placeholder.svg?height=100&width=200&text=Partner ${i + 1}`}
              alt={`شريك ${i + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote } from "lucide-react"
import Image from "next/image"
export default function ClientReview() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Client Feedback</span>
            </h2>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-4 left-2 w-10 h-10 text-accent opacity-20" />

            <div className="relative z-10">
              <p className="text-foreground-secondary text-lg leading-relaxed mb-8 italic">
                "Working with Khali was a great experience. Despite being young, they showed incredible professionalism
                and technical skills. The project was delivered on time with clean code and excellent attention to
                detail. Highly recommended for anyone looking for a talented developer!"
              </p>
           
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-surface border border-border overflow-hidden">
                  <Image src={'/client-acc.png'} alt="Client Avatar" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Lyann</p>
                  <p className="text-foreground-secondary text-sm">Client</p>
                </div>

              </div>
              <a href="https://github.com/gwjq62862/consulting-website" className="text-blue-500 text-sm absolute right-6 bottom-4">Cleint project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

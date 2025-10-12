"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Hero() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-foreground-secondary text-sm uppercase tracking-wider">
                Full Stack Developer
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Khali</span>
              </h1>
            </div>

            <p className="text-foreground-secondary text-lg leading-relaxed max-w-xl">
              A 17-year-old full-stack developer from Myanmar. I'm a fast learner who can adapt to new technologies
              quickly. I build modern web applications with clean code and great user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="gradient-bg text-background px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-surface-hover transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold gradient-text">1+</p>
                <p className="text-foreground-secondary text-sm">Client Project</p>
              </div>
              <div className="border-l border-border pl-6">
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-foreground-secondary text-sm">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right Side - SVG Portrait */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full animate-pulse"></div>

              <Image
                src="/khali.svg"
                alt="Khali portrait"
                width={400}
                height={400}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Neon DB", icon: SiPostgresql, color: "#00E599" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
]

export default function Skills() {
  const { elementRef, isVisible } = useScrollAnimation()

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills,...skills]

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Technologies I work with to build modern web applications
            </p>
          </div>

          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedSkills.map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="flex-shrink-0 mx-6 group">
                  <div className="bg-background border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:scale-110 w-40 h-40 flex flex-col items-center justify-center gap-4">
                    <skill.icon
                      className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <p className="text-foreground text-sm font-medium text-center">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

      
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

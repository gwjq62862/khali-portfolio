"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, Github } from "lucide-react"

const projects = [

  {
    title: "Khali Socail media",
    description: "A full-stack social media application built using React, Node.js, Express, and MongoDB. Users can create posts, like/unlike posts, comment, follow/unfollow others, and receive real-time notifications — all with a clean and modern UI.",
    image: "/Khali-social-media.png",
    techStack: ["node js", "express", "React","tailwind css","daisyui","cloundinary","mongo db","app router","tenstack query"],
    liveDemo: "https://khali-social-media-app.onrender.com/",
    github: "https://github.com/gwjq62862/Khali-social-media-app",
  },
]

export default function Projects() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              A collection of projects I've worked on
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground-secondary text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-background border border-border rounded-full text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.liveDemo}
                      className="flex items-center gap-2 text-sm text-white hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Github} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
        
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Kahli</h3>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              Full-stack developer from Myanmar, building modern web applications with passion and precision.
            </p>
          </div>

    
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/gwjq62862"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            
            </div>
          </div>
        </div>

      
        <div className="pt-8 border-t border-border text-center">
          <p className="text-foreground-secondary text-sm">
            © {currentYear} Khali. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

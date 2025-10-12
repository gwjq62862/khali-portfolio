"use client"

import * as React from "react"
import { useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mail, Phone, Send } from "lucide-react"
import { sendEmail } from "@/app/actions/sendEmail"

import { 
    AlertDialog, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogFooter, 
    AlertDialogTitle, 
    AlertDialogDescription, 
    AlertDialogCancel,
    AlertDialogTrigger 
} from '@/components/ui/alert-dialog'




type DialogContent = {
    title: string;
    description: string;
    isSuccess: boolean;
} | null;

export default function Contact() {
    const { elementRef, isVisible } = useScrollAnimation()

    const formRef = useRef<HTMLFormElement>(null) 
    const [isLoading, setIsLoading] = useState(false) 
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [dialogContent, setDialogContent] = useState<DialogContent>(null) 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const form = new FormData(e.currentTarget) 
        
        try {
            const res = await sendEmail(form)
            
            if (res?.success) {
                setDialogContent({
                    title: "Email Sent Successfully! ",
                    description: "Thank you for reaching out. I will get back to you soon.",
                    isSuccess: true,
                });
                formRef.current?.reset() // Reset form fields on success
            } else {
                setDialogContent({
                    title: "Failed to Send Email ",
                    description: res?.error || "Something went wrong. Please try again later.",
                    isSuccess: false,
                });
            }
        } catch (error) {
            console.error("Client Error during email submission:", error);
            setDialogContent({
                title: "Network Error 🔌",
                description: "Could not reach the server. Please check your connection.",
                isSuccess: false,
            });
        } finally {
            setIsLoading(false) 
            setIsDialogOpen(true) 
        }
    }

    const handleDialogClose = () => {
        setIsDialogOpen(false)
        setDialogContent(null) 
    }

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={elementRef}
                    className={`transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            <span className="gradient-text">Get In Touch</span>
                        </h2>
                        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                            Let's work together to create something amazing
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                    
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:phoheinwai@gmail.com"
                                        className="flex items-center gap-4 text-foreground-secondary hover:text-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center group-hover:border-accent transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-foreground-muted">Email</p>
                                            <p className="text-foreground">phoheinwai@gmail.com</p>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:09671390966"
                                        className="flex items-center gap-4 text-foreground-secondary hover:text-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center group-hover:border-accent transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-foreground-muted">Phone</p>
                                            <p className="text-foreground">09671390966</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-surface border border-border rounded-xl p-6">
                                <h4 className="font-semibold mb-3">About Me</h4>
                                <p className="text-foreground-secondary text-sm leading-relaxed">
                                    I'm a fast learner who loves exploring new technologies and building innovative solutions. Based in
                                    Myanmar, I'm passionate about creating web applications that make a difference.
                                </p>
                            </div>
                        </div>

                        
                        <div className="bg-surface border border-border rounded-xl p-8">
                       
                            <AlertDialog open={isDialogOpen} onOpenChange={handleDialogClose}>
                           
                                <AlertDialogTrigger asChild className="hidden" />

                                <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground resize-none"
                                            placeholder="Send a message ."
                                        />
                                    </div>

                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="w-full gradient-bg text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <Send size={18} />
                                        {isLoading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>

                               
                                {dialogContent && (
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle 
                                                className={dialogContent.isSuccess ? 'text-green-500' : 'text-red-500'}
                                            >
                                                {dialogContent.title}
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                {dialogContent.description}
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel onClick={handleDialogClose}>
                                                {dialogContent.isSuccess ? 'Great!' : 'Close'}
                                            </AlertDialogCancel>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                )}
                            </AlertDialog>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
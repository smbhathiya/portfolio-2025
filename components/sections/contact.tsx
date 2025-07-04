"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconBrandWhatsapp, IconMapPin } from "@tabler/icons-react"

export function ContactSection() {
  // Function to open email client
  const handleEmailClick = () => {
    window.location.href = "mailto:your-email@example.com?subject=Portfolio%20Inquiry"
  }

  // Function to open WhatsApp
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without +)
    const whatsappNumber = "94777123456"
    window.open(`https://wa.me/${whatsappNumber}?text=Hi%20Bhathiya,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`, "_blank")
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-6 text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 backdrop-blur-sm rounded-full mb-4 border border-primary/20">
            <Badge className="px-6 py-2 text-lg font-medium bg-primary text-primary-foreground rounded-full shadow-md">Get In Touch</Badge>
          </div>
          
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary-foreground">
            Contact Me
          </h2>
          
          <div className="relative">
            <p className="max-w-[75%] text-muted-foreground text-lg md:text-xl mt-8 mx-auto">
              Let&apos;s connect and discuss how we can work together on your next project
            </p>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Featured contact method - Email */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center p-5 border border-primary/30">
                <IconMail className="h-10 w-10 text-primary" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Email Me</h3>
                <p className="text-muted-foreground mb-6">
                  Send me an email and I&apos;ll get back to you as soon as possible
                </p>
                <Button 
                  size="lg" 
                  onClick={handleEmailClick}
                  className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-md group-hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Open Email App</span>
                  <IconMail className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* WhatsApp Card - Modernized */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-8 border-green-500/20 bg-gradient-to-br from-background to-green-50/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group dark:from-background dark:to-green-950/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center p-5 border border-green-500/30">
                <IconBrandWhatsapp className="h-10 w-10 text-green-500" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Message me directly on WhatsApp for a quick response
                </p>
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="rounded-full px-8 py-6 text-lg bg-green-500 hover:bg-green-600 shadow-md group-hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Message on WhatsApp</span>
                  <IconBrandWhatsapp className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Connect With Me On Social Media</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild className="rounded-full h-16 w-16 p-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconBrandGithub className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full h-16 w-16 p-0">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconBrandLinkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full h-16 w-16 p-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <IconBrandTwitter className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <IconMapPin className="h-5 w-5" />
            <span>Colombo, Sri Lanka</span>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-70 -z-10"></div>
      </div>
    </section>
  );
}

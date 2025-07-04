"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
    <section id="contact" className="py-24 md:py-32 bg-muted/20 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-5 text-center mb-16">
          <Badge className="px-3.5 py-1.5 text-base font-medium mb-2" variant="outline">Get In Touch</Badge>
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight">Contact Me</h2>
          <p className="max-w-[85%] text-muted-foreground text-lg md:text-xl mt-4">
            Let&apos;s connect and discuss how we can work together
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <Card className="overflow-hidden border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <IconMail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Email Me</h3>
              <p className="text-muted-foreground">
                Send me an email and I&apos;ll get back to you as soon as possible
              </p>
              <Button onClick={handleEmailClick} className="mt-2 w-full">
                Open Email App
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="overflow-hidden border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                <IconBrandWhatsapp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <p className="text-muted-foreground">
                Message me directly on WhatsApp for a quick response
              </p>
              <Button onClick={handleWhatsAppClick} className="mt-2 w-full bg-green-500 hover:bg-green-600">
                Message on WhatsApp
              </Button>
            </CardContent>
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

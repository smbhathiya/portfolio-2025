"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
} from "@tabler/icons-react";

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@bhathiya.dev";
  };

  return (
    <section id="contact" className="py-32 md:py-44 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-muted-foreground/3 leading-none whitespace-nowrap">
          CONTACT
        </div>
      </div>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-8 text-center mb-16">
          <div className="space-y-4">
            {/* <p className="text-lg font-medium text-muted-foreground">
              Let&apos;s connect
            </p> */}
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
              Let&apos;s <span className="text-primary">Connect</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              Let&apos;s connect and discuss how we can work together on your
              next project
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row gap-10 items-center justify-center mb-16 max-w-4xl">
          {/* Email Card */}
          <Card className="flex-1 p-8 border-primary/20 bg-gradient-to-br from-background to-muted/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center p-4 border border-primary/30">
                <IconMail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Send me an email and I&apos;ll get back to you as soon as
                possible
              </p>
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="rounded-full cursor-pointer px-8 py-4 text-lg bg-primary hover:bg-primary/90 shadow-md group-hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Send Email</span>
                <IconMail className="h-10 w-10" />
              </Button>
            </div>
          </Card>
          {/* WhatsApp Card */}
          <Card className="flex-1 p-8 border-green-500/20 bg-gradient-to-br from-background to-green-50/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group dark:from-background dark:to-green-950/10">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center p-4 border border-green-500/30">
                <IconBrandWhatsapp className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Message me directly on WhatsApp for a quick response
              </p>
              <Button
                size="lg"
                asChild
                className="rounded-full px-8 py-4 text-lg bg-green-500 hover:bg-green-600 shadow-md group-hover:shadow-lg transition-all flex items-center gap-2"
              >
                <a
                  href="https://wa.me/94768941816"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Message on WhatsApp</span>
                  <IconBrandWhatsapp className="h-10 w-10" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">
            Connect With Me On Social Media
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full h-16 w-16 p-0 border border-primary hover:bg-primary/10 group"
            >
              <a
                href="https://github.com/smbhathiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconBrandGithub className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full h-16 w-16 p-0 border border-primary hover:bg-primary/10 group"
            >
              <a
                href="https://www.linkedin.com/in/bhathiya-lakshan-91579722a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full h-16 w-16 p-0 border border-primary hover:bg-primary/10 group"
            >
              <a
                href="https://x.com/smbhathiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <IconBrandTwitter className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full h-16 w-16 p-0 border border-primary hover:bg-primary/10 group"
            >
              <a
                href="https://www.facebook.com/smbhathiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>
        </div>
        {/* Location */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <IconMapPin className="h-5 w-5" />
            <span>Kadawatha, Sri Lanka</span>
          </div>
        </div>
        {/* Decorative elements matching other sections */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-primary/5 to-primary/10 rounded-full blur-3xl opacity-40 -z-10" />
      </div>
    </section>
  );
}

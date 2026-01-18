"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandTwitter,
  IconBrandGithub,
  IconSend,
} from "@tabler/icons-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Create mailto link with form data
    const mailtoLink = `mailto:info@bhathiya.dev?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[20vw] font-black text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap opacity-50 blur-[1px]">
          CONNECT
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <Badge className="mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Get In Touch
          </Badge>
          <h2 className="font-black text-5xl md:text-8xl tracking-tighter uppercase text-center leading-none">
            Let&apos;s <span className="text-highlight">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch max-w-6xl mx-auto">
          {/* Contact Info Column */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-tight">
                  Available for new <br />
                  <span className="text-primary italic">opportunities</span>
                </h3>
                <p className="text-muted-foreground text-xl font-medium max-w-md">
                  I&apos;m always interested in hearing about new projects and
                  innovative ideas.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <IconMail className="h-6 w-6" />,
                    label: "Email",
                    value: "info@bhathiya.dev",
                    href: "mailto:info@bhathiya.dev",
                  },
                  {
                    icon: <IconBrandWhatsapp className="h-6 w-6" />,
                    label: "WhatsApp",
                    value: "+94 72 309 5865",
                    href: "https://wa.me/94723095865",
                  },
                  {
                    icon: <IconMapPin className="h-6 w-6" />,
                    label: "Location",
                    value: "Kadawatha, Sri Lanka",
                    href: "#",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-12 flex gap-4">
              {[
                {
                  icon: <IconBrandLinkedin className="h-6 w-6" />,
                  href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                },
                {
                  icon: <IconBrandGithub className="h-6 w-6" />,
                  href: "https://github.com/smbhathiya",
                },
                {
                  icon: <IconBrandTwitter className="h-6 w-6" />,
                  href: "https://x.com/smbhathiya",
                },
              ].map((social, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full w-14 h-14 border-white/10 bg-white/[0.03] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-10 md:p-12 glass-card rounded-[4rem] relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/50">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full h-16 px-8 rounded-[1.5rem] bg-white/[0.03] border border-white/5 focus:border-primary/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-muted-foreground/20 font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/50">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      className="w-full h-16 px-8 rounded-[1.5rem] bg-white/[0.03] border border-white/5 focus:border-primary/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-muted-foreground/20 font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/50">
                    Subject
                  </label>
                  <input
                    required
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full h-16 px-8 rounded-[1.5rem] bg-white/[0.03] border border-white/5 focus:border-primary/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-muted-foreground/20 font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/50">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 focus:border-primary/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-muted-foreground/20 font-bold resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-20 rounded-[2rem] bg-primary text-primary-foreground font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-primary/20 hover:scale-[1.01] transition-all"
                >
                  <span className="flex items-center gap-3">
                    Send Message <IconSend className="h-5 w-5" />
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

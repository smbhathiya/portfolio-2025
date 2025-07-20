import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
title: "Bhathiya Lakshan | Full Stack Developer",
description: "Portfolio of Bhathiya Lakshan, a Full Stack Developer specializing in modern web technologies. Experience at IMOS, Ishara Madhushan Online School, Digi Pro Solutions.",
keywords: ["Bhathiya Lakshan", "developer", "portfolio", "full stack", "web development", "frontend", "backend", "IMOS", "Ishara Madhushan Online School", "Digi Pro Solutions"],
metadataBase: new URL("https://bhathiya.dev"),
alternates: {
  canonical: "/",
},
openGraph: {
  title: "Bhathiya Lakshan | Full Stack Developer",
  description: "Portfolio of Bhathiya Lakshan, a Full Stack Developer specializing in modern web technologies.",
  url: "https://bhathiya.dev",
  siteName: "Bhathiya Lakshan Portfolio",
  images: [
    {
      url: "/me.jpg",
      width: 800,
      height: 600,
      alt: "Bhathiya Lakshan profile photo",
    },
  ],
  locale: "en_US",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Bhathiya Lakshan | Full Stack Developer",
  description: "Portfolio of Bhathiya Lakshan, a Full Stack Developer specializing in modern web technologies.",
  site: "@smbhathiya",
  creator: "@smbhathiya",
  images: ["/me.jpg"],
},
icons: {
  icon: "/favicon.ico",
},
themeColor: [
  { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  { media: "(prefers-color-scheme: dark)", color: "#18181b" },
],
robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

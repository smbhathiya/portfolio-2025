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
  keywords: [
    "Bhathiya Lakshan",
    "developer",
    "portfolio", 
    "full stack",
    "web development",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "IMOS",
    "Ishara Madhushan Online School",
    "Digi Pro Solutions",
    "software engineer",
    "web developer",
    "Sri Lanka"
  ],
  authors: [{ name: "Bhathiya Lakshan" }],
  creator: "Bhathiya Lakshan",
  publisher: "Bhathiya Lakshan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhathiya.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhathiya Lakshan | Full Stack Developer",
    description: "Portfolio of Bhathiya Lakshan, a Full Stack Developer specializing in modern web technologies. View projects, skills, and experience.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Bhathiya Lakshan - Full Stack Developer",
        type: "image/jpeg",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  manifest: "/site.webmanifest",
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
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bhathiya Lakshan",
    "application-name": "Bhathiya Lakshan Portfolio",
    "mobile-web-app-capable": "yes",
    "msapplication-TileImage": "/mstile-144x144.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bhathiya Lakshan" />
        <meta name="application-name" content="Bhathiya Lakshan Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bhathiya Lakshan",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in modern web technologies",
              "url": "https://bhathiya.dev",
              "image": "https://bhathiya.dev/me.jpg",
              "sameAs": [
                "https://twitter.com/smbhathiya",
                "https://github.com/smbhathiya",
                "https://linkedin.com/in/bhathiya-lakshan"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "IMOS"
                },
                {
                  "@type": "Organization", 
                  "name": "Ishara Madhushan Online School"
                },
                {
                  "@type": "Organization",
                  "name": "Digi Pro Solutions"
                }
              ],
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK"
              }
            })
          }}
        />
      </head>
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

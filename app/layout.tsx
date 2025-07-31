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
  title: {
    default: "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
    template: "%s | Bhathiya Lakshan"
  },
  description: "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies. Lead Software Engineer at Digi Pro Solutions with experience at IMOS and Nanosoft Global. View portfolio projects including AI Image Generator, Weather App, and more.",
  keywords: [
    "Bhathiya Lakshan",
    "Full Stack Developer",
    "Software Engineer",
    "Lead Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "Software Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "ShadCN UI",
    "AI Image Generator",
    "Weather App",
    "Bliss Café",
    "Cineplex Cinema",
    "Debra Event Management",
    "Digi Pro Solutions",
    "IMOS",
    "Ishara Madhushan Online School",
    "Nanosoft Global",
    "Cardiff Metropolitan University",
    "Sri Lanka Developer",
    "Modern Web Technologies",
    "Responsive Web Design",
    "Progressive Web App",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "Git",
    "GitHub",
    "Firebase",
    "Cloudinary",
    "Clerk Authentication"
  ],
  authors: [{ name: "Bhathiya Lakshan", url: "https://bhathiya.dev" }],
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
    title: "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
    description: "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies. Lead Software Engineer at Digi Pro Solutions with experience at IMOS and Nanosoft Global.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Bhathiya Lakshan - Full Stack Developer and Software Engineer",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
    description: "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
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
    "author": "Bhathiya Lakshan",
    "category": "Portfolio",
    "classification": "Personal Website",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "robots": "index, follow",
    "google-site-verification": "your-google-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
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
        <meta name="author" content="Bhathiya Lakshan" />
        <meta name="category" content="Portfolio" />
        <meta name="classification" content="Personal Website" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bhathiya Lakshan",
              "jobTitle": "Full Stack Developer & Software Engineer",
              "description": "Full Stack Developer and Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies",
              "url": "https://bhathiya.dev",
              "image": "https://bhathiya.dev/me.jpg",
              "email": "contact@bhathiya.dev",
              "telephone": "+94-XX-XXXXXXX",
              "sameAs": [
                "https://twitter.com/smbhathiya",
                "https://github.com/smbhathiya",
                "https://linkedin.com/in/bhathiya-lakshan"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Digi Pro Solutions",
                  "jobTitle": "Lead Software Engineer, IT Manager",
                  "startDate": "2025-04"
                },
                {
                  "@type": "Organization", 
                  "name": "IMOS",
                  "jobTitle": "Software Engineer, IT Manager",
                  "startDate": "2025-04"
                }
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Cardiff Metropolitan University",
                  "degree": "BSc in Software Engineering",
                  "startDate": "2024",
                  "endDate": "2025"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Cardiff Metropolitan University",
                  "degree": "Higher Diploma in Computing and Software Engineering",
                  "startDate": "2022",
                  "endDate": "2024"
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
                "Backend Development",
                "Tailwind CSS",
                "ShadCN UI",
                "API Development",
                "Database Design",
                "Cloud Computing",
                "Git",
                "Firebase",
                "Cloudinary",
                "Clerk Authentication",
                "AI Integration",
                "Progressive Web Apps"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Engineer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Sri Lanka"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressRegion": "Sri Lanka"
              },
              "nationality": "Sri Lankan",
              "birthPlace": {
                "@type": "Place",
                "name": "Sri Lanka"
              }
            })
          }}
        />
        
        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Bhathiya Lakshan Portfolio",
              "url": "https://bhathiya.dev",
              "description": "Portfolio website of Bhathiya Lakshan, Full Stack Developer and Software Engineer",
              "author": {
                "@type": "Person",
                "name": "Bhathiya Lakshan"
              },
              "publisher": {
                "@type": "Person",
                "name": "Bhathiya Lakshan"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bhathiya.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Portfolio Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Bhathiya Lakshan Portfolio",
              "description": "Portfolio showcasing web development projects and skills",
              "author": {
                "@type": "Person",
                "name": "Bhathiya Lakshan"
              },
              "creator": {
                "@type": "Person",
                "name": "Bhathiya Lakshan"
              },
              "dateCreated": "2024",
              "dateModified": new Date().toISOString().split('T')[0],
              "genre": "Portfolio",
              "keywords": "web development, React, Next.js, TypeScript, portfolio",
              "url": "https://bhathiya.dev"
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

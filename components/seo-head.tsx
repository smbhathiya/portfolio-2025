import Script from 'next/script';
import { personSchema, websiteSchema, portfolioSchema, projectsSchema, organizationSchema } from '@/app/structured-data';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  includeStructuredData?: boolean;
  structuredDataTypes?: ('person' | 'website' | 'portfolio' | 'projects' | 'organization')[];
}

export function SEOHead({
  title = "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
  description = "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
  keywords = [],
  image = "/me.jpg",
  url = "https://bhathiya.dev",
  type = "website",
  includeStructuredData = true,
  structuredDataTypes = ['person', 'website', 'portfolio']
}: SEOHeadProps) {
  
  const defaultKeywords = [
    "Bhathiya Lakshan",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Development",
    "Portfolio"
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  const getStructuredData = () => {
    const data = [];
    
    if (structuredDataTypes.includes('person')) {
      data.push(personSchema);
    }
    
    if (structuredDataTypes.includes('website')) {
      data.push(websiteSchema);
    }
    
    if (structuredDataTypes.includes('portfolio')) {
      data.push(portfolioSchema);
    }
    
    if (structuredDataTypes.includes('projects')) {
      data.push(...projectsSchema);
    }
    
    if (structuredDataTypes.includes('organization')) {
      data.push(organizationSchema);
    }
    
    return data;
  };

  return (
    <>
      {/* Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="Bhathiya Lakshan" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`https://bhathiya.dev${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bhathiya Lakshan - Full Stack Developer and Software Engineer" />
      <meta property="og:site_name" content="Bhathiya Lakshan Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://bhathiya.dev${image}`} />
      <meta name="twitter:site" content="@smbhathiya" />
      <meta name="twitter:creator" content="@smbhathiya" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {includeStructuredData && getStructuredData().map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Bhathiya Lakshan" />
      <meta name="application-name" content="Bhathiya Lakshan Portfolio" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://github.com" />
      <link rel="preconnect" href="https://twitter.com" />
      <link rel="preconnect" href="https://linkedin.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//twitter.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
    </>
  );
} 
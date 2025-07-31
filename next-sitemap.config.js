/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bhathiya.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://bhathiya.dev/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*', '/private/*'],
  transform: async (config, path) => {
    // Set different priorities for different pages
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('#projects')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('#about') || path.includes('#skills')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('#contact')) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async () => {
    const result = []
    
    // Add main sections as additional paths
    result.push({
      loc: '/#about',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/#skills',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/#projects',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/#contact',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
    
    return result
  },
};
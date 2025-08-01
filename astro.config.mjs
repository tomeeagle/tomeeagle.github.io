// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://tomeeagle.github.io',
  integrations: [
    sitemap({
      // Customize sitemap generation
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Filter out 404 page from sitemap
      filter: (page) => !page.includes('404'),
    })
  ]
})
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Descobre a URL pública do site (usada em canonical, Open Graph, sitemap e robots).
 * Ordem: VITE_SITE_URL -> URL de produção da Vercel -> valor provisório.
 */
function resolveSiteUrl(env) {
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  const url =
    env.VITE_SITE_URL || (vercel ? `https://${vercel}` : 'https://seu-dominio.vercel.app')
  return url.replace(/\/+$/, '')
}

function seoFiles(siteUrl) {
  return {
    name: 'seo-files',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('__SITE_URL__', siteUrl),
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), seoFiles(resolveSiteUrl(env))],
  }
})

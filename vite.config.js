import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_SITE_URL');
  const siteUrl = process.env.VITE_SITE_URL || env.VITE_SITE_URL || process.env.URL;
  const siteMetadata = {
    name: 'portfolio-site-metadata',
    transformIndexHtml(html) {
      if (!siteUrl) return html;

      const canonicalUrl = new URL(siteUrl);
      if (!['http:', 'https:'].includes(canonicalUrl.protocol)) {
        throw new Error('VITE_SITE_URL must be an absolute HTTP or HTTPS URL.');
      }
      canonicalUrl.hash = '';
      canonicalUrl.search = '';
      const imageUrl = new URL('/social-preview.png', canonicalUrl).href;

      return {
        html: html.replaceAll('content="/social-preview.png"', `content="${imageUrl}"`),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl.href }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: canonicalUrl.href }, injectTo: 'head' },
        ],
      };
    },
  };

  return { plugins: [react(), tailwindcss(), siteMetadata] };
});

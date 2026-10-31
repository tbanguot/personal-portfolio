import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_SITE_URL');
  const siteUrl = process.env.VITE_SITE_URL || env.VITE_SITE_URL || process.env.URL;
  const siteMetadata = {
    name: 'portfolio-site-metadata',
    transformIndexHtml(html, context) {
      if (!siteUrl) {
        if (context.server) return html;
        throw new Error('Set VITE_SITE_URL to the production site URL before building (Netlify also provides URL).');
      }

      const canonicalUrl = new URL(siteUrl);
      if (!['http:', 'https:'].includes(canonicalUrl.protocol)) {
        throw new Error('VITE_SITE_URL must be an absolute HTTP or HTTPS URL.');
      }
      canonicalUrl.hash = '';
      canonicalUrl.search = '';
      canonicalUrl.pathname = '/';
      const imageUrl = new URL('/social-preview.png', canonicalUrl).href;
      const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
      const withStructuredUrl = html.replace(
        /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
        (_, open, json, close) => `${open}${JSON.stringify({ ...JSON.parse(json), url: canonicalUrl.href }).replaceAll('<', '\\u003c')}${close}`
      );

      return {
        html: withStructuredUrl.replaceAll('content="/social-preview.png"', `content="${escapeAttribute(imageUrl)}"`),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl.href }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: canonicalUrl.href }, injectTo: 'head' },
        ],
      };
    },
  };

  return { plugins: [react(), tailwindcss(), siteMetadata] };
});

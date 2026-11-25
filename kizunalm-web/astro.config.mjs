// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Cambia esto por el dominio final cuando lo tengas (sirve para el canonical y las etiquetas Open Graph).
  site: 'https://kizunalm.cl',
  // Todo el sitio se genera estático; solo las páginas del pago (prerender = false) corren en el servidor.
  adapter: node({ mode: 'standalone' }),
  build: {
    // El CSS completo pesa pocos KB: lo incrustamos en el HTML para evitar una petición que bloquee el render.
    inlineStylesheets: 'always',
  },
  env: {
    schema: {
      WEBPAY_ENVIRONMENT: envField.enum({
        context: 'server',
        access: 'public',
        values: ['integration', 'production'],
        default: 'integration',
      }),
      WEBPAY_COMMERCE_CODE: envField.string({ context: 'server', access: 'secret', optional: true }),
      WEBPAY_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Dirección pública con https. Detrás de nginx la app ve http://127.0.0.1, y Webpay
      // necesita volver exactamente a la URL pública.
      PUBLIC_SITE_URL: envField.string({ context: 'server', access: 'public', optional: true, url: true }),
    },
  },
});

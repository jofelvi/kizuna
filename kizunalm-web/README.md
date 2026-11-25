# KIZUNALM: sitio web

Sitio hecho con [Astro](https://astro.build). Las páginas de presentación se generan como HTML estático, con el CSS y
los scripts incrustados. Las únicas páginas que corren en el servidor son las del pago con Webpay (`/pago/...`).

## Comandos

```bash
npm install       # una vez
npm run dev       # desarrollo en http://localhost:4321
npm run build     # revisa tipos y genera dist/
npm run preview   # sirve dist/ (incluido el pago) para probar la versión final
node dist/server/entry.mjs   # cómo se ejecuta en producción (servidor Node)
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Textos del sitio, contacto, preguntas frecuentes y testimonios | `src/data/site.ts` |
| Planes, precios, mantención y extras | `src/data/plans.ts` |
| Colores, tipografías y piezas comunes (etiqueta, cinta, timbre) | `src/styles/global.css` |
| Cada sección | `src/components/` |
| Pago: formulario y envío a Webpay | `src/pages/pago/[plan].astro` |
| Pago: resultado (aprobado, rechazado, anulado) | `src/pages/pago/resultado.astro` |
| Conexión con Transbank | `src/lib/webpay.ts` |
| Dominio final (canonical y Open Graph) | `site` en `astro.config.mjs` |

**Vocabulario fijo de los textos:** plan, abono, precio final, conversación inicial, rondas de revisión y días hábiles.
Siempre se tutea. Los testimonios se cargan en `testimonials` (`src/data/site.ts`) y la sección aparece sola cuando
hay al menos uno. Solo deben ser testimonios reales.

## Webpay

- **Hoy:** el pago corre en el **ambiente de integración** (pruebas) de Transbank, con sus credenciales públicas. No se
  cobra dinero real. En la página de pago se muestran las tarjetas de prueba.
- **Producción:** cuando Transbank entregue el código de comercio y la llave, define estas variables de entorno en
  el servidor:

  ```
  WEBPAY_ENVIRONMENT=production
  WEBPAY_COMMERCE_CODE=...
  WEBPAY_API_KEY=...
  ```

- El monto del abono (50 %) se calcula en el servidor a partir de `src/data/plans.ts`. El navegador nunca envía montos.

## Publicar

El pago necesita un servidor Node. Cualquier servicio que ejecute Node sirve, por ejemplo Render, Railway, Fly.io o un
VPS: el comando de build es `npm run build` y el de arranque, `node dist/server/entry.mjs`.

Detrás de un proxy (nginx), define `PUBLIC_SITE_URL` con la dirección pública con https (por ejemplo
`https://kizunalm.cl`): es la URL a la que Webpay devuelve a la persona después de pagar.

**Dónde está publicado hoy:** VPS compartido `147.93.183.76` (alias SSH `hostinger-vps`), carpeta
`/var/www/kizunalm-web`, proceso pm2 `kizunalm-web-4321` (escucha solo en `127.0.0.1:4321`) y sitio nginx
`kizunalm-sslip`, con la dirección temporal `https://kizunalm.147.93.183.76.sslip.io`. Para actualizar:

```
npm run build
tar czf kizunalm-release.tgz dist package.json package-lock.json
scp kizunalm-release.tgz hostinger-vps:/tmp/
ssh hostinger-vps "cd /var/www/kizunalm-web && tar xzf /tmp/kizunalm-release.tgz && npm ci --omit=dev && pm2 restart kizunalm-web-4321"
```

Si prefieres Vercel o Netlify, cambia el adaptador `@astrojs/node` por `@astrojs/vercel` o `@astrojs/netlify` en
`astro.config.mjs`.

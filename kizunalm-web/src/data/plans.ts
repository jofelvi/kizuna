/**
 * Planes y precios. Fuente: research/estudio-mercado-chile.md, sección 6 (propuesta con rangos del mercado chileno, nov. 2026).
 * El servidor calcula el abono desde aquí; el navegador nunca envía montos.
 */
export type PlanFormat = 'Sobre' | 'Paquete' | 'Caja' | 'Encomienda completa';

export interface Plan {
  id: string;
  /** Código corto para la orden de compra de Webpay (KZ-<code>-…). */
  code: string;
  format: PlanFormat;
  name: string;
  tagline: string;
  /** Precio final en CLP. */
  price: number;
  priceNote: string;
  delivery: string;
  revisions: string;
  includes: readonly string[];
  excludes: readonly string[];
  idealFor: string;
  featured?: boolean;
}

export const plans: readonly Plan[] = [
  {
    id: 'atencion-ordenada',
    code: 'AO',
    format: 'Sobre',
    name: 'Atención Ordenada',
    tagline: 'Tu WhatsApp Business listo para responder bien, rápido y siempre igual.',
    price: 89990,
    priceNote: 'Precio final, pago único. Usa la app gratuita WhatsApp Business: sin mensualidad ni costos de Meta.',
    delivery: '5 días hábiles desde la conversación inicial',
    revisions: '1 ronda de ajustes a los 15 días de uso',
    includes: [
      'Conversación inicial de 45 min para listar las preguntas que más te llegan',
      'Hasta 25 respuestas rápidas escritas con el tono de tu negocio: precios, horarios, despacho, medios de pago, cambios',
      'Perfil de empresa completo, mensaje de bienvenida y mensaje de ausencia',
      'Etiquetas para ordenar tus chats',
      'Catálogo de WhatsApp con hasta 20 productos o servicios',
      'Guía de respuestas en un documento, para que cualquiera de tu equipo responda igual',
      'Capacitación por videollamada de 45 min',
    ],
    excludes: ['Chatbots o API de WhatsApp', 'Fotografía de productos'],
    idealFor: 'Si respondes lo mismo todo el día y se te escapan consultas.',
  },
  {
    id: 'publicaciones-que-venden',
    code: 'PV',
    format: 'Paquete',
    name: 'Publicaciones que Venden',
    tagline: '10 publicaciones reescritas para que se encuentren y se entiendan.',
    price: 119990,
    priceNote: 'Precio final por 10 publicaciones (≈ $12.000 cada una). Publicación adicional: $9.990.',
    delivery: '7 días hábiles',
    revisions: '1 ronda de revisiones',
    includes: [
      'Diagnóstico de tus publicaciones actuales en Mercado Libre, Instagram o tu tienda online',
      'Título claro, con las palabras que usa tu comprador y dentro del límite de la plataforma',
      'Descripción ordenada: qué es, para quién, medidas o materiales, qué incluye, despacho y garantía',
      'Atributos o ficha técnica completos',
      'Orden de fotos recomendado: portada, detalle, uso y medidas',
      '5 respuestas tipo para las preguntas que más se repiten',
      'Planilla con el antes y el después de cada publicación',
    ],
    excludes: ['Fotografía o edición de fotos', 'Campañas de Mercado Ads'],
    idealFor: 'Si vendes en Mercado Libre o redes y tus publicaciones no convencen.',
  },
  {
    id: 'presencia-digital',
    code: 'PD',
    format: 'Caja',
    name: 'Presencia Digital',
    tagline: 'Una página web escrita y lista para que te encuentren y te escriban.',
    price: 179990,
    priceNote: 'Precio final, pago único. Los textos de la página van incluidos.',
    delivery: '7 a 10 días hábiles desde la conversación inicial',
    revisions: '2 rondas de revisiones y 30 días de soporte',
    includes: [
      'Página de hasta 6 secciones: quién eres, qué vendes, cómo comprar, preguntas frecuentes, cobertura y contacto',
      'Todos los textos escritos por mí',
      'Hecha a mano, liviana y pensada primero para el celular',
      'Botón y formulario que abren WhatsApp con el mensaje ya armado',
      'Enlace a tu catálogo o a tu tienda de Mercado Libre',
      'Datos para Google: títulos, descripciones y alta en Search Console',
      '30 días de soporte para corregir detalles después de publicar',
    ],
    excludes: ['Correo corporativo', 'Tienda con carrito de compras'],
    idealFor: 'Si necesitas verte serio en internet y que te encuentren.',
  },
  {
    id: 'kizuna-completo',
    code: 'KC',
    format: 'Encomienda completa',
    name: 'Kizuna Completo',
    tagline: 'Web, publicaciones y WhatsApp diciendo lo mismo: tu negocio completo, conectado.',
    price: 349990,
    priceNote: 'Precio final. Por separado suman $389.970: ahorras $39.980.',
    delivery: '15 días hábiles',
    revisions: '2 rondas de revisiones y 30 días de acompañamiento',
    includes: [
      'Todo Presencia Digital: página de hasta 6 secciones con textos incluidos',
      'Todo Atención Ordenada: WhatsApp Business, 25 respuestas, catálogo y guía',
      'Todo Publicaciones que Venden: 10 publicaciones reescritas',
      'Información comercial unificada: precios, condiciones, despacho, cambios y preguntas frecuentes en un solo documento',
      '30 días de acompañamiento: reviso las preguntas nuevas que llegan y ajusto las respuestas',
    ],
    excludes: ['Fotografía', 'Publicidad pagada'],
    idealFor: 'Si quieres ordenar todo de una vez y que cada canal diga lo mismo.',
    featured: true,
  },
];

export interface Maintenance {
  name: string;
  price: number;
  includes: string;
}

export const maintenance: readonly Maintenance[] = [
  { name: 'Al día', price: 19990, includes: 'Hasta 30 min de cambios al mes en tu web, tu catálogo o tus respuestas, y una revisión mensual de que todo funcione.' },
  { name: 'Acompañamiento', price: 39990, includes: 'Hasta 2 horas al mes: lo de Al día, más hasta 5 publicaciones actualizadas y respuestas nuevas para las preguntas que lleguen.' },
];

export interface Extra {
  name: string;
  price: number;
  detail: string;
}

export const extras: readonly Extra[] = [
  { name: 'Catálogo digital', price: 69990, detail: 'PDF de hasta 12 páginas, con enlace y código QR, textos incluidos.' },
  { name: 'Publicación adicional', price: 9990, detail: 'Una publicación más, con el mismo trabajo del pack.' },
];

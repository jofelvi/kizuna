/**
 * Textos y datos del sitio. Única fuente de verdad: si cambias algo aquí, cambia en todo el sitio.
 * Vocabulario fijo (no usar sinónimos): plan, abono, precio final, conversación inicial,
 * rondas de revisión, días hábiles. Siempre tuteo.
 */

export const contact = {
  whatsappNumber: '56989710462',
  whatsappDisplay: '+56 9 8971 0462',
  email: 'kizunalm@gmail.com',
  location: 'Santiago, Chile',
} as const;

export const socialNetworks = ['Facebook', 'Instagram', 'LinkedIn'] as const;

export const navLinks = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#planes', label: 'Planes' },
  { href: '/#proceso', label: 'Cómo trabajo' },
  { href: '/#preguntas', label: 'Preguntas' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

export const hero = {
  recipient: 'Cada persona que te escribe',
  title: 'Tus clientes te escriben. Tu negocio responde.',
  lead: 'Ordeno tu WhatsApp, escribo tus publicaciones y armo tu página web, para que cada canal diga lo mismo y tus clientes compren sin dudar. Con precio final y por escrito antes de empezar.',
  primaryCta: 'Ver planes y precios',
  secondaryCta: 'Escríbeme por WhatsApp',
  whatsappMessage: 'Hola, vi KIZUNALM y quiero saber qué plan me conviene. Mi negocio es: ',
  promises: ['Precio final publicado', 'Los textos los escribo yo', 'Rondas de revisión por escrito', 'Pago único, sin mensualidad obligatoria'],
  sealNote: 'Kizuna (絆), en japonés: el vínculo entre las personas.',
} as const;

export type ChannelId = 'whatsapp' | 'listings' | 'web';

export interface Service {
  id: ChannelId;
  channel: string;
  title: string;
  problem: string;
  solution: string;
  deliverables: readonly string[];
  planId: string;
}

export const servicesIntro = {
  title: 'Tres canales. Una sola voz.',
  lead: 'Tu cliente te encuentra en Google, te compara en Mercado Libre y te pregunta por WhatsApp. Si en cada lugar encuentra algo distinto, duda. Yo me encargo de que en los tres encuentre lo mismo: claro, completo y con tu tono.',
};

export const services: readonly Service[] = [
  {
    id: 'whatsapp',
    channel: 'WhatsApp',
    title: 'Atención al cliente ordenada',
    problem: 'Respondes lo mismo veinte veces al día y algunas consultas se quedan sin respuesta.',
    solution: 'Escribo tus respuestas y ordeno tu WhatsApp Business para que respondas rápido, bien y siempre igual, aunque no estés tú.',
    deliverables: ['Respuestas rápidas escritas', 'Catálogo de WhatsApp', 'Guía de respuestas para tu equipo'],
    planId: 'atencion-ordenada',
  },
  {
    id: 'listings',
    channel: 'Publicaciones',
    title: 'Publicaciones que dan ganas de comprar',
    problem: 'Tus productos son buenos, pero la publicación no lo muestra y te preguntan lo que ya debería estar escrito.',
    solution: 'Reescribo títulos, descripciones y fichas para que tu producto se encuentre, se entienda y se elija.',
    deliverables: ['Títulos y descripciones', 'Atributos completos', 'Orden de fotos recomendado'],
    planId: 'publicaciones-que-venden',
  },
  {
    id: 'web',
    channel: 'Página web',
    title: 'Tu negocio, listo para destacar en internet',
    problem: 'Te buscan y no te encuentran, o encuentran algo que no se ve serio.',
    solution: 'Armo una página liviana, pensada para el celular y con todos los textos escritos, que termina en un botón para escribirte.',
    deliverables: ['Página de hasta 6 secciones', 'Textos incluidos', 'Botón de WhatsApp con mensaje armado'],
    planId: 'presencia-digital',
  },
];

/** Comparación con lo habitual en el mercado chileno (research/estudio-mercado-chile.md, secciones 4 y 5). */
export const difference = {
  title: 'Lo que normalmente no te dicen',
  lead: 'Revisamos cómo se venden estos servicios en Chile. Esto es lo que suele quedar fuera, y lo que aquí va por escrito.',
  rows: [
    { usual: 'Los textos los pones tú, y el plazo corre desde que los entregas.', here: 'Los textos los escribo yo, a partir de una conversación contigo.' },
    { usual: 'Precios «desde» o «cotiza por WhatsApp».', here: 'Precio final publicado para cada plan.' },
    { usual: 'Revisiones sin número: nunca sabes cuántos cambios puedes pedir.', here: 'Cada plan dice cuántas rondas de revisión incluye.' },
    { usual: 'Atención al cliente = chatbot con mensualidad y costos por mensaje.', here: 'WhatsApp Business gratuito, ordenado y con tus respuestas escritas. Pago único.' },
    { usual: 'Una agencia, varios intermediarios.', here: 'Una persona: te responde quien hace el trabajo.' },
  ],
} as const;

export interface ProcessStep {
  status: string;
  title: string;
  text: string;
}

export const process = {
  title: 'Cómo trabajo',
  lead: 'Sigues tu proyecto como sigues un envío: sabes en qué etapa está y qué viene después.',
  steps: [
    { status: 'Recibido', title: 'Conversación inicial', text: 'Me cuentas de tu negocio por WhatsApp o videollamada. Es sin costo y te digo qué plan te sirve.' },
    { status: 'Preparando', title: 'Propuesta por escrito y abono', text: 'Te envío qué incluye, el plazo y el precio final. Si te parece, abonas el 50 % por Webpay y reservamos tu fecha.' },
    { status: 'En camino', title: 'Escribo y armo', text: 'Escribo los textos, ordeno tu información y armo cada entregable. Tú revisas y apruebas en las rondas de revisión.' },
    { status: 'Entregado', title: 'Entrega y capacitación', text: 'Te entrego todo funcionando y te enseño a usarlo. Pagas el 50 % restante.' },
  ] satisfies readonly ProcessStep[],
} as const;

export const story = {
  title: 'Una persona, no una agencia',
  paragraphs: [
    'Detrás de KIZUNALM hay una profesional con más de diez años en atención al cliente. Sé lo que pregunta una persona antes de comprar, lo que la hace dudar y lo que la hace volver.',
    'También estudié desarrollo web, así que la página, las publicaciones y las respuestas las hago yo misma, con el mismo criterio y la misma voz.',
  ],
  nameTitle: 'Por qué KIZUNALM',
  nameText: 'Kizuna (絆) es una palabra japonesa: el vínculo entre las personas. Es lo que quiero que tu negocio construya con cada cliente. LM son las iniciales de mis sobrinos, el vínculo más importante que tengo.',
  facts: ['+10 años en atención al cliente', 'Desarrollo web con HTML, CSS y JavaScript', 'Santiago de Chile'],
} as const;

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: readonly Faq[] = [
  { question: '¿Cómo pago?', answer: 'Reservas tu proyecto con un abono del 50 % por Webpay: tarjeta de crédito, débito o prepago. El 50 % restante lo pagas cuando te entrego todo.' },
  { question: '¿Tengo que preparar los textos?', answer: 'No. A partir de la conversación inicial los escribo yo. Tú los revisas y los apruebas en las rondas de revisión.' },
  { question: '¿Hay que pagar una mensualidad?', answer: 'No es obligatoria. Los planes son pago único. Si quieres que me encargue de los cambios después de la entrega, existe la mantención mensual, sin permanencia.' },
  { question: '¿Necesito un chatbot o pagar la API de WhatsApp?', answer: 'No. Trabajo con la app gratuita WhatsApp Business, así que no hay mensualidad ni costos de Meta por mensaje.' },
  { question: '¿Cuántos cambios puedo pedir?', answer: 'Cada plan dice cuántas rondas de revisión incluye. Los cambios posteriores entran en la mantención mensual o se cotizan aparte, siempre con precio antes de hacerlos.' },
  { question: '¿Qué no incluyen los planes?', answer: 'Fotografía de productos, publicidad pagada (Mercado Ads o Meta Ads) ni correo corporativo. Si los necesitas, te oriento para conseguirlos.' },
  { question: '¿Y si no sé qué plan elegir?', answer: 'Escríbeme por WhatsApp y cuéntame de tu negocio. En la conversación inicial te digo cuál te sirve, aunque sea el más simple.' },
];

export const contactSection = {
  title: 'Cuéntame de tu negocio',
  intro: 'Escríbeme una línea sobre lo que vendes. Te respondo con ideas concretas y el plan que te conviene, sin compromiso.',
} as const;

/** Testimonios reales. Vacío a propósito: la sección no se muestra hasta que existan. No inventar. */
export const testimonials: readonly { quote: string; name: string; business: string }[] = [];

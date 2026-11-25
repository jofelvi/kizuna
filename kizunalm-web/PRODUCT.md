# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (chosen by the user over Next.js for speed). Static pages by default; server endpoints only where a payment flow needs them.

## Users

Emprendedores y dueños de pequeños negocios en Chile (principalmente Santiago) que venden por WhatsApp, redes sociales, Mercado Libre o una web propia. Reciben consultas todo el día, responden lo mismo una y otra vez, y no tienen una presencia digital que los haga ver serios. Llegan al sitio desde el celular, muchas veces desde un enlace compartido, y deciden si confiar lo suficiente como para escribir o pagar un abono.

## Product Purpose

KIZUNALM ofrece tres servicios a ese emprendedor: (1) presencia digital: páginas web, catálogos y presentación de servicios; (2) publicaciones y catálogos que venden, incluido Mercado Libre; (3) atención al cliente ordenada: respuestas listas, información comercial organizada y herramientas simples. El éxito es que el visitante entienda qué recibe y cuánto cuesta, y que contrate: pague el abono en línea o escriba por WhatsApp.

## Positioning

La persona detrás tiene más de 10 años en atención al cliente y además construye la web. Por eso no entrega solo una página: diseña cómo el negocio responde a sus clientes. Web + publicaciones + atención al cliente, de una misma profesional, con precio cerrado y por escrito antes de empezar. (Se afinará con el estudio de mercado en `../research/estudio-mercado-chile.md`.)

## Operating Context

- Contacto principal: WhatsApp +56 9 8971 0462 (wa.me/56989710462), correo kizunalm@gmail.com, Santiago de Chile.
- Redes (Facebook, Instagram, LinkedIn): aún no existen, se muestran como "Próximamente".
- Contratación: el cliente elige un plan y paga un **abono del 50%** en línea con Webpay Plus (Transbank) para reservar el proyecto; el 50% restante se paga a la entrega. Por ahora Webpay corre en el **ambiente de integración (sandbox)**.
- Precios en CLP. Los montos de los planes salen del estudio de mercado.

## Capabilities and Constraints

- Sitio de una sola página de presentación, más las rutas del flujo de pago (checkout y retorno de Webpay).
- No hay backend propio ni base de datos. El formulario de contacto arma un mensaje y abre WhatsApp.
- Sin cuentas de usuario.
- Pendiente: dominio final (hoy el marcador es kizunalm.cl), credenciales de producción de Transbank y redes sociales.

## Brand Commitments

- Nombre: **KIZUNALM**. *Kizuna* (絆) significa en japonés el vínculo entre las personas; ese significado es lo que la marca quiere transmitir. **LM** son las iniciales de los sobrinos de la fundadora, un vínculo familiar dentro del nombre.
- El carácter 絆 es el sello de la marca.
- Voz: cercana, simple, sin tecnicismos ni letra chica; tuteo chileno neutro ("tú", no "vos").
- Promesas actuales: precio cerrado y por escrito antes de empezar; la primera conversación no tiene costo.

## Evidence on Hand

- +10 años de experiencia en atención al cliente (hecho declarado por la dueña).
- Estudios de desarrollo web con HTML, CSS y JavaScript.
- **No hay todavía testimonios, portafolio, logos de clientes ni foto.** La dueña podría sumar testimonios de clientes propios más adelante (en espera). Hasta entonces no se inventan testimonios, cifras de clientes, métricas de resultados ni casos de éxito.

## Product Principles

1. Claridad antes que persuasión: precio, alcance y plazo visibles sin tener que escribir para averiguarlos.
2. El vínculo es el producto: cada texto debe sentirse como una persona que responde, no una agencia.
3. Honestidad verificable: solo afirmaciones que la dueña puede sostener; los espacios de prueba social quedan vacíos hasta tener material real.
4. Pensado para el celular: el visitante llega desde un teléfono y decide ahí.

## Accessibility & Inclusion

WCAG 2.1 AA: contraste, foco visible, navegación por teclado, respeto de `prefers-reduced-motion` y modo oscuro.

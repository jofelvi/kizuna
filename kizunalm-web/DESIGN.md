---
name: KIZUNALM
description: Webs y presencia digital para pymes chilenas, despachadas como una encomienda bien preparada.
colors:
  kraft: "#B98B5A"
  kraft-deep: "#8F6640"
  kraft-shade: "#A47A4E"
  kraft-ink: "#2B1B0C"
  label: "#F7F6F2"
  label-shade: "#E9E6DE"
  ink: "#141414"
  ink-2: "#48463F"
  ink-3: "#6E6A60"
  rule: "#CFCAC0"
  tape: "#5B2DBE"
  tape-deep: "#46209A"
  tape-ink: "#F1EBFF"
  stamp: "#5B2DBE"
  alert: "#B3261E"
typography:
  display:
    fontFamily: "Archivo Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(40px, 6.4vw, 84px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  headline:
    fontFamily: "Archivo Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(42px, 5vw, 76px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  title:
    fontFamily: "Archivo Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.4vw, 32px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  body:
    fontFamily: "Archivo Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontVariation: "\"wdth\" 100"
  data:
    fontFamily: "Martian Mono Variable, ui-monospace, Cascadia Mono, monospace"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontFeature: "\"tnum\" 1"
  kanji:
    fontFamily: "Shippori Mincho, Hiragino Mincho ProN, Yu Mincho, serif"
    fontWeight: 700
    lineHeight: 1
rounded:
  mark: "2px"
  control: "4px"
  label: "12px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  label-inset: "clamp(20px, 3vw, 40px)"
  stack: "12px"
  section: "clamp(56px, 8vw, 112px)"
  page-max: "1180px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-tape:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.tape-ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-tape-hover:
    backgroundColor: "{colors.tape-deep}"
    textColor: "{colors.tape-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  label-card:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
  input-text:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "50px"
  tape-strip:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.tape-ink}"
    height: "54px"
  stamp:
    textColor: "{colors.stamp}"
---

# Design System: KIZUNALM

## Overview

**Creative North Star: "La Encomienda"**

Todo el sitio es una caja de despacho sobre la mesa: el fondo es cartón kraft corrugado, la información viaja impresa en etiquetas térmicas blancas, la marca es una cinta de embalaje violeta y el vínculo (絆) es un timbre de goma. El mundo no ilustra una agencia; muestra un paquete preparado con cuidado que llega bien. Cada pieza tiene un equivalente físico, y lo que no lo tiene no entra.

El kraft es procedural: fibra horizontal con `feTurbulence` alargado, la onda del corrugado como gradiente repetido y una mancha amplia de baja frecuencia, sin ninguna imagen raster. Sobre ese fondo las etiquetas se apoyan ligeramente giradas (entre -1.2° y 0.5°), con sombra cálida, y se enderezan al pasar el cursor. Una sola tinta térmica imprime todo el texto de las etiquetas; el violeta queda reservado para la cinta, el timbre y la acción principal.

La densidad es de documento logístico: campos con rótulo, filetes perforados, códigos de barras Code 128B reales, precios en mono de impresora. El mundo es solo claro; no existe modo oscuro.

**Key Characteristics:**
- Fondo kraft procedural (fibra, corrugado, mancha) sin raster.
- Etiqueta térmica como contenedor universal: papel claro, esquina troquelada de 12px, sombra cálida.
- Una tinta negra para el texto impreso; violeta solo en cinta, timbre, CTA y foco.
- Grotesca condensada por eje `wdth`: 72 en titulares, 100 en texto.
- Mono solo para precios, códigos y estados; mincho solo para 絆.
- Movimiento físico y único: la cinta se desenrolla, el timbre cae, la etiqueta se asienta; todo detrás de `prefers-reduced-motion`.

## Colors

Una paleta de materiales de embalaje: cartón, papel térmico, tinta negra y una cinta violeta.

### Primary
- **Violeta Cinta** (`tape`): la cinta de embalaje con KIZUNALM impreso, el botón de acción principal, la línea de ruta del seguimiento, la selección de texto, `accent-color` de controles y el anillo de foco de 3px. Su versión **Violeta Cinta Profunda** (`tape-deep`) es solo el hover del botón principal; **Lila Impreso** (`tape-ink`) es el texto sobre la cinta.
- **Tinta de Timbre** (`stamp`): mismo violeta que la cinta, aplicado a sellos de goma (絆, ELEGIDO, PAGADO) con máscara de grano.

### Neutral
- **Cartón Kraft** (`kraft`): el fondo de toda la página; nunca un contenedor. `kraft-deep` y `kraft-shade` son sus sombras (barra de desplazamiento, separación entre filas apiladas en móvil).
- **Tinta Café** (`kraft-ink`): texto impreso directamente sobre el kraft (bajadas de sección, notas del timbre).
- **Papel Térmico** (`label`): fondo de toda etiqueta; también texto sobre superficies de tinta. `label-shade` es su tono de reposo.
- **Tinta Térmica** (`ink`): titulares, texto principal de etiqueta, botón base, barras del código, celdas invertidas y el pie.
- **Tinta al 75 %** (`ink-2`): texto secundario, rótulos de campo, notas.
- **Tinta al 55 %** (`ink-3`): solo placeholders, bordes en hover y datos; nunca texto corrido por debajo de 14px en negrita.
- **Filete** (`rule`): perforaciones discontinuas de 2px y borde de campos.

### Tertiary
- **Rojo Rechazo** (`alert`): solo errores de formulario y el sello RECHAZADO / ANULADO / SIN CONFIRMAR.

### Named Rules
**The One Ink Rule.** Todo lo impreso en una etiqueta usa `ink` o sus pesos `ink-2` / `ink-3`. Ningún otro color de texto entra en el papel térmico, salvo el violeta de estado de ruta y el rojo de rechazo.

**The Tape Is the Brand Rule.** El violeta aparece como material (cinta, timbre) o como la única acción principal de un bloque. Nunca como degradado de fondo ni como relleno de tarjetas.

**The Alert Is Only Rejection Rule.** `alert` existe para errores y pagos no aprobados. No se usa como acento ni para "ofertas".

## Typography

**Display Font:** Archivo Variable (con Arial Narrow, system-ui)
**Body Font:** Archivo Variable (con Arial Narrow, system-ui)
**Label/Mono Font:** Martian Mono Variable (con ui-monospace, Cascadia Mono)
**Kanji:** Shippori Mincho 700, subconjunto de un solo carácter (U+7D46, 絆)

**Character:** Una sola grotesca de etiqueta que cambia de ancho por el eje `wdth` en vez de cambiar de familia: condensada y pesada para lo que se lee de lejos, normal para lo que se lee de cerca. La mono de impresora térmica marca lo que es dato.

### Hierarchy
- **Display** (800, `clamp(40px, 6.4vw, 84px)`, 0.98, `wdth` 72): títulos de sección impresos directo sobre el kraft, en `ink`.
- **Headline** (800, `clamp(42px, 5vw, 76px)`, 0.98, `wdth` 72): el titular de la etiqueta de despacho del hero, máximo 15ch; también titulares de checkout y resultado.
- **Title** (800, 24 a 32px, 0.98, `wdth` 72): pasos del seguimiento, nombres de plan (28px + 8px por escalón de caja).
- **Body** (400, 17px, 1.55, `wdth` 100): texto corrido; bajadas a `clamp(17px, 1.5vw, 20px)` con máximo 52 a 56ch.
- **Label** (700, 11px, 0.08em, mayúsculas, `wdth` 100): rótulos de campo de una etiqueta (Remitente, Destinatario, Plazo, Revisiones), siempre pegados a su valor.
- **Data** (Martian Mono, cifras tabulares): precios, abonos, códigos KZ-, estados del seguimiento y pie de código de barras.
- **Botón** (700, 17px, `wdth` 88): la anchura intermedia es exclusiva de controles.

### Named Rules
**The Width Axis Rule.** La jerarquía se construye con el eje `wdth` (72 titulares, 88 botones, 100 texto) y el peso, no agregando familias.

**The Mono Is Data Rule.** Martian Mono solo para precios, códigos y estados. Nunca para titulares ni texto corrido.

**The One Kanji Rule.** Shippori Mincho solo dibuja 絆; el archivo está restringido a U+7D46 y no sirve para nada más.

## Layout

Columna de página de hasta 1180px con márgenes laterales `clamp(16px, 4vw, 40px)`. Las secciones respiran con `clamp(56px, 8vw, 112px)` en bloque y un encabezado de sección (titular + bajada, máximo 62ch) separado del contenido por `clamp(28px, 4vw, 48px)`.

El hero divide 7.2fr / 4fr: etiqueta de despacho a la izquierda, timbre 絆 a la derecha, cinta cruzando arriba girada -2.2°. Los planes individuales son tres etiquetas de anchos crecientes (0.9fr / 1fr / 1.16fr) alineadas arriba, como sobre, paquete y caja; el plan destacado ocupa todo el ancho con su propia cinta. El seguimiento es una ruta de cuatro columnas que en móvil pasa a vertical.

Dentro de una etiqueta, el contenido se separa en franjas (cabecera, cuerpo, pie) con perforaciones, y el relleno lateral es `clamp(20px, 3vw, 40px)`. Puntos de quiebre observados: 1020px (planes a una columna), 900px (hero y checkout a una columna, timbre arriba en línea, nav oculta), 820px (nav de 60px, ruta vertical), 560px. Todo `section` respeta `scroll-margin-top` igual a la altura de la nav más 12px.

## Elevation & Depth

La profundidad es física: papel apoyado sobre cartón. Las etiquetas llevan una sombra cálida en dos capas (contacto + caída difusa) teñida de café, nunca gris neutro; al hover o foco interno se levantan y se enderezan. La cinta lleva una sombra violeta corta propia. La navegación fija es papel térmico al 92 % con desenfoque. No hay otras capas.

### Shadow Vocabulary
- **Etiqueta en reposo** (`--shadow-label`): `0 1px 1px rgb(58 36 14 / 0.28), 0 10px 24px -10px rgb(58 36 14 / 0.55)`. Toda `.label`.
- **Etiqueta levantada** (`--shadow-label-lift`): `0 2px 2px rgb(58 36 14 / 0.25), 0 22px 40px -16px rgb(58 36 14 / 0.6)`. Hover y `:focus-within` de un plan.
- **Botón al hover** (`0 10px 18px -10px rgb(20 20 20 / 0.6)`): acompaña a `translateY(-1px)`; desaparece en `:active`.
- **Cinta** (`0 6px 14px -8px rgb(30 10 60 / 0.7)`): solo la cinta.

### Named Rules
**The Warm Shadow Rule.** Las sombras sobre el kraft son café (`rgb(58 36 14)`), porque el cartón tiñe la luz. Una sombra gris o negra pura sobre el kraft rompe el material.

## Shapes

Esquinas troqueladas de 12px para etiquetas, 4px para controles (botones, campos, celdas invertidas), 2px para las casillas de manifiesto. El timbre usa borde y radio proporcionales al tamaño de su letra (0.08em y 0.14em) y vive girado entre -6° y -8°. Las divisiones son perforaciones discontinuas de 2px en `rule`, nunca filetes sólidos. La cinta tiene los extremos cortados en diagonal con `clip-path`. Los puntos del seguimiento son círculos de 26px con borde violeta de 4px; es la única forma redonda del sistema.

## Components

### Buttons
Rectángulos firmes de imprenta, con un levantamiento mínimo.
- **Shape:** esquina casi recta (4px), alto mínimo 52px, relleno lateral 24px, borde de 2px del mismo color del fondo, icono de 20px con separación de 10px.
- **Base:** fondo `ink`, texto `label`.
- **Cinta (principal):** fondo `tape`, texto `tape-ink`; hover a `tape-deep`. Una por bloque.
- **Fantasma:** fondo transparente con borde `ink`; hover con velo de tinta al 6 %. Para WhatsApp y acciones secundarias.
- **Hover / Focus:** `translateY(-1px)` con sombra de botón en 220ms `--ease-out`; foco con anillo violeta de 3px a 3px de distancia. Deshabilitado al 55 % de opacidad, sin movimiento.

### Etiqueta térmica (contenedor)
- **Corner Style:** 12px.
- **Background:** `label`, texto `ink`.
- **Shadow Strategy:** sombra de etiqueta en reposo; levantada al interactuar (ver Elevation).
- **Border:** ninguno; las franjas internas se separan con perforación.
- **Internal Padding:** `clamp(16px, 2vw, 24px)` vertical, `clamp(20px, 3vw, 40px)` lateral.
- **Campos:** pares rótulo / valor en grilla con 2px de separación; el rótulo en estilo Label, el valor en 700.

### Inputs / Fields
- **Style:** fondo blanco sobre la etiqueta, borde de 2px en `rule`, radio 4px, alto 50px, texto 17px, placeholder `ink-3`.
- **Focus:** anillo violeta de 3px a 1px y borde pasa a `ink`; hover oscurece el borde a `ink-3`.
- **Error:** borde `alert` y mensaje en `alert` 14px 600 bajo el campo; alerta general con borde `alert` de 2px.

### Navigation
Barra fija de 68px (60px bajo 820px) en papel térmico al 92 % con desenfoque y perforación inferior. Enlaces 16px 600 en `ink-2`, hover a `ink` con velo de tinta al 6 % y radio 4px. Bajo 900px los enlaces desaparecen y queda solo el botón de acción (42px de alto).

### Cinta (signature)
Franja de 54px (44px dentro del plan destacado) en `tape` con brillo superior, sombra inferior y reflejo diagonal, texto repetido en mayúsculas 15px 800 `wdth` 80 con tracking 0.24em. Decorativa (`aria-hidden`), sin eventos. Al cargar se desenrolla una vez con `clip-path` en 1100ms.

### Timbre (signature)
Sello de goma en `stamp` (o `alert` para pagos no aprobados) con borde proporcional y máscara de grano procedural `--ink-grain` de 160px para que la tinta falle como un sello real. Lleva 絆 en Shippori Mincho o una palabra de estado en Archivo 800 condensada (ELEGIDO, PAGADO, RECHAZADO). Cae con "thunk": escala 1.35 a 1 con desenfoque en 520ms.

### Código de barras
Code 128B real generado en SVG con `crispEdges`, barras en `ink`, alto configurable por `--barcode-height` (52 a 64px) y el valor impreso debajo en mono 12px con tracking 0.32em. Decorativo.

### Seguimiento
Ruta punteada en `rule` con una línea violeta que avanza con el scroll (`animation-timeline: view()`), puntos que se rellenan de violeta al ser alcanzados y el estado impreso en mono 12px mayúsculas violeta junto a su punto. Sin soporte de view-timeline o con movimiento reducido, la ruta queda estática.

### Movimiento
Un solo idioma: lo que le pasa a una encomienda. Keyframes compartidos en `global.css` (`tape-unroll`, `stamp-thunk`, `label-apply`, `soft-fade`) que solo declaran `from` y se usan con relleno `backwards`, de modo que el estado final siempre es el natural y el hover sigue funcionando.
- **Portada (momento firma, ≈2 s, una vez):** la etiqueta se asienta, la cinta se desenrolla, cae el timbre, el código de barras se imprime en 16 pasos como impresora térmica, un láser violeta lo recorre y se marcan las casillas del manifiesto.
- **Al entrar en pantalla (una vez):** los planes se pegan escalonados 110ms (`.reveal-apply`), la cinta sella Kizuna Completo, los checks de la comparación se trazan fila por fila y el 絆 de la historia se timbra (`.reveal-stamp`). Lo marca `src/scripts/motion.ts` con `[data-inview]` → `[data-seen]`; solo con ese script activo existe `html.motion`, el único estado oculto (y nunca al imprimir).
- **Continuidad:** View Transitions entre documentos; cada plan tiene `view-transition-name: plan-<id>` y se convierte en la guía de reserva del pago, donde cae el timbre ELEGIDO. El menú es `site-nav` y no se mueve.
- **Respuesta:** franja de cinta bajo el enlace de la sección activa (translate + scaleX, 420ms), el menú pasa de filete a sombra en los primeros 120px de scroll, los desplegables abren con altura real (`::details-content` + `interpolate-size`), los botones se hunden al 98 % en 80ms, «Copiado» se tiñe de cinta y el botón de pago muestra «Conectando con Webpay…» con la cinta corriendo y bloquea el doble envío.
- **Movimiento reducido:** nada se desplaza ni escala; las entradas pasan a un fundido de 240ms, la portada aparece quieta y las transiciones entre páginas se desactivan.
- **Ojo con el minificador:** las animaciones con `animation-timeline` se escriben en longhands; si se mezclan con el shorthand `animation`, el build las fusiona en una declaración que Chrome descarta.

### Pantallas
Verificado de 320 a 1920px y en celular horizontal (`audit-responsive` + videos de QA).
- **Menú:** sobre 900px, enlaces en la barra con la franja de cinta; bajo 900px, botón de 44px que despliega una etiqueta con las secciones (24px, filas de 56px) y «Ver planes y precios». Bajo 400px «Ver planes» sale de la barra y vive solo en el menú. Se cierra al elegir, con Escape (devuelve el foco) o tocando fuera.
- **Planes:** tres cajas lado a lado solo sobre 1100px. Entre 700 y 1100px se apilan y cada una se arma en dos columnas (precio y plazos | contenido). Bajo 700px, una columna. Nombre y precio tienen techo (`min(…, 10vw)` y `min(…, 12.5vw)`) para no cortarse nunca.
- **Toque:** todo blanco interactivo mide al menos 44px; en pantallas táctiles (`pointer: coarse`) también los enlaces del pie y los botones «Copiar». En la portada, bajo 560px, los botones van a todo el ancho.
- **Texto:** nada bajo 12px.

### Íconos
SVG en línea con trazo `currentColor` de 2.4px, extremos redondeados, 1.05em o 20px en botones (ArrowIcon, WhatsAppIcon). Sin fuentes de íconos ni glifos.

## Do's and Don'ts

### Do:
- **Do** poner todo contenido legible dentro de una etiqueta térmica (`label`, 12px, sombra cálida), y dejar sobre el kraft solo titulares de sección, bajadas y notas en `kraft-ink`.
- **Do** separar franjas de una etiqueta con perforación discontinua de 2px en `rule`.
- **Do** escribir precios, abonos y códigos en Martian Mono con cifras tabulares.
- **Do** girar etiquetas y timbres levemente (etiquetas entre -1.2° y 0.5°, timbres entre -6° y -8°) y enderezarlas en móvil o al interactuar.
- **Do** envolver toda animación en `prefers-reduced-motion: no-preference`; el movimiento es uno por pieza y ocurre una vez (desenrollar, timbrar, asentar) o lo conduce el scroll.
- **Do** generar texturas de forma procedural (SVG `feTurbulence`, gradientes) en vez de imágenes.
- **Do** usar el vocabulario del producto en la interfaz: plan, abono, precio final, conversación inicial, rondas de revisión, días hábiles; y tratar siempre de tú.

### Don't:
- **Don't** usar degradados violetas de fondo, mockups de celular ni filas de tres tarjetas iguales; los planes difieren en tamaño como cajas distintas.
- **Don't** agregar un modo oscuro ni invertir el kraft; el mundo es solo claro.
- **Don't** usar Shippori Mincho para otro carácter que 絆, ni Martian Mono para titulares.
- **Don't** poner rótulos en mayúsculas sobre los titulares de sección; el rótulo de 11px existe solo como etiqueta de un campo con su valor.
- **Don't** usar sombras grises o negras duras sobre el kraft, ni sombras desplazadas sin desenfoque.
- **Don't** usar `alert` fuera de errores y pagos no aprobados.
- **Don't** usar colores crudos fuera de los tokens de `:root`.

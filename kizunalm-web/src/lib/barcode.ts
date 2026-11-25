/**
 * Codificador Code 128 (juego B) mínimo: devuelve el ancho de cada barra y espacio, alternando
 * barra/espacio desde una barra. Los códigos de las etiquetas son reales y escaneables.
 */
const PATTERNS = [
  '212222', '222122', '222221', '121223', '121322', '131222', '122213', '122312', '132212', '221213',
  '221312', '231212', '112232', '122132', '122231', '113222', '123122', '123221', '223211', '221132',
  '221231', '213212', '223112', '312131', '311222', '321122', '321221', '312212', '322112', '322211',
  '212123', '212321', '232121', '111323', '131123', '131321', '112313', '132113', '132311', '211313',
  '231113', '231311', '112133', '112331', '132131', '113123', '113321', '133121', '313121', '211331',
  '231131', '213113', '213311', '213131', '311123', '311321', '331121', '312113', '312311', '332111',
  '314111', '221411', '431111', '111224', '111422', '121124', '121421', '141122', '141221', '112214',
  '112412', '122114', '122411', '142112', '142211', '241211', '221114', '413111', '241112', '134111',
  '111242', '121142', '121241', '114212', '124112', '124211', '411212', '421112', '421211', '212141',
  '214121', '412121', '111143', '111341', '131141', '114113', '114311', '411113', '411311', '113141',
  '114131', '311141', '411131', '211412', '211214', '211232',
] as const;
const START_B = 104;
const STOP = '2331112';

export interface BarcodeModule {
  x: number;
  width: number;
}

/** Devuelve las barras (solo las negras) en módulos y el ancho total en módulos, con zona quieta de 10. */
export function code128(text: string): { bars: BarcodeModule[]; totalWidth: number } {
  const values = [...text].map((char) => {
    const code = char.charCodeAt(0) - 32;
    if (code < 0 || code > 94) throw new Error(`Carácter no soportado en Code 128B: ${char}`);
    return code;
  });
  const checksum = values.reduce((sum, value, index) => sum + value * (index + 1), START_B) % 103;
  const sequence = [START_B, ...values, checksum].map((value) => PATTERNS[value] ?? '').join('') + STOP;

  const quiet = 10;
  const bars: BarcodeModule[] = [];
  let x = quiet;
  [...sequence].forEach((digit, index) => {
    const width = Number(digit);
    if (index % 2 === 0) bars.push({ x, width });
    x += width;
  });
  return { bars, totalWidth: x + quiet };
}

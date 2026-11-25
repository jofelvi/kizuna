/**
 * Webpay Plus (Transbank). Solo servidor: nunca importar desde un <script> del navegador.
 *
 * Por defecto usa el ambiente de INTEGRACIÓN con las credenciales públicas de prueba que publica Transbank.
 * Para producción define en el entorno: WEBPAY_ENVIRONMENT=production, WEBPAY_COMMERCE_CODE y WEBPAY_API_KEY.
 */
// transbank-sdk es CommonJS: en Node las exportaciones con nombre no existen, solo el objeto por defecto.
import transbank from 'transbank-sdk';
const { WebpayPlus, Options, Environment, IntegrationApiKeys, IntegrationCommerceCodes } = transbank;
import { WEBPAY_API_KEY, WEBPAY_COMMERCE_CODE, WEBPAY_ENVIRONMENT } from 'astro:env/server';
import { z } from 'zod';

export const isWebpaySandbox = WEBPAY_ENVIRONMENT !== 'production';

function buildTransaction() {
  if (!isWebpaySandbox) {
    if (!WEBPAY_COMMERCE_CODE || !WEBPAY_API_KEY) {
      throw new Error('WEBPAY_ENVIRONMENT=production requiere WEBPAY_COMMERCE_CODE y WEBPAY_API_KEY.');
    }
    return new WebpayPlus.Transaction(new Options(WEBPAY_COMMERCE_CODE, WEBPAY_API_KEY, Environment.Production));
  }
  return new WebpayPlus.Transaction(
    new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration),
  );
}

// El SDK tipa sus respuestas como `any`: las validamos aquí y desde fuera solo circulan tipos inferidos.
const createResponseSchema = z.object({
  token: z.string().min(1),
  url: z.url(),
});

const commitResponseSchema = z.object({
  vci: z.string().optional(),
  amount: z.number(),
  status: z.string(),
  buy_order: z.string(),
  session_id: z.string(),
  card_detail: z.object({ card_number: z.string().optional() }).partial().optional(),
  accounting_date: z.string().optional(),
  transaction_date: z.string(),
  authorization_code: z.string().optional(),
  payment_type_code: z.string().optional(),
  response_code: z.number(),
  installments_number: z.number().optional(),
});

export type WebpayCommit = z.infer<typeof commitResponseSchema>;

export async function createWebpayTransaction(input: {
  buyOrder: string;
  sessionId: string;
  amount: number;
  returnUrl: string;
}) {
  const raw: unknown = await buildTransaction().create(input.buyOrder, input.sessionId, input.amount, input.returnUrl);
  return createResponseSchema.parse(raw);
}

export async function commitWebpayTransaction(token: string) {
  const raw: unknown = await buildTransaction().commit(token);
  return commitResponseSchema.parse(raw);
}

/** Webpay aprueba solo con response_code 0 y estado AUTHORIZED. */
export function isApproved(result: WebpayCommit): boolean {
  return result.response_code === 0 && result.status === 'AUTHORIZED';
}

/** Orden de compra única (máx. 26 caracteres en Webpay): KZ-<plan>-<marca de tiempo>-<azar>. */
export function newBuyOrder(planCode: string): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KZ-${planCode}-${stamp}${random}`.slice(0, 26);
}

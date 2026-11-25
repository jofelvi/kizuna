import { z } from 'zod';
import { plans, type Plan } from '../data/plans';

/** Porcentaje que se paga en línea para reservar el proyecto. El resto se paga a la entrega. */
export const DEPOSIT_RATE = 0.5;

export function depositFor(plan: Plan): number {
  return Math.round(plan.price * DEPOSIT_RATE);
}

export function findPlan(id: string): Plan | undefined {
  return plans.find((plan) => plan.id === id);
}

export function findPlanByCode(code: string): Plan | undefined {
  return plans.find((plan) => plan.code === code);
}

const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
export const formatCLP = (amount: number): string => clp.format(amount);

/** Datos que el cliente envía al pagar. El monto NUNCA viene del navegador: se calcula desde el plan. */
export const checkoutSchema = z.object({
  plan: z.string().min(1),
  name: z.string().trim().min(2, { error: 'Escribe tu nombre.' }).max(80),
  email: z.string().trim().pipe(z.email({ error: 'Revisa el correo: falta algo (ej: nombre@correo.cl).' })),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s]{8,15}$/, { error: 'Escribe tu celular con 9 dígitos (ej: 9 1234 5678).' }),
  business: z.string().trim().min(2, { error: 'Cuéntanos qué vende tu negocio.' }).max(120),
  terms: z.literal('on', { error: 'Para continuar, acepta las condiciones del abono.' }),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;

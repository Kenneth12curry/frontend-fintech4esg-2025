import { apiFetch } from "@/lib/api/api";
import type { FormValues } from "@/components/Fintech4esgInsights/SubscribeForm";

/**
 * Envoie le formulaire de contact avec le token captcha.
 */
export async function sendNewsletterForm(data: FormValues) {
  return apiFetch("/news", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
  });
}
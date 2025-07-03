import { apiFetch } from "@/lib/api/api";
import type { FormValues } from "@/pages/Contact";

/**
 * Envoie le formulaire de contact avec le token captcha.
 */
export async function sendContactForm(data: FormValues, captchaToken: string) {
  return apiFetch("/contact", {
    method: "POST",
    body: JSON.stringify({
      ...data,
      captchaToken, // Ajoute le token captcha au body
    }),
  });
}
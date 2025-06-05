/** consommer les API Rest */
import { apiFetch } from "@/lib/api/api";
import type { FormValues } from "@/pages/Contact";

export async function sendContactForm(data: FormValues) {
  return apiFetch("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
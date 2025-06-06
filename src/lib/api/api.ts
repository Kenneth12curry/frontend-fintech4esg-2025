//export const API_URL = import.meta.env.API_URL || "http://localhost:5000/api"; 
export const API_URL = "https://api-fintech4esg.onrender.com/api";
//export const API_URL = "http://152.53.114.190:5000/api";
export async function apiFetch<T = any>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...(options?.headers || {}) },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || "Erreur serveur");
  }
  return res.json();
}
/**
 * FinTech4ESG - ReadyCash Platform
 * Calendly integration utility
 */

/**
 * Opens the Calendly scheduling page in a new window
 * Uses window.location.href for direct navigation instead of window.open
 * to avoid popup blockers that may prevent the new window from opening
 */
export function openCalendly() {
  // Using direct navigation instead of window.open to avoid popup blockers
  window.location.href = 'https://calendly.com/fintech4esg';
}
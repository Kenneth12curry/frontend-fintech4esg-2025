import { useTranslation } from "react-i18next";
import {
  formatCurrency,
  formatLocalCurrency,
  getCurrencySymbol,
  getCurrencyInfo,
} from "@/lib/currency";

/**
 * A hook that provides currency formatting functions based on the current language from i18next.
 */
export function useCurrency() {
  const { i18n } = useTranslation();
  const language = i18n.language as string;

  return {
    /**
     * Format a USD amount to the local currency based on the current language
     */
    format: (amount: number) => formatCurrency(amount, language),

    /**
     * Format an amount that's already in the local currency
     */
    formatLocal: (localAmount: number) => formatLocalCurrency(localAmount, language),

    /**
     * Get just the currency symbol for the current language
     */
    symbol: getCurrencySymbol(language),

    /**
     * Get currency information for the current language
     */
    info: getCurrencyInfo(language),
  };
}

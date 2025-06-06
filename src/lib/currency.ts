import { useTranslation } from "react-i18next";

type SupportedLanguage = 'en' | 'ha' | 'ar' | 'fr' | 'es' | 'sw';

type CurrencyConfig = {
  code: string;
  symbol: string;
  name: string;
  format: (amount: number) => string;
  exchangeRate: number; // Exchange rate from USD
};

// Currency configurations for each supported language
const currencies: Record<SupportedLanguage, CurrencyConfig> = {
  en: {
    code: "GHS",
    symbol: "₵",
    name: "Ghana Cedis",
    format: (amount: number) => `₵${amount.toFixed(2)}`,
    exchangeRate: 13.47,
  },
  ha: {
    code: "NGN",
    symbol: "₦",
    name: "Nigerian Naira",
    format: (amount: number) => `₦${amount.toFixed(2)}`,
    exchangeRate: 1300,
  },
  ar: {
    code: "AED",
    symbol: "د.إ",
    name: "United Arab Emirates Dirham",
    format: (amount: number) => `${amount.toFixed(2)} د.إ`,
    exchangeRate: 3.67,
  },
  fr: {
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc",
    format: (amount: number) => `${amount.toFixed(0)} CFA`,
    exchangeRate: 600,
  },
  es: {
    code: "XAF",
    symbol: "CFA",
    name: "Central African CFA Franc",
    format: (amount: number) => `${amount.toFixed(0)} CFA`,
    exchangeRate: 600,
  },
  sw: {
    code: "KES",
    symbol: "KSh",
    name: "Kenyan Shilling",
    format: (amount: number) => `KSh ${amount.toFixed(2)}`,
    exchangeRate: 129,
  },
};

// Function to get the correct language key from i18next
const getSupportedLanguage = (lang: string): SupportedLanguage => {
  const fallback: SupportedLanguage = "en";
  return (Object.keys(currencies) as SupportedLanguage[]).includes(lang as SupportedLanguage)
    ? (lang as SupportedLanguage)
    : fallback;
};

/**
 * Get currency configuration for the current language
 */
export const getCurrency = (lang: string): CurrencyConfig => {
  const language = getSupportedLanguage(lang);
  return currencies[language];
};

export const formatCurrency = (amount: number, lang: string): string => {
  const currency = getCurrency(lang);
  const localAmount = amount * currency.exchangeRate;
  return currency.format(localAmount);
};

export const formatLocalCurrency = (localAmount: number, lang: string): string => {
  return getCurrency(lang).format(localAmount);
};

export const getCurrencySymbol = (lang: string): string => {
  return getCurrency(lang).symbol;
};

export const convertToLocalCurrency = (usdAmount: number, lang: string): number => {
  return usdAmount * getCurrency(lang).exchangeRate;
};

export const getCurrencyInfo = (lang: string): { code: string; name: string; symbol: string } => {
  const { code, name, symbol } = getCurrency(lang);
  return { code, name, symbol };
};


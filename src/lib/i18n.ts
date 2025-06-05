import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/translations/en"; // Traductions anglaises
import fr from "@/translations/fr"; // Traductions françaises

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "en", // Langue par défaut : anglais
  fallbackLng: "en", // Langue de secours : anglais
  interpolation: {
    escapeValue: false, // React échappe déjà les valeurs par défaut
  },
});

export default i18n;
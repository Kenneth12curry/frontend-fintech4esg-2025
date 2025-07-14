import { useState, useEffect, useCallback } from 'react';
import Cookies, { CookieAttributes } from 'js-cookie';

type CookieValue = string | undefined;

/**
 * Hook personnalisé pour gérer les cookies côté client.
 * Utilise la bibliothèque js-cookie.
 *
 * @param name Le nom du cookie.
 * @param defaultValue La valeur par défaut si le cookie n'existe pas.
 * @returns [valeur_du_cookie, fonction_pour_mettre_a_jour_le_cookie, fonction_pour_supprimer_le_cookie]
 */
function useCookie(name: string, defaultValue?: string): [CookieValue, (value: string, options?: CookieAttributes) => void, () => void] {
  const [value, setValue] = useState<CookieValue>(() => {
    const storedValue = Cookies.get(name);
    return storedValue !== undefined ? storedValue : defaultValue;
  });

  // Fonction pour mettre à jour la valeur du cookie
  const updateCookie = useCallback((newValue: string, options?: CookieAttributes) => {
    Cookies.set(name, newValue, options);
    setValue(newValue);
  }, [name]);

  // Fonction pour supprimer le cookie
  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(undefined);
  }, [name]);

  return [value, updateCookie, deleteCookie];
}

export default useCookie;

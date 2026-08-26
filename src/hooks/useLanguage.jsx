import { useState, useEffect, useCallback, createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children, translations }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const t = useCallback((path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
      result = result[key];
    }
    return result;
  }, [lang, translations]);

  const toggleLang = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

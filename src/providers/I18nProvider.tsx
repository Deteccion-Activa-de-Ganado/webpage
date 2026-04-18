import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CONTENT } from "@/content";
import type { Content, Language } from "@/content/types";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
};

const STORAGE_KEY = "dag-lang";
const DEFAULT_LANG: Language = "es";

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLang(): Language {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "en" || raw === "es" ? raw : DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readStoredLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: CONTENT[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within <I18nProvider>");
  }
  return ctx;
}

export function useT(): Content {
  return useI18n().t;
}

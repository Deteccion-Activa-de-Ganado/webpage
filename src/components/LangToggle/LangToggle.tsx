import { useI18n } from "@/providers/I18nProvider";
import type { Language } from "@/content/types";
import styles from "./LangToggle.module.css";

const LANGS: Language[] = ["es", "en"];

export default function LangToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className={styles.group} role="group" aria-label="Language">
      {LANGS.map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`${styles.btn} ${isActive ? styles.active : ""}`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

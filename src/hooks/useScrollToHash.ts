import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

export function useScrollToHash(): void {
  const { hash, pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo(0, 0);
  }, [hash, pathname, prefersReducedMotion]);
}

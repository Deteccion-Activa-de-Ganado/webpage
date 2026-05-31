import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import styles from "./layout.module.css";

export default function AppLayout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  useScrollToHash();

  return (
    <div className={styles.shell}>
      <Nav />
      <main className={styles.main}>
        <motion.div
          key={location.pathname}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

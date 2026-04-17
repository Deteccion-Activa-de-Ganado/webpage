import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "@/providers/I18nProvider";
import { usePaletteFromConfig } from "@/hooks/usePaletteFromConfig";
import Layout from "@/routes/Layout";
import Home from "@/routes/Home";
import Features from "@/routes/Features";
import HowItWorks from "@/routes/HowItWorks";
import Dashboard from "@/routes/Dashboard";

export default function App() {
  usePaletteFromConfig();

  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/caracteristicas" element={<Features />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { usePaletteFromConfig } from "@/hooks/usePaletteFromConfig";
import AppLayout from "@/app/layout";
import { appRoutes } from "@/app/routes";

export default function App() {
  usePaletteFromConfig();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {appRoutes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

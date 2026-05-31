import type { ComponentType } from "react";
import HomePage from "./page";
import CaracteristicasPage from "./caracteristicas/page";
import ComoFuncionaPage from "./como-funciona/page";
import DashboardPage from "./dashboard/page";
import EncuestaPage from "./encuesta/page";

export type AppRoute = {
  path: string;
  Page: ComponentType;
};

/** Rutas al estilo App Router de Next: cada carpeta en `app/` es un segmento de URL */
export const appRoutes: AppRoute[] = [
  { path: "/", Page: HomePage },
  { path: "/caracteristicas", Page: CaracteristicasPage },
  { path: "/como-funciona", Page: ComoFuncionaPage },
  { path: "/dashboard", Page: DashboardPage },
  { path: "/encuesta", Page: EncuestaPage },
];

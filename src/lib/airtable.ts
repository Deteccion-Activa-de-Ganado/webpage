export type SurveyPayload = {
  // Step 1
  modeloPago: string;
  precioEstimado: string;
  // Step 2
  puntuacionSatisfaccion: number;
  veBeneficiosDiarios: string;
  // Step 3
  tieneDron: string;
  comprariaDron: string;
  operadorDron: string;
  // Step 4
  frecuenciaUso: string;
  // Step 5
  tienePeones: string;
  cantidadPeones: string;
  frecuenciaPesaje: string;
  // Step 6
  caracteristicaFavorita: string;
  funcionMasUsada: string;
  claridadGraficos: string;
  // Step 7
  quéAgregaría: string;
  sugerenciasAdicionales: string;
  // Step 8
  usaCaravanas: string;
  tipoCaravana: string;
  caravanaConChip: string;
  valorTrazabilidad: string;
  // Step 9
  otrasHerramientas: string;
  comentariosFinales: string;
  // Meta
  token: string;
  fechaEnvio: string;
};

export async function submitSurvey(data: SurveyPayload): Promise<void> {
  const apiKey = import.meta.env.VITE_AIRTABLE_TOKEN as string | undefined;
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID as string | undefined;
  const tableName =
    (import.meta.env.VITE_AIRTABLE_TABLE_NAME as string | undefined) ??
    "Encuestas";

  if (!apiKey || !baseId) {
    throw new Error(
      "Faltan variables de entorno: VITE_AIRTABLE_TOKEN y VITE_AIRTABLE_BASE_ID"
    );
  }

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: data }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable error ${res.status}: ${body}`);
  }
}

export type DemoRequestPayload = {
  email: string;
  mensaje: string;
};

async function submitViaWeb3Forms(
  accessKey: string,
  data: DemoRequestPayload,
): Promise<void> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Nueva solicitud de demo — DAG",
      from_name: data.email,
      email: data.email,
      message: data.mensaje,
    }),
  });

  const body = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !body.success) {
    throw new Error(body.message ?? `Error al enviar (${res.status})`);
  }
}

async function submitViaAirtable(data: DemoRequestPayload): Promise<void> {
  const apiKey = import.meta.env.VITE_AIRTABLE_TOKEN as string | undefined;
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID as string | undefined;
  const tableName =
    (import.meta.env.VITE_AIRTABLE_DEMO_TABLE_NAME as string | undefined) ??
    "Demos";

  if (!apiKey || !baseId) {
    throw new Error(
      "Faltan variables de entorno para enviar la solicitud (Web3Forms o Airtable).",
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
      body: JSON.stringify({
        fields: {
          Email: data.email,
          Mensaje: data.mensaje,
          FechaEnvio: new Date().toISOString(),
        },
      }),
    },
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable error ${res.status}: ${body}`);
  }
}

export async function submitDemoRequest(data: DemoRequestPayload): Promise<void> {
  const email = data.email.trim();
  const mensaje = data.mensaje.trim();

  if (!email || !mensaje) {
    throw new Error("Completá tu email y el mensaje.");
  }

  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
    | string
    | undefined;

  if (web3Key) {
    await submitViaWeb3Forms(web3Key, { email, mensaje });
    return;
  }

  await submitViaAirtable({ email, mensaje });
}

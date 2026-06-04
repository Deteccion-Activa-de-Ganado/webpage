export type DemoRequestPayload = {
  email: string;
  mensaje: string;
};

/**
 * Envía la solicitud de demo por correo (Web3Forms → dag.fiuba@gmail.com en su panel).
 * Airtable solo se usa en /encuesta, no aquí.
 */
export async function submitDemoRequest(data: DemoRequestPayload): Promise<void> {
  const email = data.email.trim();
  const mensaje = data.mensaje.trim();

  if (!email || !mensaje) {
    throw new Error("Completá tu email y el mensaje.");
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
    | string
    | undefined;

  if (!accessKey?.trim()) {
    throw new Error(
      "El envío por correo no está configurado. Agregá VITE_WEB3FORMS_ACCESS_KEY en .env.local " +
        "(creala en https://web3forms.com y poné dag.fiuba@gmail.com como destino).",
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Nueva solicitud de demo — DAG",
      from_name: email,
      email,
      message: mensaje,
    }),
  });

  const body = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !body.success) {
    throw new Error(body.message ?? `Error al enviar (${res.status})`);
  }
}

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  History,
  Layers,
  Hash,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Send,
} from "lucide-react";
import { VALID_TOKENS } from "@/lib/tokens";
import { submitSurvey, type SurveyPayload } from "@/lib/airtable";
import styles from "./Encuesta.module.css";

/* ── Types ─────────────────────────────────────────────────── */
type FormData = {
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
};

const INITIAL: FormData = {
  modeloPago: "",
  precioEstimado: "",
  puntuacionSatisfaccion: 0,
  veBeneficiosDiarios: "",
  tieneDron: "",
  comprariaDron: "",
  operadorDron: "",
  frecuenciaUso: "",
  tienePeones: "",
  cantidadPeones: "",
  frecuenciaPesaje: "",
  caracteristicaFavorita: "",
  funcionMasUsada: "",
  claridadGraficos: "",
  quéAgregaría: "",
  sugerenciasAdicionales: "",
  usaCaravanas: "",
  tipoCaravana: "",
  caravanaConChip: "",
  valorTrazabilidad: "",
  otrasHerramientas: "",
  comentariosFinales: "",
};

const TOTAL_QUESTION_STEPS = 9;

/* ── Small helpers ─────────────────────────────────────────── */
type RadioOption = { value: string; label: string };

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={styles.optionList}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`${styles.optionLabel} ${value === opt.value ? styles.selected : ""}`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <span className={styles.optionText}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

function RatingPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <>
      <div className={styles.ratingRow}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            className={`${styles.ratingBtn} ${value === n ? styles.ratingSelected : ""}`}
            onClick={() => onChange(n)}
          >
            {n}
          </button>
        ))}
      </div>
      <div className={styles.ratingHint}>
        <span>Poco interesante</span>
        <span>Muy interesante</span>
      </div>
    </>
  );
}

/* ── Slide animation ────────────────────────────────────────── */
const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -48 : 48,
    opacity: 0,
  }),
};

/* ── Main component ─────────────────────────────────────────── */
export default function Encuesta() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") ?? "";

  useEffect(() => {
    if (!VALID_TOKENS.has(token)) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function goNext() {
    setDirection(1);
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const payload: SurveyPayload = {
        ...form,
        token,
        fechaEnvio: new Date().toISOString(),
      };
      await submitSurvey(payload);
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Error desconocido al enviar."
      );
      setStatus("error");
    }
  }

  const progress =
    step === 0 ? 0 : Math.round((step / TOTAL_QUESTION_STEPS) * 100);

  if (!VALID_TOKENS.has(token)) return null;

  return (
    <div className={styles.shell}>
      {/* Header */}
      <header className={styles.header}>
        <img src="/img/logo-dag.svg" alt="DAG" className={styles.logo} />
      </header>

      {/* Progress bar */}
      <div className={styles.progressWrap}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.card}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {submitted ? (
                <ThankYou />
              ) : (
                <>
                  {step === 0 && <StepIntro onStart={goNext} />}
                  {step === 1 && (
                    <Step1
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 2 && (
                    <Step2
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 3 && (
                    <Step3
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 4 && (
                    <Step4
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 5 && (
                    <Step5
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 6 && (
                    <Step6
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 7 && (
                    <Step7
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 8 && (
                    <Step8
                      form={form}
                      set={set}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  )}
                  {step === 9 && (
                    <Step9
                      form={form}
                      set={set}
                      onBack={goBack}
                      onSubmit={handleSubmit}
                      status={status}
                      errorMsg={errorMsg}
                    />
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── Step props type ────────────────────────────────────────── */
type StepProps = {
  form: FormData;
  set: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  onBack: () => void;
  onNext: () => void;
};

/* ── StepIntro ──────────────────────────────────────────────── */
function StepIntro({ onStart }: { onStart: () => void }) {
  const features = [
    { icon: <Hash className={styles.featureIcon} />, label: "Conteo automático" },
    { icon: <Scale className={styles.featureIcon} />, label: "Estimación de peso" },
    { icon: <History className={styles.featureIcon} />, label: "Registro histórico" },
    { icon: <Layers className={styles.featureIcon} />, label: "Segmentación por lote" },
  ];

  return (
    <div className={styles.introWrap}>
      <p className={styles.introEyebrow}>Encuesta de producto · DAG</p>
      <h1 className={styles.introTitle}>
        Tu opinión nos ayuda a mejorar DAG
      </h1>
      <p className={styles.introLede}>
        Esta encuesta es breve, anónima y tiene 9 pasos. Antes de comenzar,
        repasemos las funcionalidades principales que viste hoy.
      </p>

      <div className={styles.featureGrid}>
        {features.map((f) => (
          <div key={f.label} className={styles.featureChip}>
            {f.icon}
            <span>{f.label}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.navRow} ${styles.navEnd}`}>
        <button type="button" className={styles.btnNext} onClick={onStart}>
          Comenzar encuesta <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ── Step 1 · Modelo de pago ────────────────────────────────── */
function Step1({ form, set, onBack, onNext }: StepProps) {
  const canNext = form.modeloPago !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 1 de 9</p>
      <h2 className={styles.questionTitle}>
        ¿Cuánto estarías dispuesto a pagar?
      </h2>
      <p className={styles.questionLede}>
        Nos ayuda a entender qué modelo comercial funciona mejor para el campo.
      </p>

      <RadioGroup
        name="modeloPago"
        value={form.modeloPago}
        onChange={(v) => set("modeloPago", v)}
        options={[
          { value: "mensual", label: "Suscripción mensual" },
          { value: "anual", label: "Suscripción anual (más económico)" },
          { value: "pago-unico", label: "Pago único / licencia permanente" },
          { value: "por-video", label: "Pago por análisis / video procesado" },
          { value: "no-pagaria", label: "No pagaría por la herramienta" },
        ]}
      />

      {form.modeloPago && form.modeloPago !== "no-pagaria" && (
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>
            ¿Cuánto pagarías aproximadamente? (en $ARS o USD, lo que prefieras)
          </label>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Ej: $5.000 / mes, USD 20 por análisis…"
            value={form.precioEstimado}
            onChange={(e) => set("precioEstimado", e.target.value)}
          />
        </div>
      )}

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 2 · Valoración general ────────────────────────────── */
function Step2({ form, set, onBack, onNext }: StepProps) {
  const canNext = form.puntuacionSatisfaccion > 0 && form.veBeneficiosDiarios !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 2 de 9</p>
      <h2 className={styles.questionTitle}>¿Qué tan interesante te resultó?</h2>
      <p className={styles.questionLede}>Del 1 al 10, ¿cuánto te interesó el producto?</p>

      <RatingPicker
        value={form.puntuacionSatisfaccion}
        onChange={(v) => set("puntuacionSatisfaccion", v)}
      />

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>
          ¿Lo ves beneficioso para tu operación diaria?
        </label>
        <RadioGroup
          name="veBeneficiosDiarios"
          value={form.veBeneficiosDiarios}
          onChange={(v) => set("veBeneficiosDiarios", v)}
          options={[
            { value: "si", label: "Sí, lo veo muy útil" },
            { value: "quizas", label: "Quizás, dependería del precio" },
            { value: "no-seguro", label: "No estoy seguro aún" },
            { value: "no", label: "No lo veo necesario en mi caso" },
          ]}
        />
      </div>

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 3 · Dron ──────────────────────────────────────────── */
function Step3({ form, set, onBack, onNext }: StepProps) {
  const canNext = form.tieneDron !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 3 de 9</p>
      <h2 className={styles.questionTitle}>¿Contás con un dron?</h2>
      <p className={styles.questionLede}>
        DAG requiere un dron para capturar las imágenes. Queremos entender cómo
        está equipado el campo hoy.
      </p>

      <RadioGroup
        name="tieneDron"
        value={form.tieneDron}
        onChange={(v) => set("tieneDron", v)}
        options={[
          { value: "si", label: "Sí, ya tengo dron" },
          { value: "no", label: "No tengo dron" },
        ]}
      />

      {form.tieneDron === "no" && (
        <div className={styles.subField}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>¿Lo comprarías para usar DAG?</label>
            <RadioGroup
              name="comprariaDron"
              value={form.comprariaDron}
              onChange={(v) => set("comprariaDron", v)}
              options={[
                { value: "si", label: "Sí, si el producto lo justifica" },
                { value: "tal-vez", label: "Tal vez, habría que ver el costo total" },
                { value: "no", label: "No, es una barrera demasiado grande" },
              ]}
            />
          </div>
        </div>
      )}

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>¿Quién lo manejaría en el campo?</label>
        <input
          type="text"
          className={styles.textInput}
          placeholder="Ej: yo mismo, un peón, contrataría un servicio…"
          value={form.operadorDron}
          onChange={(e) => set("operadorDron", e.target.value)}
        />
      </div>

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 4 · Frecuencia de uso ─────────────────────────────── */
function Step4({ form, set, onBack, onNext }: StepProps) {
  const canNext = form.frecuenciaUso !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 4 de 9</p>
      <h2 className={styles.questionTitle}>
        ¿Con qué frecuencia utilizarías DAG?
      </h2>
      <p className={styles.questionLede}>
        Considerando el ciclo productivo de tu establecimiento.
      </p>

      <RadioGroup
        name="frecuenciaUso"
        value={form.frecuenciaUso}
        onChange={(v) => set("frecuenciaUso", v)}
        options={[
          { value: "diario", label: "Diariamente" },
          { value: "semanal", label: "Varias veces por semana" },
          { value: "quincenal", label: "Quincenalmente" },
          { value: "mensual", label: "Una vez al mes" },
          { value: "temporada", label: "Según la temporada / rodeo" },
          { value: "otro", label: "Otro" },
        ]}
      />

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 5 · Contexto operativo ────────────────────────────── */
function Step5({ form, set, onBack, onNext }: StepProps) {
  const canNext = form.tienePeones !== "" && form.frecuenciaPesaje !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 5 de 9</p>
      <h2 className={styles.questionTitle}>Contanos sobre tu establecimiento</h2>
      <p className={styles.questionLede}>
        Nos ayuda a entender el contexto operativo del campo.
      </p>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>¿Tenés peones a cargo?</label>
        <RadioGroup
          name="tienePeones"
          value={form.tienePeones}
          onChange={(v) => set("tienePeones", v)}
          options={[
            { value: "si", label: "Sí" },
            { value: "no", label: "No, trabajo solo" },
          ]}
        />
      </div>

      {form.tienePeones === "si" && (
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>¿Cuántos peones?</label>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Ej: 3"
            value={form.cantidadPeones}
            onChange={(e) => set("cantidadPeones", e.target.value)}
          />
        </div>
      )}

      <div className={styles.divider} />

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>¿Cada cuánto pesás tu ganado?</label>
        <RadioGroup
          name="frecuenciaPesaje"
          value={form.frecuenciaPesaje}
          onChange={(v) => set("frecuenciaPesaje", v)}
          options={[
            { value: "semanal", label: "Semanalmente" },
            { value: "mensual", label: "Mensualmente" },
            { value: "entrada-salida", label: "Solo en entrada y salida del lote" },
            { value: "venta", label: "Solo antes de venta" },
            { value: "nunca", label: "No peso / no tengo báscula" },
          ]}
        />
      </div>

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 6 · Feedback del producto ─────────────────────────── */
function Step6({ form, set, onBack, onNext }: StepProps) {
  const canNext =
    form.caracteristicaFavorita !== "" &&
    form.funcionMasUsada !== "" &&
    form.claridadGraficos !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 6 de 9</p>
      <h2 className={styles.questionTitle}>Feedback sobre el producto</h2>
      <p className={styles.questionLede}>
        Queremos saber qué parte del producto te resultó más valiosa.
      </p>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>¿Qué te gustó más?</label>
        <RadioGroup
          name="caracteristicaFavorita"
          value={form.caracteristicaFavorita}
          onChange={(v) => set("caracteristicaFavorita", v)}
          options={[
            { value: "conteo", label: "El conteo automático del rodeo" },
            { value: "peso", label: "La estimación de peso sin báscula" },
            { value: "historial", label: "El registro histórico y seguimiento" },
            { value: "lotes", label: "La segmentación y gestión por lote" },
            { value: "todo", label: "Todo en conjunto" },
          ]}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>¿Qué función usarías más seguido?</label>
        <RadioGroup
          name="funcionMasUsada"
          value={form.funcionMasUsada}
          onChange={(v) => set("funcionMasUsada", v)}
          options={[
            { value: "conteo", label: "Conteo" },
            { value: "peso", label: "Estimación de peso" },
            { value: "historial", label: "Historial / evolución" },
            { value: "lotes", label: "Gestión de lotes" },
            { value: "alertas", label: "Alertas automáticas" },
          ]}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>¿Los gráficos y paneles son claros?</label>
        <RadioGroup
          name="claridadGraficos"
          value={form.claridadGraficos}
          onChange={(v) => set("claridadGraficos", v)}
          options={[
            { value: "muy-claros", label: "Sí, son muy claros e intuitivos" },
            { value: "claros", label: "Sí, bastante claros" },
            { value: "mas-o-menos", label: "Más o menos, algunos generan dudas" },
            { value: "confusos", label: "No, me resultaron confusos" },
          ]}
        />
      </div>

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 7 · Mejoras ───────────────────────────────────────── */
function Step7({ form, set, onBack, onNext }: StepProps) {
  return (
    <>
      <p className={styles.stepLabel}>Paso 7 de 9</p>
      <h2 className={styles.questionTitle}>¿Qué le agregarías?</h2>
      <p className={styles.questionLede}>
        Esta sección es abierta — escribí lo que se te ocurra, todo suma.
      </p>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>
          ¿Qué función o característica agregarías que no tenemos?
        </label>
        <textarea
          className={styles.textarea}
          placeholder="Ej: integración con sistema de ventas, mapa satelital del campo, notificaciones al celular…"
          value={form.quéAgregaría}
          onChange={(e) => set("quéAgregaría", e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>
          ¿Lo verías útil que DAG incorpore más funciones de gestión (más allá del ganado)?
        </label>
        <textarea
          className={styles.textarea}
          placeholder="Ej: gestión de pasturas, registros veterinarios, costos operativos…"
          value={form.sugerenciasAdicionales}
          onChange={(e) => set("sugerenciasAdicionales", e.target.value)}
        />
      </div>

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button type="button" className={styles.btnNext} onClick={onNext}>
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 8 · Caravanas ─────────────────────────────────────── */
function Step8({ form, set, onBack, onNext }: StepProps) {
  const canNext = form.usaCaravanas !== "";
  return (
    <>
      <p className={styles.stepLabel}>Paso 8 de 9</p>
      <h2 className={styles.questionTitle}>¿Utilizás caravanas?</h2>
      <p className={styles.questionLede}>
        La identificación individual de cada animal es obligatoria por ley (RENSPA / SENASA).
        Queremos entender cómo gestionás esto hoy.
      </p>

      <RadioGroup
        name="usaCaravanas"
        value={form.usaCaravanas}
        onChange={(v) => set("usaCaravanas", v)}
        options={[
          { value: "si", label: "Sí, uso caravanas" },
          { value: "no", label: "No utilizo caravanas actualmente" },
        ]}
      />

      {form.usaCaravanas === "si" && (
        <div className={styles.subField}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>¿Qué tipo de caravanas usás?</label>
            <input
              type="text"
              className={styles.textInput}
              placeholder="Ej: plástica común, electrónica, RFID, Caravana Argentina…"
              value={form.tipoCaravana}
              onChange={(e) => set("tipoCaravana", e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>¿Tienen chip electrónico?</label>
            <RadioGroup
              name="caravanaConChip"
              value={form.caravanaConChip}
              onChange={(v) => set("caravanaConChip", v)}
              options={[
                { value: "si", label: "Sí, tienen chip" },
                { value: "no", label: "No, son caravanas visuales" },
                { value: "mixtas", label: "Algunas sí, otras no" },
              ]}
            />
          </div>
        </div>
      )}

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>
          ¿Te agregaría valor poder identificar históricamente a cada vaca de forma
          única dentro de DAG?
        </label>
        <RadioGroup
          name="valorTrazabilidad"
          value={form.valorTrazabilidad}
          onChange={(v) => set("valorTrazabilidad", v)}
          options={[
            { value: "si-mucho", label: "Sí, sería muy valioso" },
            { value: "si-algo", label: "Sí, algo" },
            { value: "indiferente", label: "Me es indiferente" },
            { value: "ya-lo-hago", label: "Ya lo hago con otras herramientas" },
          ]}
        />
      </div>

      <div className={styles.navRow}>
        <button type="button" className={styles.btnBack} onClick={onBack}>
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={styles.btnNext}
          onClick={onNext}
          disabled={!canNext}
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

/* ── Step 9 · Herramientas y cierre ─────────────────────────── */
function Step9({
  form,
  set,
  onBack,
  onSubmit,
  status,
  errorMsg,
}: Omit<StepProps, "onNext"> & {
  onSubmit: () => void;
  status: "idle" | "submitting" | "error";
  errorMsg: string;
}) {
  const isSubmitting = status === "submitting";
  return (
    <>
      <p className={styles.stepLabel}>Paso 9 de 9</p>
      <h2 className={styles.questionTitle}>Para cerrar…</h2>
      <p className={styles.questionLede}>
        Últimas preguntas antes de enviar la encuesta.
      </p>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>
          ¿Usás alguna otra herramienta de gestión ganadera hoy?
        </label>
        <textarea
          className={styles.textarea}
          placeholder="Ej: DigiGanado, InfoGanado, planilla de Excel, nada todavía…"
          value={form.otrasHerramientas}
          onChange={(e) => set("otrasHerramientas", e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>
          ¿Algún comentario final o algo que quieras que sepamos?
        </label>
        <textarea
          className={styles.textarea}
          placeholder="Cualquier cosa que no hayamos preguntado y quieras contarnos…"
          value={form.comentariosFinales}
          onChange={(e) => set("comentariosFinales", e.target.value)}
        />
      </div>

      {status === "error" && (
        <div className={styles.errorBanner}>
          Hubo un error al enviar: {errorMsg}. Revisá tu conexión e intentá nuevamente.
        </div>
      )}

      <div className={styles.navRow}>
        <button
          type="button"
          className={styles.btnBack}
          onClick={onBack}
          disabled={isSubmitting}
        >
          <ArrowLeft size={14} /> Atrás
        </button>
        <button
          type="button"
          className={`${styles.btnNext} ${styles.btnSubmit}`}
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Enviando…"
          ) : (
            <>
              Enviar encuesta <Send size={15} />
            </>
          )}
        </button>
      </div>
    </>
  );
}

/* ── Thank you ──────────────────────────────────────────────── */
function ThankYou() {
  return (
    <div className={styles.thankWrap}>
      <CheckCircle2 className={styles.thankIcon} />
      <h2 className={styles.thankTitle}>¡Muchas gracias!</h2>
      <p className={styles.thankLede}>
        Tu respuesta fue registrada. Cada opinión nos ayuda a construir una
        herramienta más útil para el campo argentino.
      </p>
      <p style={{ fontSize: "0.85rem", color: "var(--text-subtle)" }}>
        Podés cerrar esta ventana.
      </p>
    </div>
  );
}

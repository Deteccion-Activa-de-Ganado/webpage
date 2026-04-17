import { en } from "./en";
import { es } from "./es";
import type { Content, Language } from "./types";

export const CONTENT: Record<Language, Content> = { es, en };
export type { Content, Language };

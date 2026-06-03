import { ca } from './translations/ca';
import { es } from './translations/es';
import { en } from './translations/en';

export const translations = { ca, es, en };

// Tipo inferido automáticamente del objeto es
// (Así si se añade una key en "es", TypeScript avisa si falta en "en")
export type Translations = typeof es;

import { createContext } from 'react';
import type { Locale } from '@/components/languageSelector/languages';
import { translations, type Translations } from '@/i18n';

interface I18nContextType {
	locale: Locale;
	t: Translations;
	setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextType>({
	locale: 'es',
	t: translations['es'],
	setLocale: () => {},
});

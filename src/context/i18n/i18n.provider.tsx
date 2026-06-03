import React, { useEffect, useState } from 'react';
import type { Locale } from '@/components/languageSelector/languages';
import { translations } from '@/i18n';
import { I18nContext } from './i18n.context';

const STORAGE_KEY = 'locale';

function getInitialLocale(): Locale {
	const storedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;

	if (storedLocale && translations[storedLocale]) {
		return storedLocale;
	}

	// Idioma del navegador
	const browserLanguage = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';

	return browserLanguage;
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [locale, setLocale] = useState<Locale>(getInitialLocale);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, locale);
	}, [locale]);

	return (
		<I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
			{children}
		</I18nContext.Provider>
	);
};

export default I18nProvider;

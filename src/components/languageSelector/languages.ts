export interface Language {
	locale: Locale;
	flagCode: string;
	alpha: string;
	label: string;
}

export const languages: Language[] = [
	{ locale: 'es', flagCode: 'es', alpha: 'ES', label: 'Español' },
	{ locale: 'en', flagCode: 'gb', alpha: 'EN', label: 'English' },
];

export type Locale = 'es' | 'en';

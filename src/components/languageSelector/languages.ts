export const languages = [
	{
		locale: 'es', // código de idioma (i18n)
		flagCode: 'es', // código de bandera (flagcdn)
		alpha: 'ES', // etiqueta corta para el selector
		label: 'Español', // nombre completo
	},
	{
		locale: 'en',
		flagCode: 'gb',
		alpha: 'EN',
		label: 'English',
	},
] as const;

export type Language = (typeof languages)[number];
export type Locale = Language['locale'];

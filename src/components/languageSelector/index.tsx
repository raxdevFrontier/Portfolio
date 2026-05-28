import React, { useContext, useState } from 'react';
import type { Language } from './languages';
import { I18nContext } from '@/context/i18n/i18n.context';

const FLAGS_BASE_URL = 'https://flagcdn.io/flags/4x3/';
const FLAGS_EXTENSION_URL = '.svg';
interface LanguageSelectorProps {
	languages: Language[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages }) => {
	const showSelector = languages?.length > 1;

	const { locale, setLocale } = useContext(I18nContext);

	const selectedLanguage = languages.find((language) => language.locale === locale);

	const handleSelect = (language: Language) => {
		setLocale(language.locale);

		// cerrar dropdown
		(document.activeElement as HTMLElement)?.blur();
	};

	if (!showSelector) return null;

	return (
		<div className="dropdown dropdown-end">
			{/* Trigger */}
			<div tabIndex={0} role="button" className="btn btn-ghost gap-2">
				<img
					src={FLAGS_BASE_URL + selectedLanguage?.flagCode + FLAGS_EXTENSION_URL}
					// src={`https://flagcdn.com/${selectedLanguage?.flagCode}.svg`}
					alt={selectedLanguage?.label}
					width="24"
					className="rounded-sm"
				/>
				<span>{selectedLanguage?.alpha}</span>
			</div>

			{/* Opciones */}
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-200 rounded-box shadow-xl z-50 w-36 p-2"
			>
				{languages.map((language) => (
					<li key={language.locale}>
						<button
							onClick={() => handleSelect(language)}
							className="flex items-center gap-2"
						>
							<img
								src={`https://flagcdn.io/flags/4x3/${language?.flagCode}.svg`}
								// src={`https://flagcdn.com/${language?.flagCode}.svg`}
								alt={language.label}
								width="24"
								className="rounded-sm"
							/>
							<span>{language.label}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LanguageSelector;

import React, { useState } from 'react';
import type { Language } from './languages';

interface LanguageSelectorProps {
	languages: Language[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages }) => {
	const showSelector = languages?.length > 1;
	const [selectedLanguage, setSelectedLanguage] = useState<Language | undefined>(
		languages?.length > 1 ? languages[0] : undefined,
	);
	const handleSelect = (language: Language) => {
		setSelectedLanguage(language);
		(document.activeElement as HTMLElement)?.blur(); // 👈 cierra el dropdown
	};

	if (!showSelector) return null;

	return (
		<div className="dropdown dropdown-end">
			{/* Trigger */}
			<div tabIndex={0} role="button" className="btn btn-ghost gap-2">
				<img
					src={`https://flagcdn.com/${selectedLanguage?.flagCode}.svg`}
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
								src={`https://flagcdn.com/${language?.flagCode}.svg`}
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

import React, { useState } from 'react';
import { languages, type Language } from './languages';

const LanguageSelector: React.FC = () => {
	const [selected, setSelected] = useState<Language>(languages[0]);

	const handleSelect = (language: Language) => {
		setSelected(language);
		(document.activeElement as HTMLElement)?.blur(); // 👈 cierra el dropdown
	};

	return (
		<div className="dropdown dropdown-end">
			{/* Trigger */}
			<div tabIndex={0} role="button" className="btn btn-ghost gap-2">
				<img
					src={`https://flagcdn.com/${selected.flagCode}.svg`}
					alt={selected.label}
					width="24"
					className="rounded-sm"
				/>
				<span>{selected.alpha}</span>
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
								src={`https://flagcdn.com/${language.flagCode}.svg`}
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

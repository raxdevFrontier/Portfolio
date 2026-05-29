import React, { useContext } from 'react';
import ThemeSelector from '@/components/themeSelector';
import LanguageSelector from '@/components/languageSelector';
import { languages } from '@/components/languageSelector/languages';
import { I18nContext } from '@/context/i18n/i18n.context';

export const Header: React.FC = () => {
	const { t } = useContext(I18nContext);

	return (
		<div className="fixed navbar bg-base-100 shadow-sm z-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						className="btn btn-ghost btn-circle"
						tabIndex={0}
						role="button"
						aria-label={t.nav.ariaLabelDropdownBtn}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{' '}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>{' '}
						</svg>
					</div>
					<ul
						tabIndex={-1}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<a href="#home">{t.nav.home}</a>
						</li>
						<li>
							<a href="#projects">{t.nav.projects}</a>
						</li>
						<li>
							<a href="#about">{t.nav.about}</a>
						</li>
						<li>
							<a href="#contact">{t.nav.contact}</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost text-4xl" href="/">
					{t.nav.mainText}
				</a>
			</div>
			<div className="navbar-end gap-2 sm:gap-4">
				<LanguageSelector languages={languages} />
				<ThemeSelector />
			</div>
		</div>
	);
};

export default Header;

import React from 'react';
import ThemeSelector from '@/components/themeSelector';
import LanguageSelector from '@/components/languageSelector';
import { languages } from '@/components/languageSelector/languages';

export const Header: React.FC = () => {
	return (
		<div className="fixed navbar bg-base-100 shadow-sm z-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
						// tabIndex="-1"
						tabIndex={-1}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#projects">Mis Proyectos</a>
						</li>
						<li>
							<a href="#about">Sobre Mi</a>
						</li>
						<li>
							<a href="#contact">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost text-4xl" href="/">
					RaxDev
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

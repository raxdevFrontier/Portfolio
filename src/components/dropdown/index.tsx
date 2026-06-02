import React, { useContext } from 'react';
import { I18nContext } from '@/context/i18n/i18n.context';
import { CV_BY_LOCALE } from '@/layout/Header/data';
import { RxAvatar, RxChatBubble, RxDownload, RxHome, RxPencil2 } from 'react-icons/rx';

const DropdownMenu: React.FC = () => {
	const { t, locale } = useContext(I18nContext);
	const cvUrl = CV_BY_LOCALE[locale];

	return (
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
				className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-52 p-2 shadow outline outline-gray-300"
			>
				<li>
					<a href="#home" className="text-sm sm:text-base">
						<RxHome />
						{t.nav.home}
					</a>
				</li>
				<li>
					<a href="#projects" className="text-sm sm:text-base">
						<RxPencil2 />
						{t.nav.projects}
					</a>
				</li>
				<li>
					<a href="#about" className="text-sm sm:text-base">
						<RxAvatar />
						{t.nav.about}
					</a>
				</li>
				<li>
					<a href="#contact" className="text-sm sm:text-base">
						<RxChatBubble />
						{t.nav.contact}
					</a>
				</li>
				<li className="sm:hidden">
					<a className="text-sm sm:text-base" href={cvUrl} download>
						<RxDownload />
						{t.nav.downloadCv}
					</a>
				</li>
			</ul>
		</div>
	);
};

export default DropdownMenu;

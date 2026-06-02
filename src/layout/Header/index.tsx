import React, { useContext } from 'react';
import { RxDownload } from 'react-icons/rx';
import ThemeSelector from '@/components/themeSelector';
import LanguageSelector from '@/components/languageSelector';
import DropdownMenu from '@/components/dropdown';
import { languages } from '@/components/languageSelector/languages';
import { I18nContext } from '@/context/i18n/i18n.context';
import { CV_BY_LOCALE } from './data';

export const Header: React.FC = () => {
	const { t, locale } = useContext(I18nContext);
	const cvUrl = CV_BY_LOCALE[locale];

	return (
		<div className="fixed navbar bg-base-100 shadow-sm z-10">
			<div className="navbar-start">
				<DropdownMenu />
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost text-2xl sm:text-3xl" href="/">
					{t.nav.mainText}
				</a>
			</div>
			<div className="navbar-end gap-2 sm:gap-4">
				<LanguageSelector languages={languages} />
				<ThemeSelector />

				<a
					href={cvUrl}
					download
					className="btn btn-primary btn-sm gap-2 text-base hidden sm:inline-flex"
					aria-label={t.nav.ariaLabelDownloadCv}
				>
					<RxDownload />
					{t.nav.downloadCv}
				</a>
			</div>
		</div>
	);
};

export default Header;

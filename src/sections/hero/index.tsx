import React, { useContext } from 'react';
import { I18nContext } from '@/context/i18n/i18n.context';

// const DEFAULT_IMAGE = 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp';
const MY_IMG_URL = '/mi_persona.JPG';

export const Hero: React.FC = () => {
	const { t } = useContext(I18nContext);

	return (
		<section id="home" className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse gap-20">
				<img
					className="max-w-lg rounded-lg shadow-2xl w-[12.5rem] md:w-[19rem] lg:w-[25rem]"
					src={MY_IMG_URL}
					alt="imagen de perfil"
				/>
				<div>
					<h1 className="text-4xl font-bold sm:text-5xl">
						{t.hero.title}
						<span className="text-primary underline">{t.hero.alias}</span>!
					</h1>
					<p className="text-justify py-6">
						{t.hero.subtitle1}
						<br />
						{t.hero.subtitle2}
					</p>
					{/* <button className="btn btn-primary">Get Started</button> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;

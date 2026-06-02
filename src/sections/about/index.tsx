import React, { useContext } from 'react';
import { SiReact } from 'react-icons/si';
import SectionWrapper from '@/components/sectionWrapper';
import SkillsSection from '@/components/skills';
import useThemeMode from '@/hooks/useThemeMode';
import { I18nContext } from '@/context/i18n/i18n.context';
import { getYearsLabel } from '@/utils/dates';

const About: React.FC = () => {
	const experience = getYearsLabel(2023);
	const { isDark } = useThemeMode();

	const { t } = useContext(I18nContext);

	return (
		<SectionWrapper showDivider id="about">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.about.title}</h2>
			<p className="text-justify mt-4 leading-relaxed max-w-prose sm:max-w-full">
				{t.about.paragraph1}
			</p>
			<p className="text-justify mt-4 leading-relaxed max-w-prose sm:max-w-full">
				{t.about.paragraph2}
			</p>
			<aside className="flex justify-center place-items-center gap-8 mt-8">
				<span className="badge badge-xl badge-secondary">
					<SiReact /> {t.about.mainTechName}
				</span>
				<span
					className={'stats shadow-lg ' + (isDark ? 'ring' : '')}
					style={{ overflowX: 'visible' }}
				>
					<span className="stat">
						<span className="stat-title text-base-content">
							{t.about.experienceLabel}
						</span>
						<span className="stat-value">{`${experience} ${t.about.experienceYears}`}</span>
					</span>
				</span>
			</aside>

			<SkillsSection />
		</SectionWrapper>
	);
};

export default About;

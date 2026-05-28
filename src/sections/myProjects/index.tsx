import React, { useContext } from 'react';
import './index.scss';
import Card from '@/components/card';
import SectionWrapper from '@/components/sectionWrapper';
import { I18nContext } from '@/context/i18n/i18n.context';

const Projects: React.FC = () => {
	const { t } = useContext(I18nContext);

	return (
		<SectionWrapper id="projects" showDivider>
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.projects.title}</h2>
			<div className="projects__cards mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
				<Card
					title="Titulo Card"
					description="Descripció Card"
					tag="TAG"
					badges={['badge1', 'badge2']}
				/>
				<Card
					title="Titulo Card"
					description="Descripció Card"
					tag="TAG"
					badges={['badge1', 'badge2']}
				/>
				<Card
					title="Titulo Card"
					description="Descripció Card"
					tag="TAG"
					badges={['badge1', 'badge2']}
				/>
				<Card
					title="Titulo Card"
					description="Descripció Card"
					tag="TAG"
					badges={['badge1', 'badge2']}
				/>
				<Card
					title="Titulo Card"
					description="Descripció Card"
					tag="TAG"
					badges={['badge1', 'badge2']}
				/>
			</div>
		</SectionWrapper>
	);
};

export default Projects;

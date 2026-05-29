import React, { useContext } from 'react';
import './index.scss';
import Card from '@/components/card';
import SectionWrapper from '@/components/sectionWrapper';
import { I18nContext } from '@/context/i18n/i18n.context';
import type { ProjectData } from './model';
import EmptyProjects from '@/components/emptyState';
// import { projectsList } from './data';

const Projects: React.FC = () => {
	const { t } = useContext(I18nContext);

	const renderProjectsCards = (projects: ProjectData[] | undefined) => {
		if (!projects) {
			return <EmptyProjects />;
		}

		return (
			<div className="projects__cards mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
				{projects.map((project) => (
					<Card
						key={project.id}
						title={project.title}
						description={project.description}
						tag={project.tag}
						badges={project.badges}
					/>
				))}
			</div>
		);
	};

	return (
		<SectionWrapper id="projects" showDivider>
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.projects.title}</h2>
			{renderProjectsCards(undefined)}
			{/* {renderProjectsCards(projectsList)} */}
		</SectionWrapper>
	);
};

export default Projects;

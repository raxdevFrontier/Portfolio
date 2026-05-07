import React from 'react';
import './index.scss';
import Card from '@/components/card';
import SectionWrapper from '@/components/sectionWrapper';

const Projects: React.FC = () => {
	return (
		<SectionWrapper showDivider>
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Mis proyectos</h2>
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

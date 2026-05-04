import React from 'react';
import './index.scss';
import Card from '@/components/card';

const Projects: React.FC = () => {
	return (
		<div className="projects__wrapper">
			<p>My Projects</p>
			<Card
				title="Titulo Card"
				description="Descripció Card"
				tag="TAG"
				badges={['badge1', 'badge2']}
			/>
		</div>
	);
};

export default Projects;

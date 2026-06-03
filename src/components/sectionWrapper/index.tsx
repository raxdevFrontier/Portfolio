import React from 'react';
import Divider from '../divider';

interface Props {
	children: React.ReactNode;
	showDivider?: boolean;
	id?: string;
}
const SectionWrapper: React.FC<Props> = (Props) => {
	const showDivider = Props.showDivider ?? false;
	const sectionId = Props.id ?? '';

	return (
		<>
			<section id={sectionId} className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">
				{Props.children}
			</section>
			{showDivider && <Divider />}
		</>
	);
};

export default SectionWrapper;

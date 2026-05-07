import React from 'react';
import Divider from '../divider';

interface Props {
	children: React.ReactNode;
	showDivider?: boolean;
}
const SectionWrapper: React.FC<Props> = (Props) => {
	const showDivider = Props.showDivider ?? false;

	return (
		<>
			<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">{Props.children}</section>
			{showDivider && <Divider />}
		</>
	);
};

export default SectionWrapper;

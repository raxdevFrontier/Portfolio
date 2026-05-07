import React from 'react';
import { colorClassMap, positionClassMap, type DividerProps } from './models';

const Divider: React.FC<DividerProps> = ({ text, textPosition, color }) => {
	const dividerColorClass = color ? colorClassMap[color] : '';
	const dividerPositionClass = textPosition ? positionClassMap[textPosition] : '';

	return (
		<>
			<div className={['divider', dividerPositionClass, dividerColorClass].join(' ')}>
				{text}
			</div>
		</>
	);
};

export default Divider;

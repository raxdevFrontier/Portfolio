import React from 'react';
import type { Skill } from './model';

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
	const { name, icon: Icon, level, color } = skill;
	const isMain = level === 'main';
	return (
		<div
			className={[
				'badge gap-2 py-4 px-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02]',
				isMain ? 'badge-soft' : 'badge-outline',
			].join(' ')}
		>
			<Icon className={isMain ? 'text-base' : 'text-sm'} style={{ color }} />
			<span>{name}</span>
		</div>
	);
};

export default SkillBadge;

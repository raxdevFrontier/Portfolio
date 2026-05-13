import type { IconType } from 'react-icons';

export type SkillLevel = 'main' | 'secondary';

export const badgeVariantMap: Record<string, string> = {
	Frontend: 'badge-info',
	UI: 'badge-secondary',
	Tools: 'badge-accent',
	Testing: 'badge-success',
};

export type Skill = {
	name: string;
	icon: IconType;
	level: SkillLevel;
	color?: string;
};

export type SkillCategory = {
	title: string;
	description: string;
	skills: Skill[];
};

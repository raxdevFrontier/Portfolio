import type { SkillCategory } from './model';
import {
	SiReact,
	SiTypescript,
	SiHtml5,
	SiCss,
	SiAngular,
	SiReactquery,
	SiReactrouter,
	SiTailwindcss,
	SiStorybook,
	SiGit,
	SiGithub,
	// SiTestinglibrary,
	// SiVitest,
	// SiJest,
	SiFigma,
	SiPostman,
	SiVite,
	SiNodedotjs,
	// SiVercel,
} from 'react-icons/si';

export const skillCategories: SkillCategory[] = [
	{
		title: 'Frontend',
		descriptionKey: 'frontend',
		description: 'Tecnologías principales para construir interfaces modernas.',
		skills: [
			{ name: 'React', icon: SiReact, level: 'main' },
			{ name: 'TypeScript', icon: SiTypescript, level: 'main', color: '#017ACD' },
			{ name: 'HTML5', icon: SiHtml5, level: 'main', color: '#E34E24' },
			{ name: 'CSS3', icon: SiCss, level: 'main', color: '#1573B6' },
			{ name: 'React Query', icon: SiReactquery, level: 'main', color: '#FE4054' },
			{ name: 'Angular', icon: SiAngular, level: 'secondary', color: '#DD0131' },
			{ name: 'React Router', icon: SiReactrouter, level: 'secondary', color: '#CA4344' },
		],
	},
	{
		title: 'UI',
		descriptionKey: 'ui',
		description: 'Herramientas y librerías para diseño visual y componentes.',
		skills: [
			{ name: 'TailwindCSS', icon: SiTailwindcss, level: 'main', color: '#38B3AD' },
			{ name: 'daisyUI', icon: SiTailwindcss, level: 'main', color: '#5A0EF8' },
			{ name: 'Storybook', icon: SiStorybook, level: 'secondary', color: '#FF4684' },
			{ name: 'Figma', icon: SiFigma, level: 'secondary' },
		],
	},
	{
		title: 'Tools',
		descriptionKey: 'tools',
		description: 'Flujo de trabajo, versiones y utilidades de desarrollo.',
		skills: [
			{ name: 'Git', icon: SiGit, level: 'main', color: '#F05033' },
			{ name: 'GitHub', icon: SiGithub, level: 'main' },
			{ name: 'Vite', icon: SiVite, level: 'secondary', color: '#646CFF' },
			{ name: 'Postman', icon: SiPostman, level: 'secondary', color: '#FF6C37' },
			{ name: 'Node.js', icon: SiNodedotjs, level: 'secondary', color: '#339933' },
		],
	},
	// {
	// 	title: 'Testing',
	// 	descriptionKey: 'testing',
	// 	description: 'Calidad, validación y pruebas de interfaces.',
	// 	skills: [
	// 		{ name: 'Testing Library', icon: SiTestinglibrary, level: 'main' },
	// 		{ name: 'Vitest', icon: SiVitest, level: 'secondary' },
	// 		{ name: 'Jest', icon: SiJest, level: 'secondary' },
	// 	],
	// },
];

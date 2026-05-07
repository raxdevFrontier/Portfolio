import type { IconType } from 'react-icons';
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
import { FaCheckCircle } from 'react-icons/fa';

type SkillLevel = 'main' | 'secondary';

type Skill = {
	name: string;
	icon: IconType;
	level: SkillLevel;
	color?: string;
};

type SkillCategory = {
	title: string;
	description: string;
	skills: Skill[];
};

const skillCategories: SkillCategory[] = [
	{
		title: 'Frontend',
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
	// 	description: 'Calidad, validación y pruebas de interfaces.',
	// 	skills: [
	// 		{ name: 'Testing Library', icon: SiTestinglibrary, level: 'main' },
	// 		{ name: 'Vitest', icon: SiVitest, level: 'secondary' },
	// 		{ name: 'Jest', icon: SiJest, level: 'secondary' },
	// 	],
	// },
];

const badgeVariantMap: Record<string, string> = {
	Frontend: 'badge-info',
	UI: 'badge-secondary',
	Tools: 'badge-accent',
	Testing: 'badge-success',
};

function SkillBadge({ skill }: { skill: Skill }) {
	const Icon = skill.icon;
	const isMain = skill.level === 'main';

	return (
		<div
			className={[
				'badge gap-2 py-4 px-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02]',
				isMain ? 'badge-soft' : 'badge-outline',
			].join(' ')}
		>
			<Icon className={isMain ? 'text-base' : 'text-sm'} style={{ color: skill.color }} />
			<span>{skill.name}</span>
		</div>
	);
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
	const badgeColor = badgeVariantMap[category.title] ?? 'badge-neutral';

	return (
		<article className="card bg-base-100 shadow-md border border-base-300">
			<div className="card-body gap-4">
				<div className="flex items-start justify-between gap-3">
					<div>
						<h3 className="card-title text-lg">{category.title}</h3>
						<p className="text-sm opacity-70">{category.description}</p>
					</div>
					<div className={`badge ${badgeColor} badge-sm`}>{category.skills.length}</div>
				</div>

				<div className="flex flex-wrap gap-2">
					{category.skills.map((skill) => (
						<SkillBadge key={skill.name} skill={skill} />
					))}
				</div>
			</div>
		</article>
	);
}

export default function SkillsSection() {
	return (
		<aside className="mt-10">
			<div className="mb-10 max-w-2xl md:max-w-full">
				<div className="inline-flex items-center gap-2 rounded-full bg-base-200 px-4 py-2 text-sm">
					<FaCheckCircle className="text-success" />
					Stack técnico y habilidades
				</div>
				<h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
					Tecnologías que uso para construir interfaces modernas
				</h3>
				<p className="mt-3 text-base opacity-70">
					A continuación puedes ver las tecnologias que uso.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{skillCategories.map((category) => (
					<SkillCategoryCard key={category.title} category={category} />
				))}
			</div>
			{/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-10 max-w-2xl md:max-w-full">
					<div className="inline-flex items-center gap-2 rounded-full bg-base-200 px-4 py-2 text-sm">
						<FaCheckCircle className="text-success" />
						Stack técnico y habilidades
					</div>
					<h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
						Tecnologías que uso para construir interfaces modernas
					</h2>
					<p className="mt-3 text-base opacity-70">
						Una organización clara por categorías ayuda a mostrar tu perfil de forma
						profesional y fácil de escanear.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{skillCategories.map((category) => (
						<SkillCategoryCard key={category.title} category={category} />
					))}
				</div>
			</div> */}
		</aside>
	);
}

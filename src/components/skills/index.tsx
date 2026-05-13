import { FaCheckCircle } from 'react-icons/fa';
import { skillCategories } from './data';
import SkillCategoryCard from './skillCategory.fragment';

const SkillsSection: React.FC = () => {
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
		</aside>
	);
};

export default SkillsSection;

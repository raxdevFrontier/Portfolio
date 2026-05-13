import React from 'react';
import { badgeVariantMap, type SkillCategory } from './model';
import SkillBadge from './skillBadge.fragment';

const SkillCategoryCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
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
};

export default SkillCategoryCard;

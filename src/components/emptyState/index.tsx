import { I18nContext } from '@/context/i18n/i18n.context';
import React, { useContext } from 'react';
import { FaCode } from 'react-icons/fa';

const EmptyProjects: React.FC = () => {
	const { t } = useContext(I18nContext);

	return (
		<section className="flex justify-center py-16">
			<div className="card w-full max-w-2xl border border-base-300 bg-base-100 shadow-md">
				<div className="card-body items-center text-center">
					<div className="mb-4 rounded-full bg-primary/10 p-5 text-primary">
						<FaCode className="text-3xl" />
					</div>

					<h3 className="text-2xl font-bold">{t.projects.emptyTitle}</h3>

					<p className="max-w-md text-sm leading-relaxed opacity-70">
						{t.projects.emptyDescription}
					</p>
				</div>
			</div>
		</section>
	);
};

export default EmptyProjects;

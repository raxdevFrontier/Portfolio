import React from 'react';
import { SiReact } from 'react-icons/si';
import SectionWrapper from '@/components/sectionWrapper';
import SkillsSection from '@/components/skills';

const About: React.FC = () => {
	return (
		<SectionWrapper showDivider id="about">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Sobre mi</h2>
			<p className="text-justify mt-4 leading-relaxed max-w-prose sm:max-w-full">
				Soy desarrollador frontend enfocado en construir interfaces claras, rápidas y
				mantenibles. Me interesa especialmente la intersección entre desarrollo y diseño,
				donde una buena decisión técnica mejora directamente la experiencia del usuario.
				Trabajo con React, TypeScript y herramientas modernas, priorizando código limpio,
				componentes reutilizables y una buena estructura desde el inicio del proyecto.
			</p>
			<p className="text-justify mt-4 leading-relaxed max-w-prose sm:max-w-full">
				Disfruto convirtiendo ideas en interfaces funcionales y bien pensadas. Me gusta
				trabajar en productos donde el detalle importa y cada interacción tiene un
				propósito. Más allá del código, me interesa entender el problema real y aportar
				soluciones simples, claras y escalables.
			</p>
			<aside className="flex justify-center place-items-center gap-8 mt-8">
				<span className="badge badge-xl badge-secondary">
					<SiReact /> REACT
				</span>
				<span className="stats shadow" style={{ overflowX: 'visible' }}>
					<span className="stat">
						<span className="stat-title">Experiencia</span>
						<span className="stat-value">3+ años</span>
					</span>
				</span>
			</aside>

			<SkillsSection />
		</SectionWrapper>
	);
};

export default About;

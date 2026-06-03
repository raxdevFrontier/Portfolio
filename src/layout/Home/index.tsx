import React, { lazy, Suspense } from 'react';
import Hero from '@/sections/hero';
// import Projects from '@/sections/myProjects';
// import About from '@/sections/about';
// import Contact from '@/sections/contact';

const ProjectsSection = lazy(() => import('@/sections/myProjects'));
const AboutSection = lazy(() => import('@/sections/about'));
const ContactSection = lazy(() => import('@/sections/contact'));
export const Home: React.FC = () => {
	return (
		<main className="bg-base-300 flex flex-col items-center mt-[4rem]">
			<Hero />

			<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
				<section className="w-full">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<ProjectsSection />
						<AboutSection />
						<ContactSection />
					</div>
				</section>
			</Suspense>
		</main>
	);
};

export default Home;

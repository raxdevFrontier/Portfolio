import React from 'react';
import Hero from '@/sections/hero';
import Projects from '@/sections/myProjects';
import About from '@/sections/about';
import Contact from '@/sections/contact';

export const Home: React.FC = () => {
	return (
		<main className="bg-base-300 flex flex-col items-center">
			<Hero />
			<section className="w-full">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<Projects projectsList={undefined} />
					<About />
					<Contact />
				</div>
			</section>
		</main>
	);
};

export default Home;

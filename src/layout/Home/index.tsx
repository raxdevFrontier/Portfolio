import React from 'react';
import Hero from '@/sections/hero';
import Projects from '@/sections/myProjects';
// import About from '@/components/sections/About'
// import Skills from '@/components/sections/Skills'
// import Extra from '@/components/sections/Extra'
// import Contact from '@/components/sections/Contact'

export const Home: React.FC = () => {
	return (
		<main>
			<Hero />
			<Projects />
			{/* <About /> */}
			{/* <Skills /> */}
			{/* <Extra /> */}
			{/* <Contact /> */}
		</main>
	);
};

export default Home;

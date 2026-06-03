import { useState, useEffect } from 'react';

function useMatchMedia() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Ajusta el breakpoint

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth > 768);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isDesktop;
}

export default useMatchMedia;

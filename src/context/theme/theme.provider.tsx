import { useEffect, useState } from 'react';
import { type Theme, ThemeContext } from './theme.context';

const LIGHT_THEME = 'autumn';
const DARK_THEME = 'forest';
// const DARK_THEME = 'synthwave';

function getInitialTheme(): Theme {
	const storedTheme = localStorage.getItem('theme');

	if (storedTheme === 'light' || storedTheme === 'dark') {
		return storedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			theme === 'dark' ? DARK_THEME : LIGHT_THEME,
		);

		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				isDark: theme === 'dark',
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

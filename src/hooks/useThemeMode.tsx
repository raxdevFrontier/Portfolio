import { useContext } from 'react';
import { ThemeContext } from '@/context/theme/theme.context';

function useThemeMode() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeMode must be used within ThemeProvider');
	}

	return context;
}

export default useThemeMode;

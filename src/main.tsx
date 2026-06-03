import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ThemeProvider from './context/theme/theme.provider';
import I18nProvider from './context/i18n/i18n.provider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<I18nProvider>
				<App />
			</I18nProvider>
		</ThemeProvider>
	</StrictMode>,
);

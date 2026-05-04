import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@sections': path.resolve(__dirname, 'src/sections'),
			'@layout': path.resolve(__dirname, 'src/layout'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
		},
	},
})

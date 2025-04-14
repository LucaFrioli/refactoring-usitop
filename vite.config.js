import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	root: 'frontend',
	base: '/refactoring-usitop/', // caso de utilizar com o git hub pages, se for colocaar em u servidor próprio trocar por /
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		assetsDir: 'assets',
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
			},
		},
	},
});

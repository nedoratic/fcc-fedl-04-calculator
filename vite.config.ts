import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/fcc-fedl-04-calculator/',
	plugins: [react()],
});

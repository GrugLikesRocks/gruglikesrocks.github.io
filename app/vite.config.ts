import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// The staged review build (--mode staged, written to ../next) must stay out of search results.
const noindexWhenStaged = (mode: string): Plugin => ({
  name: 'noindex-when-staged',
  transformIndexHtml: html =>
    mode === 'staged' ? html.replace('<meta name="theme-color"', '<meta name="robots" content="noindex">\n    <meta name="theme-color"') : html,
});

// Relative base so the same build works at the site root and under /next/.
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react(), noindexWhenStaged(mode)],
  build: { assetsDir: 'assets', sourcemap: false },
}));

/* * * * * * * * * * * * * * * * * * * * * * * * *
*  updated: November 10, 2024
*  update: add jsdom
* * * * * * * * * * * * * * * * * * * * * * * * */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});

/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
*/
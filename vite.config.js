/* * * * * * * * * * * * * * * * * * * * * * * * *
*  updated: October 30, 2024
*  update: add svg support by adding svgr plugin
* * * * * * * * * * * * * * * * * * * * * * * * */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
import forms from '@tailwindcss/forms';
import { join } from 'path';
// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    // 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    forms,
    skeleton({
      themes: { preset: [ "modern" ] }
    })
  ],
} satisfies Config;

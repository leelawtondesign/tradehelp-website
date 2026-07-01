// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';
// import node from '@astrojs/node';

export default defineConfig({
	site: 'https://support.tradehelp.co.uk/',
	output: 'server',
	adapter: netlify(),
	// adapter: node({ mode: 'standalone' }),
	integrations: [
		mdx(),
		sitemap(),
		sanity({
			projectId: 'h7n391jq',
			dataset: 'production',
			useCdn: false,
			stega: {
				studioUrl: 'https://tradehelp-website.sanity.studio',
			},
		}),
		icon(),
	],
	image: {
		domains: ['cdn.sanity.io'],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});

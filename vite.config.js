import { svelte } from '@sveltejs/vite-plugin-svelte';
import windiCss from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import { minify } from 'html-minifier';

const minifyHtml = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return { 
    server: {				
      host: '0.0.0.0'
    },
    optimizeDeps: {
      exclude: ['@roxi/routify'],
    },
    plugins: [windiCss(), svelte(), isProduction && minifyHtml()],
    build: {
      minify: isProduction,
    },
  };
});

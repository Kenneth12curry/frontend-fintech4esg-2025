import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'
import posts from './src/posts.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blogPostRoutes = posts.map((post: any) => `/blog/${post.slug}`);

const staticRoutes = [
  '/',
  '/contact',
  '/privacy',
  '/terms',
  '/security',
  '/aboutus',
  '/readycash',
  '/readyscore',
  '/readypay',
  '/insights'
];


export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://fintech4esg.com',
      dynamicRoutes: [...staticRoutes, ...blogPostRoutes],
      // outDir: 'dist', // Par défaut, le sitemap est généré dans le dossier de build
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

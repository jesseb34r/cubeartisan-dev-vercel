import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import solid from 'solid-start/vite';
import vercel from 'solid-start-vercel';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    solid({
      adapter: vercel(),
    }),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@cubeartisan/cubeartisan': path.resolve(__dirname, './src/'),
    },
  },
  ssr: {
    noExternal: ['@kobalte/core'],
  },
  envDir: __dirname,
});

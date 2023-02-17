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
  ssr: {
    noExternal: ['@kobalte/core'],
  },
  envDir: __dirname,
});

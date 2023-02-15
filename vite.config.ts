import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import solid from 'solid-start/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [solid(), vanillaExtractPlugin()],
  ssr: {
    noExternal: ['@kobalte/core'],
  },
  envDir: __dirname,
});

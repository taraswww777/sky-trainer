import * as path from 'path';
import {defineConfig, splitVendorChunkPlugin} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      '@sass': path.resolve(__dirname, './resources/sass'),
      '@src': path.resolve(__dirname, './resources/js/fe-sky-app')
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    vue(),
    laravel({
      input: ['resources/sass/app.scss', 'resources/js/app.js'],
      refresh: true
    })
  ]
});

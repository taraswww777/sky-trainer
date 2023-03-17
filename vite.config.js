import * as path from 'path';
import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString()
              .split('node_modules/')[1].split('/')[0].toString();
          }
          return id;
        }
      }
    }
  },
  resolve: {
    alias: {
      '@sass': path.resolve(__dirname, './resources/sass'),
      '@src': path.resolve(__dirname, './resources/js/fe-sky-app')
    }
  },
  plugins: [
    vue(),
    laravel({
      input: ['resources/sass/app.scss', 'resources/js/app.js'],
      refresh: true
    })
  ]
});

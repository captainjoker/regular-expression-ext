import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
// import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
   /*  rollupOptions: {
      input: {
        popup: resolve(__dirname, './src/popup/index.html'),
        // options: resolve(__dirname, 'options.html')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    }
 */
  },
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    /* viteStaticCopy({
      targets: [
        {
          src: 'src/background.js',
          dest: ''
        },
        {
          src: 'src/content.js',
          dest: ''
        },
        {
          src: 'src/manifest.json',
          dest: ''
        }
      ]
    }) */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {}
  }
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      public: '/public',
      src: '/src',
      components: '/src/components',
      views: '/src/views',
      router: '/src/router',
      assets: '/src/assets',
      types: '/src/types',
      composable: '/src/composable',
      helpers: '/src/helpers',
    },
  },
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
          name: '聊天记录管理系统',
    themeColor: '#409eff',
      background_color: '#409eff',
    }
  })],
  server: {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5030',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
      '/image': {
        target: 'http://127.0.0.1:5030',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/image/, '/image'),
      },
      '/video': {
        target: 'http://127.0.0.1:5030',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/video/, '/video'),
      },
      '/voice': {
        target: 'http://127.0.0.1:5030',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/voice/, '/voice'),
      },
      '/file': {
        target: 'http://127.0.0.1:5030',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/file/, '/file'),
      },
      '/data': {
        target: 'http://127.0.0.1:5030',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/data/, '/data'),
      },
    },
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    minify: process.env.NODE_ENV === 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            // 可根据实际依赖调整
            'vue',
            'vue-router',
            'vuex',
          ],
          'element-plus': ['element-plus'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`
      }
    }
  },
});

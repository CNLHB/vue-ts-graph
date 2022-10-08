import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// import requireTransform from 'vite-plugin-require-transform';
import { log } from 'console';
// log(requireTransform.default);
// 配置element-plus
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
console.log(path.resolve(__dirname, './src'));
export default defineConfig({
  plugins: [
    vue(),
    // requireTransform.default({
    //   fileRegex: /.js$|.vue$/,
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@commits': path.resolve(__dirname, 'src/store/const'),
    },
  },
  server: {
    open: '/test', // 浏览器自动打开
  },
  css: {
    preprocessorOptions: {
      // less: {
      //   javascriptEnabled: true,
      //   additionalData: `@import "${path.resolve(
      //     __dirname,
      //     'src/assets/styles/base.less'
      //   )}";`,
      // },
      scss: {
        // additionalData: '@import "src/assets/styles/var.scss";'
      },
    },
  },
});

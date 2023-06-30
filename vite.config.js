import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      assets: path.resolve(__dirname, './src', 'assets'),
      animations: path.resolve(__dirname, './src', 'animations'),
      shared: path.resolve(__dirname, './src', 'shared'),
      pages: path.resolve(__dirname, './src', 'pages'),
      hooks: path.resolve(__dirname, './src', 'hooks'),
      utils: path.resolve(__dirname, './src', 'utils'),
      styles: path.resolve(__dirname, './src', 'styles'),
      '@sc': path.resolve(__dirname, './src', 'styles', 'components'),
      '@sp': path.resolve(__dirname, './src', 'styles', 'pages'),
      components: path.resolve(__dirname, './src', 'components'),
      src: path.resolve(__dirname, './src'),
      cx: path.resolve(__dirname, './src', 'utils', 'classnames.js'),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
})

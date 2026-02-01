import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/test-utils': 'preact/compat/test-utils',
      'react/jsx-runtime': 'preact/compat/jsx-runtime',
 
    },
  },

})

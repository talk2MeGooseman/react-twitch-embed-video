import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'react-twitch-embed-video',
      // the proper extensions will be added
      fileName: 'react-twitch-embed-video',
    },
    rollupOptions: {
      external: ['react', 'reactDOM'],
      output: {
        globals: {
          react: "react",
          'react-dom': 'reactDOM',
        }
      },
    },
  },
})

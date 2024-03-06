/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/index.tsx'),
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

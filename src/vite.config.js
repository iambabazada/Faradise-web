// vite.config.js
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        svgr()
    ],
    resolve: {
        alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }]
    },
})

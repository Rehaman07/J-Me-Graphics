import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'r3f-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'framer-gsap': ['framer-motion', 'gsap', '@gsap/react'],
          'lenis-scroll': ['@studio-freight/lenis'],
          'icons-utils': ['lucide-react', 'canvas-confetti'],
        }
      }
    }
  }
})

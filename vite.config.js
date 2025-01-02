import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        /* additionalData: `@import "./src/styles/variables.scss";` */
        /* EXAMPLE BUT NOT NEEDED KINDA GOES AGAINST @USE AND @FORWARD PURPOSE */
      }
    }
  }
})



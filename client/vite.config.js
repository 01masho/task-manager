import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://reimagined-succotash-4jrxwgwqp5xqf6rw-5555.app.github.dev'
    }
  },
  plugins: [react()],
})

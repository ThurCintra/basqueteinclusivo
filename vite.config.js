import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuração do Vite — bundler e servidor de desenvolvimento do projeto.
// O plugin @vitejs/plugin-react habilita suporte ao JSX e ao Fast Refresh (HMR) durante o desenvolvimento.
// Documentação: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

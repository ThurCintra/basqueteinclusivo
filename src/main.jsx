// Ponto de entrada da aplicação React.
// Monta o componente raiz <App /> no elemento HTML com id="root" definido em index.html.
// O StrictMode ativa verificações adicionais em desenvolvimento para identificar práticas obsoletas.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Estilos globais do projeto

// Renderiza a aplicação inteira dentro do elemento raiz do DOM.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

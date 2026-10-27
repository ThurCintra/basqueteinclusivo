import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { AccessibilityProvider } from './context/AccessibilityContext'
import Acessibilidade from './pages/Acessibilidade'
import Fundamentos from './pages/Fundamentos'
import Historia from './pages/Historia'
import Home from './pages/Home'
import Jogadores from './pages/Jogadores'
import Regras from './pages/Regras'

// Componente principal da aplicação.
// Define as rotas do site e garante que todas as páginas compartilhem o mesmo layout e o contexto de acessibilidade.
export default function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/regras" element={<Regras />} />
            <Route path="/fundamentos" element={<Fundamentos />} />
            <Route path="/jogadores" element={<Jogadores />} />
            <Route path="/acessibilidade" element={<Acessibilidade />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  )
}

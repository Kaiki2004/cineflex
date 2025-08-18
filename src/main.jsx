import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/reset.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Route path="/" element={<App />} />
      <Route path="/sessoes/:idFilme" element={<Sessoes />} />
      <Route path="/assentos/:idSessao" element={<Assentos />} />
      <Route path="/assentos/:idSessao" element={<Assentos />} />
      <Route path="/assentos/:idSessao" element={<Assentos />} />
      <Route path="/sucesso" element={<Sucesso />} />
    </StrictMode>,
  </BrowserRouter>
)

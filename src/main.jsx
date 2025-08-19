import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './style/reset.css';
import './style/style.css';
import App from './App.jsx';
import Sessoes from './components/Sessoes.jsx';
import Assentos from './components/Assentos.jsx';
import Sucesso from './components/Sucesso.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sessoes/:idFilme" element={<Sessoes />} />
        <Route path="/assentos/:idSessao" element={<Assentos />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

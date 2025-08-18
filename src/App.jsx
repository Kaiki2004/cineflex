import { useState, useEffect } from 'react';
import getFilme from './server/Apis/getFilme.js'; 
import Filme from './components/Filme'; 
import Logo from './components/Head.jsx'

function App() {
  const [listaFilmes, setListaFilmes] = useState([]);

  useEffect(() => {
    function buscaFilme() {
      const filmes =  getFilme(); 
      setListaFilmes(filmes);
    }

    buscaFilme();
  }, []);

  return (
    <div>
      <Logo />
      {listaFilmes.map((filme, index) => (
        <Filme key={index} filme={filme} />
      ))}
    </div>
  );
}

export default App;

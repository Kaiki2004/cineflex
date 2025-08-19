import { useState, useEffect } from 'react';
import Filme from './components/Filmes.jsx';
import Logo from './components/Head.jsx'
import axios from 'axios';
import styled from 'styled-components';

export default function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
      .then((res) => {
        /*console.log(res.data);*/
        setLista(res.data);
      })
      .catch((error) => {
        console.log(error?.response?.data);
      });
  }, []);

  return (
    <div>
      <Logo />
      <Titulo> EM CARTAZ </Titulo>
      {lista.map((filme, index) => (
        <Filme key={index} filme={filme} />
      ))}
    </div>
  );
}


const Titulo = styled.h1`
    font-family: 'Sarala';
    font-size: 48px;
    color: #FFFFFF;
    weight: 400;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
`


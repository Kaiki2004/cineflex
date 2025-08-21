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
      <Title> EM CARTAZ </Title>
      {lista.map((filme, index) => (
        <Filme key={index} filme={filme} />
      ))}
    </div>
  );
}


const Title = styled.h1`
  background: #1f2126;  
  font-size: 50px;
  font-weight: 800;
  text-align: center;
  margin: 10px 0 8px;
`;


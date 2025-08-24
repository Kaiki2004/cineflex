import { useState, useEffect } from "react";
import Logo from "./Head.jsx";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seats from "./Listassentos.jsx";

export default function Assentos() {
  const [assentos, setAssentos] = useState([]);
  const [filme, setFilme] = useState(null);
  const [sessao, setSessao] = useState(null); // <<< NOVO
  const { idSessao } = useParams();

  useEffect(() => {
    if (!idSessao) return;
    axios
      .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then((res) => {
        setAssentos(res.data.seats || []);
        setFilme(res.data.movie || null);
        setSessao({
          id: Number(idSessao),
          date: res.data.day?.date,
          weekday: res.data.day?.weekday,
          time: res.data.name, 
        }); 
      })
      .catch((error) => {
        console.log(error?.response?.data);
      });
  }, [idSessao]);

  return (
    <div>
      <Logo />
      <Conteiner>
        {filme && sessao && (
          <Seats
            key={idSessao}
            assentos={assentos}
            filme={filme}     
            sessao={sessao}   
          />
        )}
      </Conteiner>
    </div>
  );
}

const Conteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 22px 16px 40px;
  gap: 16px;
  min-height: 100vh;
`;

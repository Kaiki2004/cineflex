import { useState, useEffect } from "react";
import Logo from "./Head.jsx";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seats from "./Listassentos.jsx";

export default function Assentos() {
  const [assentos, setAssentos] = useState([]);
  const [filme, setFilme] = useState(null);
  const [sessao, setSessao] = useState(null); 
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
        {filme && sessao && (
          <Seats
            key={idSessao}
            assentos={assentos}
            filme={filme}     
            sessao={sessao}   
          />
        )}
    </div>
  );
}

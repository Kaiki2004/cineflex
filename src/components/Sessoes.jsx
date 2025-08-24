import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sessoes from "./Listasessoes";
import axios from "axios";
import styled from "styled-components";
import Logo from "./Head.jsx";

export default function SessoesFilme() {
    const { idFilme } = useParams();
    const [lista, setLista] = useState([]);
    const [movie, setMovie] = useState(null); // <<< NOVO

    useEffect(() => {
        if (!idFilme) return;
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => {
                // res.data tem: { title, posterURL, days: [...] }
                setLista(res.data.days || []);
                setMovie({
                    id: Number(idFilme),
                    title: res.data.title,
                    posterURL: res.data.posterURL,
                }); // <<< NOVO
            })
            .catch((error) => {
                console.log(error?.response?.data);
            });
    }, [idFilme]);

    return (
        <div>
            <Logo />
            <Titulo>Selecione o horário</Titulo>
            <Conteiner>
                {movie && lista.map((dia) => (
                    <Sessoes key={dia.date} sessoes={dia} movie={movie} />
                ))}
            </Conteiner>
        </div>
    );
}

const Titulo = styled.h1`
  font-family: 'Sarala';
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 400; /* <<< 'weight' -> 'font-weight' */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

const Conteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

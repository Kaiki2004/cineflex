import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sessoes from "./Listasessoes";
import axios from "axios";
import styled from "styled-components";
import Logo from "./Head.jsx";
import { AiOutlineLeft } from "react-icons/ai";

export default function SessoesFilme() {
    const { idFilme } = useParams();
    const [lista, setLista] = useState([]);
    const [movie, setMovie] = useState(null); 

    useEffect(() => {
        if (!idFilme) return;
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => {
                setLista(res.data.days || []);
                setMovie({
                    id: Number(idFilme),
                    title: res.data.title,
                    posterURL: res.data.posterURL,
                }); 
            })
            .catch((error) => {
                console.log(error?.response?.data);
            });
    }, [idFilme]);

    return (
        <div>
            <Logo />
            <ContainerTop>
                <Voltar onClick={() => window.history.back()} >
                    <AiOutlineLeft style={{ width: "10px", height: "10px", marginRight: "8px" }} />
                    Voltar
                </Voltar>
                <Titulo>Selecione o horário</Titulo>
            </ContainerTop>
            <Conteiner>
                {movie && lista.map((dia) => (
                    <Sessoes key={dia.date} sessoes={dia} movie={movie} />
                ))}
            </Conteiner>
        </div>
    );
}

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 31%;
  margin: 20px;
`;

const Voltar = styled.span`
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #fff;
  }
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px;
`;

const Titulo = styled.h1`
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 400;
  margin: 0;
`;

const Conteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

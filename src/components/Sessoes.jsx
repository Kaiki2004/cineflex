import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sessoes from "./Listasessoes";
import axios from "axios";
import styled from "styled-components";
import Logo from "./Head.jsx";

export default function SessoesFilme() {
    const { idFilme } = useParams();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        if (!idFilme) return;
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => {
                /*console.log(res.data);*/
                setLista(res.data.days);
            })
            .catch((error) => {
                console.log(error?.response?.data);
            });
    }, [idFilme]);

    return (
        <div>
            <Logo/>
            <Titulo> Selecione o horário</Titulo>
            {lista.map((hora, index) => (
                <Sessoes key={index} sessoes={hora} />
            ))}
        </div>
    );
}


const Titulo = styled.h1`
    font-family: 'Sarala';
    font-size: 32px;
    color: #FFFFFF;
    weight: 400;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
`

const Page = styled.main`
  background: #1f2126;        
  color: #e9eaee;
  display: inline-block;
  align-items: center;
  padding: 22px 16px 40px;
  gap: 16px;
`;

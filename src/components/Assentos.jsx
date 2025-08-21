import { useState, useEffect } from "react"
import Logo from "./Head.jsx"
import styled from "styled-components"
import { useParams } from "react-router-dom";
import axios from "axios";
import Seats from "./Listassentos.jsx"

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    const { idSessao } = useParams();

    useEffect(() => {
        if (!idSessao) return;
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => {
                console.log(res.data);
                setAssentos(res.data.seats); // corrigido
            })
            .catch((error) => {
                console.log(error?.response?.data);
            });
    }, [idSessao]);

    return (
        <div>
            <Logo />
            <Seats key={idSessao} assentos={assentos} />
        </div>
    )
}

const Titulo = styled.h1`
    font-family: 'Sarala';
    font-size: 32px;
    color: #FFFFFF;
    font-weight: 400;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
`

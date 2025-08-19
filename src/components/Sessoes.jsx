import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sessoes from "./Listasessoes";
import axios from "axios";

export default function SessoesFilme() {
    const { idFilme } = useParams();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        if (!idFilme) return;
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => {
                console.log(res.data);
                setLista(res.data.days);
            })
            .catch((error) => {
                console.log(error?.response?.data);
            });
    }, [idFilme]);

    return (
        <div>
            {lista.map((hora, index) => (
                <Sessoes key={index} sessoes={hora} />
            ))}
        </div>
    );
}

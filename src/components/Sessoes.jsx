import { useState, useEffect } from "react";
import Sessoes from './Listasessoes'

export default function Sessoes() {
    useEffect(() => {
        const lista = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${ID_DO_FILME}/showtimes`).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error.response.data);
        });
    })
    return (
        <div>
            {lista.map((hora, index) => (
                <Sessoes key={index} sessoes={hora} />
            ))}
        </div>
    );
}
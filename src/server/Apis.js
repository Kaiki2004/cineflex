import axios from "axios";

export default function getFilme() {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies').then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error.response.data);
    });
}

function getSessions() {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${ID_DO_FILME}/showtimes`).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error.response.data);
    });
}

function getSits() {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${ID_DA_SESSAO}/seats`).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error.response.data);
    });
}

function reservarSits() {
    axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`).then(res => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error.response.data);
    })
}
import { useState } from "react";
import { SeatsContainer, Seat, FormContainer as BaseForm, Button } from "../style/style.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Listassentos({ assentos, filme, sessao }) { // <<< recebe filme e sessao
  const [selecionados, setSelecionados] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  function escolherAssento(seat) {
    if (!seat.isAvailable) return alert("Assento indisponível!");
    setSelecionados((prev) =>
      prev.includes(seat.id) ? prev.filter((id) => id !== seat.id) : [...prev, seat.id]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selecionados.length) return alert("Escolha ao menos um assento.");
    if (!nome.trim() || !cpf.trim()) return alert("Preencha nome e CPF.");

    const payload = { ids: selecionados, name: nome.trim(), cpf: cpf.trim() };

    const nomesAssentos = assentos
      .filter((a) => selecionados.includes(a.id))
      .map((a) => a.name);

    setEnviando(true);

    axios
      .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", payload)
      .then(() => {
        navigate("/sucesso", {
          state: {
            movie: {
              id: filme?.id,
              title: filme?.title,
            },
            session: {
              id: sessao?.id,
              date: sessao?.date,
              weekday: sessao?.weekday,
              time: sessao?.time,
            },
            seats: nomesAssentos,
            buyer: { name: payload.name, cpf: payload.cpf },
          },
        });
      })
      .catch((error) => {
        const msg =
          error?.response?.data?.message ||
          error?.response?.data ||
          "Não foi possível reservar. Tente novamente.";
        alert(msg);
      })
      .finally(() => setEnviando(false));
  }

  const formValido = selecionados.length > 0 && nome.trim() && cpf.trim();

  return (
    <Page>
      <Title>Selecione o(s) assento(s)</Title>

      <SeatsWrapper>
        <SeatsContainer>
          {assentos.map((assento) => (
            <Seat
              key={assento.id}
              $available={assento.isAvailable}
              $selected={selecionados.includes(assento.id)}
              aria-disabled={!assento.isAvailable}
              onClick={() => escolherAssento(assento)}
            >
              {assento.name}
            </Seat>
          ))}
        </SeatsContainer>
      </SeatsWrapper>

      <Divider />

      <Form as="form" onSubmit={handleSubmit}>
        <label>Nome do comprador(a)</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>CPF do comprador(a)</label>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <Button type="submit" disabled={!formValido || enviando}>
          {enviando ? "Reservando..." : "Reservar assento(s)"}
        </Button>
      </Form>
    </Page>
  );
}

/* ===== CSS permanece igual ===== */

const Page = styled.main`
  min-height: calc(100vh - 70px);
  width: 100%;
  background: #1f2126;
  color: #e9eaee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 16px 40px;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  margin: 6px 0 8px;
`;

const SeatsWrapper = styled.section`
  width: 100%;
  max-width: 420px;
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 420px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 14px 0 8px;
`;

const Form = styled(BaseForm)`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-size: 14px;
    color: #d8dbe3;
  }

  input {
    width: 100%;
    background: #ffffff;
    color: #1f2126;
    border: none;
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 14px;
    outline: none;
    box-shadow: 0 1px 0 rgba(0,0,0,.18);

    &::placeholder {
      color: #9aa1ad;
    }
  }
`;

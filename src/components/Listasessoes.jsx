import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Listasessoes({ sessoes, movie }) { 
  return (
    <Page>
      <SessaoContainer>
        <Dia>
          {sessoes.weekday}, {sessoes.date}
        </Dia>
        <HorarioContainer>
          {sessoes.showtimes.map((horario) => (
            <Link
              key={horario.id}
              to={`/assentos/${horario.id}`}
              state={{
                movie: { id: movie.id, title: movie.title }, 
                session: {
                  id: horario.id,
                  date: sessoes.date,
                  weekday: sessoes.weekday,
                  time: horario.name, 
                },
              }}
            >
              <BotaoHorario>{horario.name}</BotaoHorario>
            </Link>
          ))}
        </HorarioContainer>
      </SessaoContainer>
    </Page>
  );
}

const Page = styled.main`
  background: #1f2126;
  color: #e9eaee;
  display: inline-block;
  gap: 16px;
`;

const SessaoContainer = styled.div`
  background-color: #2c2f38;
  color: #fff;
  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;
  width: 300px;

`;

const Dia = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const HorarioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border-top: 1px solid #444;
  padding-top: 15px;
  justify-content: center;
  align-items: center;
`;

const BotaoHorario = styled.button`
  background-color: transparent;
  border: 2px solid #e8833a;
  color: #e8833a;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e8833a;
    color: #fff;
    transition: 0.3s;
  }
`;

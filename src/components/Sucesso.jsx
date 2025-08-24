import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso() {
  const { state } = useLocation() || {};
  if (!state) return <p>Nenhum pedido encontrado.</p>;

  const { movie, session, seats, buyer } = state;

  return (
    <Page>
      <Title>Pedido Finalizado!</Title>

      <Card>
        <Section>
          <SectionTitle>Filme e sessão</SectionTitle>
          <InfoLine>{movie?.title}</InfoLine>
          <InfoLine>
            {session?.weekday} — {session?.date} às {session?.time}
          </InfoLine>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>Ingressos</SectionTitle>
          {seats?.length ? (
            <List>
              {seats.map((a) => (
                <li key={a}>Assento {a}</li>
              ))}
            </List>
          ) : (
            <Muted>Nenhum assento encontrado.</Muted>
          )}
        </Section>

        <Divider />

        <Section>
          <SectionTitle>Comprador</SectionTitle>
          <InfoLine>
            <strong>Nome:</strong> <span>{buyer?.name || "—"}</span>
          </InfoLine>
          <InfoLine>
            <strong>CPF:</strong> <span>{buyer?.cpf || "—"}</span>
          </InfoLine>
        </Section>
      </Card>

      <PrimaryButton to="/">Voltar para Home</PrimaryButton>
    </Page>
  );
}

/* ===== CSS (sem duplicações) ===== */

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
  margin-top: 6px;
  font-size: 22px;
  font-weight: 800;
  color: #50fa7b; /* verde de sucesso */
  text-align: center;
`;

const Card = styled.section`
  width: 100%;
  max-width: 420px;
  background: #2c2f38;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
`;

const Section = styled.div`
  margin-bottom: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e8833a; /* laranja salmão do app */
  margin: 6px 0 10px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  margin: 8px 0 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;

  li {
    padding: 6px 0;
    border-radius: 6px;
    font-size: 16px;
    color: #d2d4dc;
  }
`;

const InfoLine = styled.p`
  margin: 4px 0;
  font-size: 16px;

  strong {
    font-weight: 700;
    margin-right: 6px;
    color: #e9eaee;
  }

  span {
    color: #d2d4dc;
  }
`;

const Muted = styled.p`
  color: #aeb2bd;
  font-size: 14px;
`;

const PrimaryButton = styled(Link)`
  width: 100%;
  max-width: 420px;
  display: inline-block;
  text-align: center;
  background: #e8833a;
  color: #1f2126;
  font-weight: 800;
  padding: 14px 16px;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 6px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    filter: brightness(0.97);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`;

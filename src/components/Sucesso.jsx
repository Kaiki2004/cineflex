import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso() {
  const [searchParams] = useSearchParams();
  const nome = searchParams.get("nome") || "";
  const cpf = searchParams.get("cpf") || "";
  const assentosStr = searchParams.get("assentos") || "";
  const assentos = assentosStr ? assentosStr.split(",") : [];

  return (
    <Page>
      <TitleLink>Pedido finalizado</TitleLink>

      <Card>
        <Section>
          <SectionTitle>Ingressos</SectionTitle>
          {assentos.length === 0 ? (
            <Muted>Nenhum assento encontrado.</Muted>
          ) : (
            <List>
              {assentos.map((a, i) => (
                <li key={i}>Assento {a}</li>
              ))}
            </List>
          )}
        </Section>

        <Divider />

        <Section>
          <SectionTitle>Comprador(a)</SectionTitle>
          <InfoLine>
            <strong>Nome:</strong> <span>{nome || "—"}</span>
          </InfoLine>
          <InfoLine>
            <strong>CPF:</strong> <span>{cpf || "—"}</span>
          </InfoLine>
        </Section>
      </Card>

      <PrimaryButton to="/">Voltar para tela inicial</PrimaryButton>
    </Page>
  );
}

const Page = styled.main`
  min-height: calc(100vh - 70px);
  background: #1f2126;
  color: #e9eaee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 16px 40px;
`;

const TitleLink = styled.h1`
  margin-top: 6px;
  font-size: 18px;
  font-weight: 700;
  color: #9DB899; 
  &:hover {
    opacity: 0.9;
  }
`;

const Card = styled.section`
  width: 100%;
  max-width: 420px;
  background: #2b2f36;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
`;

const Section = styled.div`
  margin-bottom: 6px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e88373; /* accent salmão do app */
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
  background: #e88373;
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

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filme({ filme }) {
  return (
    <Page>
    <Linking to={`/sessoes/${filme.id}`}>
      <Poster src={filme.posterURL} alt="Poster" />
    </Linking>
    </Page>
  );
}

const Page = styled.main`
  background: #1f2126;        
  color: #e9eaee;
  display: inline-block;
  align-items: center;
  padding: 22px 16px 40px;
  gap: 16px;
`;


const Linking = styled(Link)`
  text-decoration: none;
  margin: 10px;
`;

const Poster = styled.img`
  width: 200px;
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
`;


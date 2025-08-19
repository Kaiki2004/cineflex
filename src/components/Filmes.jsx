import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filme({ filme }) {
  return (
    <>
    <Linking to={`/sessoes/${filme.id}`}>
      <Poster src={filme.posterURL} alt="Poster" />
    </Linking>
    </>
  );
}

const Linking = styled(Link)`
  text-decoration: none;
  display: inline-block; 
  margin: 10px;
`;

const Poster = styled.img`
  width: 200px;
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
`;


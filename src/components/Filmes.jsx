import { Link, link } from "react-router-dom";
export default function Filme({ filme }) {
  return (
    <div>
      <Link to={`/sessoes/${filme.id}`}>

        <h3>{filme.titulo}</h3>
        <p>Ano: {filme.ano}</p>
        <img src={filme.img} alt="Poster" />
      </Link>
    </div>
  );
}
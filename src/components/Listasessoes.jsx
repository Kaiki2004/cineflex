import { Link, link } from "react-router-dom";
export default function Listasessoes({ sessoes }) {
  return (
    <div>
      <Link to={`/assentos/${sessoes.id}`}>

        <h3>{sessoes.titulo}</h3>
        <p>Ano: {sessoes.numero}</p>
      </Link>
    </div>
  );
}
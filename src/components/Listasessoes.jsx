import { Link } from "react-router-dom";
export default function Listasessoes({ sessoes }) {
  return (
    <div>
      <Link to={`/assentos/${sessoes.id}`}>

        <h3>Data {sessoes.releaseDate}</h3>
        <p>DIas {sessoes.days}</p>
      </Link>
    </div>
  );
}
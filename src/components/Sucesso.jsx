import { Link } from "react-router-dom";

export default function Sucesso(){
    return(
        <div>
            <h1>Compra efetuada com sucesso!</h1>
            <Link to="/">Voltar para home</Link>
        </div>
    )
}
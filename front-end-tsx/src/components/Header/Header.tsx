import { Link } from "react-router-dom";
import { StyledHeader } from "../Styles/StyledHeader";


export default function Header(){

    return(
        <StyledHeader>
            <h1><Link to={'/'}>Zeta</Link></h1>
            <Rotas />
            <div></div>
        </StyledHeader>
    )
}


function Rotas(){
    return(
        <div id="rotas">

            <div id="dropdown">
                <button>Sobre nós</button>
                <div id="dropdown-rotas">
                    <Link to={'/quem-somos'}>Quem somos</Link>
                    <Link to={'/missao-e-valores'}>Missão e Valores</Link>
                </div>
            </div>

            <Link to={'/solucoes'}>Nossas soluções</Link>
            <Link to={'/contato'}>Contato</Link>
        </div>
    )
}
import React from "react";
import { StyledModal } from "../../components/Styles/StyledModal";

type Valores = {
    nome: string;
    email: string;
    telefone: string
}

export default function Modal({valores, opmd, somd}:{valores: Valores, opmd: boolean, somd:React.Dispatch<React.SetStateAction<boolean>>}){


    const fecharModal = (e:React.FormEvent) => {
        // console.log(e.currentTarget.childNodes[0])
        
        if(e.currentTarget.id === 'modal')
            somd(status => !status)
    }

    return(
        <StyledModal id="modal" style={{display: opmd? 'block' : 'none'}} onClick={fecharModal}>
            {/* className={opmd? "mod modalo": "mod"} */}
            <div id="contentModal">
                <h3>Dados</h3>
                <p>Nome: {valores.nome}</p>
                <p>Email: {valores.email}</p>
                <p>Telefone: {valores.telefone}</p>
            </div>
        </StyledModal>
    )
}
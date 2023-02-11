import { useState } from "react";
import { StyledContato } from "../../components/Styles/StyledContato";

export default function Contato(){

    const [values, setValues] = useState({
        nome: '',
        email: '',
        telefone: ''
    })

    const changeValues = (e:React.FormEvent<HTMLInputElement>) => {
        setValues({...values, [e.currentTarget.id]: e.currentTarget.value})
        console.log(values)
    }

    const SubmitForm = (e:React.FormEvent) => {
        e.preventDefault()
        console.log('teste')
        console.log(values)
    }

    return(
        <StyledContato>
            <form action="" method="post" autoComplete="off" onSubmit={SubmitForm}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" onChange={changeValues}/>
                    <p>{'erro'}</p>
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" onChange={changeValues}/>
                    <p>{'erro'}</p>
                </div>
                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" name="telefone" id="telefone" onChange={e => {formatTel(e); changeValues(e)}}/>
                    <p>{'erro'}</p>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </StyledContato>
    )
}

const formatTel = (e:React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    
    let q = e.currentTarget.value.replace(/\D/g,'')
    
    switch (true){
        case q.length <= 2:
            e.currentTarget.value = '(' + q.substring(0,2)
            break
        case q.length < 8:
            e.currentTarget.value = '(' + q.substring(0,2) + ')' + q.substring(2,7)
            break
        default:
            e.currentTarget.value = '(' + q.substring(0,2) + ')' + q.substring(2,7) + '-' + q.substring(7,11)
            break
    }
    //'(' + q.substring(0,2) + ')' + q.substring(2,7) + '-' + q.substring(7,11)
    //     q.substring(0,2) --> deve mudar de acordo com o país/estado, a msm coisa os outros dois
}
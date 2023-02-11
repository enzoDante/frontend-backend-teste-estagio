import { useState } from "react";
import { StyledContato } from "../../components/Styles/StyledContato";

export default function Contato(){

    const [values, setValues] = useState({
        nome: '',
        email: '',
        telefone: ''
    })
    const [erroValidation, setErroValidation] = useState({
        nome: '',
        email: '',
        telefone: ''
    })

    const changeValues = (e:React.FormEvent<HTMLInputElement>) => {
        setValues({...values, [e.currentTarget.name]: e.currentTarget.value})
        let msg = ' '
        
        if(e.currentTarget.name === 'email' && e.currentTarget.value.indexOf('@') < 0)
            msg = 'Deve conter @'
        else
            if(e.currentTarget.name === 'telefone' && e.currentTarget.value.length < 14)
                msg = 'Complete seu número de telefone!'
            else
                if(e.currentTarget.value.length < 5)
                    msg = 'Preenche o campo corretamente!'

        setErroValidation({...erroValidation, [e.currentTarget.name]: msg})
        
        console.log(values)
    }

    const SubmitForm = (e:React.FormEvent) => {
        e.preventDefault()
        if(erroValidation.nome === ' ' && erroValidation.email === ' ' && erroValidation.telefone === ' '){
            console.log('enviado')
        }
        console.log('teste')
        console.log(values)
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
        changeValues(e)
        //'(' + q.substring(0,2) + ')' + q.substring(2,7) + '-' + q.substring(7,11)
        //     q.substring(0,2) --> deve mudar de acordo com o país/estado, a msm coisa os outros dois
    }

    return(
        <StyledContato>
            <form action="" method="post" autoComplete="off" onSubmit={SubmitForm}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" onChange={changeValues}/>
                    <p>{erroValidation.nome}</p>
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" onChange={changeValues}/>
                    <p>{erroValidation.email}</p>
                </div>
                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" name="telefone" id="telefone" onChange={formatTel}/>
                    {/* e => {formatTel(e); changeValues(e)} dentro de onChange */}
                    <p>{erroValidation.telefone}</p>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </StyledContato>
    )
}
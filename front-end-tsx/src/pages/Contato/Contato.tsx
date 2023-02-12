import { useState } from "react";
import { StyledContato } from "../../components/Styles/StyledContato";
import Modal from "./modal";

export default function Contato(){

    const [values, setValues] = useState({
        nome: '',
        email: '',
        telefone: ''
    })
    const [erroValidation, setErroValidation] = useState({
        nome: '',
        email: '',
        telefone: '',
        todos: ''
    })
    const [openModal, setOpenModal] = useState<boolean>(false)

    const changeValues = (e:React.FormEvent<HTMLInputElement>) => {
        setValues({...values, [e.currentTarget.name]: e.currentTarget.value})
        let msg = ' '
        
        if(e.currentTarget.name === 'email' && (e.currentTarget.value.indexOf('@') < 0 || e.currentTarget.value.indexOf('.') < 0))
            msg = 'Deve conter @ e .'
        else
            if(e.currentTarget.name === 'telefone' && e.currentTarget.value.length < 14)
                msg = 'Complete seu número de telefone!'
            else
                if(e.currentTarget.value.length < 5)
                    msg = 'Mínimo de 5 caracteres!'

        setErroValidation({...erroValidation, [e.currentTarget.name]: msg})
        
    }

    const SubmitForm = (e:React.FormEvent) => {
        e.preventDefault()
        let id = 'todos'
        if(erroValidation.nome === ' ' && erroValidation.email === ' ' && erroValidation.telefone === ' '){
            setOpenModal(status => !status)
            setErroValidation({...erroValidation, [id]: ' '})
        }else{
            setErroValidation({...erroValidation, [id]: 'Preenche os campos acima!'})
        }
    }

    const formatTel = (e:React.FormEvent<HTMLInputElement>) => {
        
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
        <>
            <Modal valores={values} opmd={openModal} somd={setOpenModal}/>
            <StyledContato>
                <form action="" method="post" autoComplete="off" onSubmit={SubmitForm}>
                    <h2>Cadastro</h2>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" id="nome" 
                            className={(erroValidation.nome !== " " && erroValidation.nome !== "")? "invalido" : undefined} 
                            onChange={changeValues}/>

                        <p>{erroValidation.nome}</p><br />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" id="email" 
                            onChange={changeValues} 
                            className={(erroValidation.email !== " " && erroValidation.email !== "")? "invalido" : undefined} 
                            placeholder='email@gmail.com' />

                        <p>{erroValidation.email}</p><br />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" name="telefone" id="telefone" 
                            onChange={formatTel} 
                            className={(erroValidation.telefone !== " " && erroValidation.telefone !== "")? "invalido" : undefined} 
                            placeholder='(xx) xxxxx-xxxx' />
                        {/* e => {formatTel(e); changeValues(e)} dentro de onChange */}

                        <p>{erroValidation.telefone}</p><br />
                    </div>
                    <button type="submit">Cadastrar</button>
                    <p>{erroValidation.todos}</p>
                </form>            
            </StyledContato>
        </>
    )
}
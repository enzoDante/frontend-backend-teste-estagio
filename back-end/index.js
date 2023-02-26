const express = require('express')
const cors = require("cors")
const bodyParse = require("body-parser")
const sb = require('./supabase')
const jwt = require("jsonwebtoken")

const app = express()

//config
    //cors
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
            res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
            app.use(cors())
            next()
        })
    //body parse
        app.use(bodyParse.urlencoded({extended: false}))
        app.use(bodyParse.json())
    //json
        app.use(express.json())
        app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('testead2')
})
app.post('/api/usuario/cadastro', (req, res) => {
    const json = req.body.dados
    const values = JSON.parse(json)

    sb.from('usuarios').insert({
        nome: values.nome,
        email: values.email,
        telefone: values.telefone,
        senha: values.senha
    }).then((e) => {
        console.log(e)
        console.log('Cadastro realizado com sucesso!')
        res.send('deu certo?')
    }).catch((err) => {
        console.log(err)
        res.send("erro ao cadastrar usuário")
    })

})
app.post('/api/usuario/login', (req, res) => {
    const json = req.body.dados
    const values = JSON.parse(json)

    sb.from('usuarios').select("id, created_at, nome, email, telefone").match({email: values.email, senha: values.senha}).then((e) => {
        if(e.data[0]  == null){
            console.log("Usuário inexistente!")
            res.send(false)
        }
        else{
            const token = jwt.sign({
                id_usuario: e.data[0].id,
                nome: e.data[0].nome,
                email: e.data[0].email
            }, 'key',
            {
                expiresIn: "1h"
            })
            console.log(e.data[0])
            res.send(token)
        }
    }).catch((err) => {
        console.log("Erro ao consultar o banco de dados!")
        res.send("Erro ao consultar o banco de dados!")
    })
})

app.post('/api/usuario/remove', (req, res) => {
    const json = req.body.dados
    const values = JSON.parse(json)

    try{
        jwt.verify(values.token, "key")

        const id = values.id
        sb.from('usuarios').delete().eq('id', id).then((e) => {
            console.log(e)
            console.log('deletado com sucesso')
            res.send("deletado com sucesso!")
        }).catch((err) => {
            console.log("Erro ao consultar o banco de dados!")
            res.send("erro ao deletar usuario")
        })

    }catch(erro){
        console.log("falha na verificação do token!")
        res.send(false)
    }  
})

app.post("/api/usuario/update", (req, res) => {
    const json = req.body.dados
    const values = JSON.parse(json)

    try{
        jwt.verify(values.token, "key")

        const updateValues = values.Update 
        sb.from('usuarios').update({
            nome: updateValues.nome,
            email: updateValues.email,
            telefone: updateValues.telefone,
            senha: updateValues.senha

        }).eq("id", values.id).then((e) => {
            console.log("Usuário atualizado com sucesso!")
            res.send("Usuario atualizado!")
        })

    }catch(erro){
        console.log("erro na verificação do token")
        res.send(false)
    }
})

// leitura de dados
app.post('/api/getUsuarios', (req, res) => {
    sb.from('usuarios').select('id, created_at, nome, email, telefone').then((e) => {
        console.log(e.data)
        res.json(e.data)
    })
})
app.post('/api/getUser', (req, res) => {
    sb.from('usuarios').select('id, created_at, nome, email, telefone').eq("id", req.body.id).then((e) => {
        if(e.data[0] == null)
            res.send("Usuário inexistente!")
        else
            res.json(e.data[0])
        
        console.log(e.data)
    }).catch((erro) => {
        console.log("Erro ao procurar por usuário")
        res.send("Erro ao procurar pelo usuário")
    })
})

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`server rodando em http://localhost:${port}`)
})
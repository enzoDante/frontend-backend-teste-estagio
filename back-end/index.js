const express = require('express')
const cors = require("cors")
const bodyParse = require("body-parser")
const sb = require('./supabase')

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

app.post('/api/usuario/remove', (req, res) => {
    const id = req.body.id
    sb.from('usuarios').delete().eq('id', id).then((e) => {
        console.log(e)
        console.log('deletado com sucesso')
        res.send("deletado com sucesso!")
    }).catch((err) => {
        console.log(err)
        res.send("erro ao deletar usuario")
    })
})

// leitura de dados
app.post('/api/getUsuarios', (req, res) => {
    sb.from('usuarios').select('id, created_at, nome, email, telefone').then((e) => {
        console.log(e.data)
        res.json(e.data)
    })
})

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`server rodando em http://localhost:${port}`)
})
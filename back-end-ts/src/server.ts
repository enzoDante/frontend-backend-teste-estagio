import { app } from './app'

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log(`deu certo? http://localhost:${port}`)
})
process.on('SIGINT', () => {
    server.close()
    console.log("fechou o app")
})

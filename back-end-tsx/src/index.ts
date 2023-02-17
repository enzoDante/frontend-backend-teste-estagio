import express, {Express, Request, Response} from 'express'

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('express com typeScript, teste')
})

app.listen(port, () => {
    console.log(`[server]: Server rodando em http://localhost:${port}`)
    
})
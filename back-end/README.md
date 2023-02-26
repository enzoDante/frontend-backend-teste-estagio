# Instruções para uso da api

## Dependências
- npm init -y
- npm install express
- npm install cors
- npm install body-parser
- npm install @supabase/supabase-js
- npm install jsonwebtoken

# <hr>
## Cadastro
Para utilizar a rota de cadastro, o usuário deve criar um json com os respectivo valores de cadastro:<br>
nome, email, telefone e senha!<br>
Abaixo está um exemplo de como deve ser criado o json.


<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079211625107689502/image.png"><br>

A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/cadastro (no caso de rodar o servidor localmente!) ou https://backend-teste-estagio.vercel.app/api/usuario/cadastro (api online)<br> O json deve ser enviado da seguinte maneira: `"dados=${json}"` --> no caso de utilizar requisição ajax, na qual utiliza-se o send() para enviar esses dados. ==> ``request.send(`dados=${json}`)``<br>Retornando uma 'string' para avisar o caso de sucesso ou falha no cadastro

## Login
Para utilizar a rota de login, o usuário deve criar um json somente com os dados: email e senha<br>exemplo:<br>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079214148556165140/image.png"><br>

A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/login ou https://backend-teste-estagio.vercel.app/api/usuario/login (api online)<br> O json deve ser enviado da seguinte maneira: `"dados=${json}"` --> ``request.send(`dados=${json}`)``<br>Pode retornar:<br>
- 'false' caso usuário inexistente<br>
- 'string' caso ocorra um erro ao executar o login<br>
- 'string' caso sucesso ao logar (retorna o token criado pelo jwt!)<br>


## Remoção de usuário
<p>Para utilizar a rota de remoção de usuário, deve-se criar um json somente com os dados: token e id<br>exemplo:</p>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079215852366340267/image.png"><br>

A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/remove ou https://backend-teste-estagio.vercel.app/api/usuario/remove (api online)<br> O json deve ser enviado da seguinte maneira: `"dados=${json}"` --> ``request.send(`dados=${json}`)``<br>Pode retornar:<br>
- 'false' caso ocorra um erro ao verificar o token<br>
- 'string' caso sucesso ao deletar usuário<br>

## Alteração de dados do usuário
Para utilizar a rota de update, deve-se criar um json com os mesmo dados de cadastro e com dados adicionais:<br>
token, id, nome, email, telefone e senha<br>exemplo:<br>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079217234259480659/image.png"><br>

A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/update ou https://backend-teste-estagio.vercel.app/api/usuario/update (api online)<br> O json deve ser enviado da seguinte maneira: `"dados=${json}"` --> ``request.send(`dados=${json}`)``<br>Pode retornar:<br>
- 'false' caso ocorra um erro ao verificar o token<br>
- 'string' caso sucesso ao atualizar usuário<br>

<hr>

# Adicionais

## Consultar todos os usuários
<p>Para usar o getUsuários, deve apenas fazer uma requisição da url: http://localhost:3001/api/getUsuarios ou https://backend-teste-estagio.vercel.app/api/getUsuarios (api online) <br>
retornando um array com todos os usuários, exemplo:<br>
[{"id":1,"created_at":"2023-02-22T15:04:45.019389+00:00","nome":"valor","email":"email@gmail.com","telefone":"111111"},
{"id":1,"created_at":"2023-02-22T15:04:45.019389+00:00","nome":"valor","email":"email@gmail.com","telefone":"111111"},
{"id":1,"created_at":"2023-02-22T15:04:45.019389+00:00","nome":"valor","email":"email@gmail.com","telefone":"111111"}]</p>

## Consulta de somente um usuário
<p>Para usar o getUser, deve apenas fazer uma requisição da url: http://localhost:3001/api/getUser ou https://backend-teste-estagio.vercel.app/api/getUser (api online) enviando um id especificando o usuário desejado, exemplo: </p><br>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079221587011698719/image.png"><br>

<p>Retornando um json do usuario, exemplo:<br>
{"id":1,"created_at":"2023-02-22T15:04:45.019389+00:00","nome":"valor","email":"email@gmail.com","telefone":"111111"}</p>

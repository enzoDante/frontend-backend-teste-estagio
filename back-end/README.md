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
<p>Para utilizar a rota de cadastro, o usuário deve criar um json com os respectivo valores de cadastro:<br>
nome, email, telefone e senha!<br>
Abaixo está um exemplo de como deve ser criado o json
</p>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079211625107689502/image.png"><br>

<p>A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/cadastro (no caso de rodar o servidor localmente!)<br> O json deve ser enviado da seguinte maneira: "dados=${json}" --> no caso de utilizar requisição ajax, na qual utiliza-se o send() para enviar esses dados. ==> request.send(`dados=${json}`)<br>Retornando uma 'string' para avisar o caso de sucesso ou falha no cadastro</p>

## Login
<p>Para utilizar a rota de login, o usuário deve criar um json somente com os dados: email e senha<br>exemplo:</p>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079214148556165140/image.png"><br>

<p>A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/login<br> O json deve ser enviado da seguinte maneira: "dados=${json}" --> request.send(`dados=${json}`)<br>Pode retornar:
- 'false' caso usuário inexistente<br>
- 'string' caso ocorra um erro ao executar o login<br>
- 'string' caso sucesso ao logar (retorna o token criado pelo jwt!)<br>
</p>

## Remoção de usuário
<p>Para utilizar a rota de remoção de usuário, deve-se criar um json somente com os dados: token e id<br>exemplo:</p>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079215852366340267/image.png"><br>

<p>A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/remove<br> O json deve ser enviado da seguinte maneira: "dados=${json}" --> request.send(`dados=${json}`)<br>Pode retornar:
- 'false' caso ocorra um erro ao verificar o token<br>
- 'string' caso sucesso ao deletar usuário<br>
</p>
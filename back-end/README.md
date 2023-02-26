# Instruções para uso da api
#
## Cadastro
<p>Para utilizar a rota de cadastro, o usuário deve criar um json com os respectivo valores de cadastro:<br>
nome, email, telefone e senha!<br>
Abaixo está um exemplo de como deve ser criado o json
</p>
<img src="https://cdn.discordapp.com/attachments/1079211433713225829/1079211625107689502/image.png"><br>

<p>A variável "json" será enviada para o backend pela url: http://localhost:3001/api/usuario/cadastro (no caso de rodar o servidor localmente!)<br> O json deve ser enviado da seguinte maneira: "dados=${json}" --> no caso de utilizar requisição ajax, na qual utiliza-se o send() para enviar esses dados. ==> request.send(`dados=${json}`)</p>


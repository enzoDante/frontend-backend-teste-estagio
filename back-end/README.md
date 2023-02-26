# Instruções para uso da api
#
## Cadastro
<p>Para utilizar a rota de cadastro, o usuário deve criar um json com os respectivo valores de cadastro:<br>
nome, email, telefone e senha!<br>
Abaixo está um exemplo de como deve ser criado o json
</p>
<script>
    const object = {
        nome: "valor",
        email: "valor",
        telefone: "12999",
        senha: "123"
    }
    const json = JSON.stringify(object)
</script>
<p>A variável</p>
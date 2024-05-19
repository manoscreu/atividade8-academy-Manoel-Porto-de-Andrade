#language: pt

Funcionalidade: Login de Usuario

Contexto: Login de Usuario
    Dado que ja tenho um usuario cadastrado no sistema
    E me encontro na area de login

Cenário:O campo email deve ser obrigatorio
    Quando preencho o campo senha "123456"
    E confirmo a operacao
    Entao o sistema deve apresentar o erro "Informe o e-mail"

Cenário:O campo senha deve ser obrigatorio
    Quando preencho o campo email
    E confirmo a operacao
    Entao o sistema deve apresentar o erro "Informe a senha"

Cenário:Login com usuario inexistente
    Quando preencho o campo email com email inexistente
    E preencho o campo senha "123456"
    E confirmo a operacao
    Entao o sistema deve apresentar o erro de falha ao autenticar

Cenário:login com um usuario valido
    Quando preencho o campo email 
    E preencho o campo senha "123456"
    E confirmo a operacao
    Entao o sistema deve fazer o login corretamente



#language: pt

Funcionalidade: Cadastro de usuario



Contexto: Cadastro de usuario
    Dado que me encontro na area de cadastro


Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo nome
    Quando preencho o campo email com um email valido "manel@teste.com"
    E preencho o campo senha
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve apresentar o erro "Informe o nome" e nao finalizar o cadastro


Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo email
    Quando Preencho o campo nome "Manoel"
    E preencho o campo senha
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve apresentar o erro "Informe o e-mail" e nao finalizar o cadastro


Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo senha
    Quando Preencho o campo nome "Manoel"
    E preencho o campo email com um email valido "manel@teste.com"
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve apresentar o erro "Informe a senhaAs senhas devem ser iguais." e nao finalizar o cadastro


Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo confirmação de senha
    Quando Preencho o campo nome "Manoel"
    E preencho o campo email com um email valido "manel@teste.com"
    E preencho o campo senha
    E confirmo a operacao
    Entao o sistema deve apresentar o erro "Informe a senha" e nao finalizar o cadastro


Cenario: Não deve ser possivel cadastrar um usuario com um email ja em uso
    Dado que ja existe um usuario cadastrado
    Quando Preencho o campo nome "Manoel"
    E preencho o campo email com um email valido "manel@teste.com"
    E preencho o campo senha
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve apresentar um erro dizendo que o usuario ja existe


Cenário: Não deve ser possivel cadastrar um usuario com um email invalido
    Quando Preencho o campo nome "Manoel"
    E preencho o campo email com um email invalido "<email>"
    E preencho o campo senha
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve apresentar um erro de email invalido
    Exemplos:
    | email            |
    | emailteste       |
    | emailteste@teste |
    | @teste           |
    | @                |
    | @.com            |
    | .com             |


Cenário: Não existem restrições sobre o nome. O usuário poderá informar qualquer nome na plataforma.
    Quando Preencho o campo nome "<nome>"
    E preencho o campo email com um novo email
    E preencho o campo senha
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve concluir o cadastro corretamente
    Exemplos:
    |nome      |
    |Manoel    |
    |1         |
    |1234      |
    |...       |
    |🥴😶🤓😥|
    |►♫☼↕‼◄♪◙  |
    |vazio     |


Cenario: Cadastro valido de usuario e confirmação do tipo de usuario
    Quando Preencho o campo nome com um novo nome
    E preencho o campo email com um novo email
    E preencho o campo senha
    E preencho o campo confirmação de senha
    E confirmo a operacao
    Entao o sistema deve concluir o cadastro corretamente
    E o usuario sera do tipo 0

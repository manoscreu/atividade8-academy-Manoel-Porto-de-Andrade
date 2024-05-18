#language: pt

Funcionalidade: Cadastro de usuario


    Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo nome
        Dado que me encontro na area de cadastro
        Quando preencho o campo email com um email valido "manel@teste.com"
        E preencho o campo senha 
        E preencho o campo confirmação de senha
        E confirmo a operacao
        Entao o sistema deve apresentar o erro "Informe o nome" e nao finalizar o cadastro


    Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo email
    Dado que me encontro na area de cadastro
        Quando Preencho o campo nome "Manoel"
        E preencho o campo senha
        E preencho o campo confirmação de senha
        E confirmo a operacao
        Entao o sistema deve apresentar o erro "Informe o e-mail" e nao finalizar o cadastro


    Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo senha
    Dado que me encontro na area de cadastro
        Quando Preencho o campo nome "Manoel"
        E preencho o campo email com um email valido "manel@teste.com"
        E preencho o campo confirmação de senha
        E confirmo a operacao
        Entao o sistema deve apresentar o erro "Campo obrigatório" e nao finalizar o cadastro
    

    Cenario: Não deve ser possivel cadastrar um usuario sem preencher o campo confirmação de senha
    Dado que me encontro na area de cadastro
        Quando Preencho o campo nome "Manoel"
        E preencho o campo email com um email valido "manel@teste.com"
        E preencho o campo senha
        E confirmo a operacao
        Entao o sistema deve apresentar o erro "As senhas devem ser iguais." e nao finalizar o cadastro
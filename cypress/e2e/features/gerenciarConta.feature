#language: pt

Funcionalidade: Gerenciamento de conta

Contexto: Gerenciamento de conta
    Dado que ja tenho um usuario cadastrado no sistema
    E estou conectado na minha conta
    E acesso a area de gerenciar a conta
    

Cenário: O usuário deve ter visibilidade de todos os seus dados relevantes quando estiver editando seu perfil
    Entao posso visualizar o nome cadastrado
    E posso visualizar o email cadastrado
    E o tipo de usuario
    
Cenário: O usuario pode atualizar seu nome 
    Quando altero o nome cadastrado
    E confirmo a operacao
    Entao o sistema deve ter atualizado o perfil de usuario
    E o nome deve ter sido atualizado no perfil

Cenário: O usuario pode atualizar sua senha 
    Quando uso a opçao de alterar senha
    E preencho a nova senha "654321"
    E preencho a confirmação de senha "654321"
    E confirmo a operacao
    Entao o sistema deve ter atualizado o perfil de usuario
    E posso fazer o login com a nova senha

Cenário: é preciso preencher confirmação de senha para que a senha possa ser alterada
    Quando uso a opçao de alterar senha
    E preencho a nova senha "654321"
    E confirmo a operacao
    Entao o sistema deve apresentar o aviso "As senhas devem ser iguais."

Cenário: é preciso preencher senha para que a senha possa ser alterada
    Quando uso a opçao de alterar senha
    E preencho a confirmação de senha "654321"
    E confirmo a operacao
    Entao o sistema deve apresentar o aviso "Campo obrigatório"







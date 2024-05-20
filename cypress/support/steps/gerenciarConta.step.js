import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { fakerPT_BR } from "@faker-js/faker";
import loginPage from "../pages/login.page";
import perfilPage from "../pages/perfil.page";
import inicialPage from "../pages/paginaInicial.page";
const paginaLogin = new loginPage();
const paginaPerfil = new perfilPage();
const paginaInicial = new inicialPage();

Given("que ja tenho um usuario cadastrado no sistema", function () {
  let nome;
  let email;
  cy.criaUsuario().then(function (data) {
    cy.wrap((nome = data.userName)).as("nome");
    cy.wrap((email = data.userEmail)).as("email");
  });
});

When("estou conectado na minha conta", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login");
  paginaLogin.typeEmail(this.email);
  paginaLogin.typeSenha("123456");
  paginaLogin.clickLoginButton()
  paginaLogin.clickPerfil()
});
When("acesso a area de gerenciar a conta", function () {
  paginaPerfil.clickGerenciar();
});
When("altero o nome cadastrado",function(){
    let novoNome = fakerPT_BR.person.fullName()
    cy.wrap(novoNome).as("nomeAtt")
    paginaPerfil.typeNome(novoNome)
})
When("preencho a nova senha {string}",function(senha){
    paginaPerfil.typeSenha(senha)
})
When("preencho a confirmação de senha {string}",function(senha){
    paginaPerfil.typeConfirmSenha(senha)
})
When("uso a opçao de alterar senha",function(){
    paginaPerfil.clickTrocaSenha()
})
When("confirmo a operacao",function(){
    paginaPerfil.clickSalvar()
})
When("o nome deve ter sido atualizado no perfil",function(){
    paginaPerfil.clickPerfil()
    cy.get(paginaPerfil.userInfo).invoke("text").should("contain", this.nomeAtt)
})
When("posso visualizar o email cadastrado", function () {
  cy.get(paginaPerfil.campoEmail).should("be.visible")
});
When("o tipo de usuario", function () {
  cy.get(paginaPerfil.campoTipoUser).should("be.visible")
});
When("posso fazer o login com a nova senha",function(){
    paginaPerfil.clickPerfil()
    paginaPerfil.clickSair()
    paginaInicial.clickLogin()
    paginaLogin.typeEmail(this.email)
    paginaLogin.typeSenha("654321")
    paginaLogin.clickLoginButton()
    paginaLogin.clickPerfil()
    cy.get(paginaPerfil.userInfo).invoke("text").should("contain", this.nome)

})

Then("o sistema deve ter atualizado o perfil de usuario",function(){
   cy.get(paginaPerfil.janela).should("be.visible")
   cy.get(paginaPerfil.janela).invoke("text").should("contain","Sucesso")
   cy.get(paginaPerfil.janela).invoke("text").should("contain","Informações atualizadas!")
   paginaPerfil.clickOk()
})
Then("posso visualizar o nome cadastrado", function () {
  cy.get(paginaPerfil.campoNome).should("be.visible");
});
Then("o sistema deve apresentar o aviso {string}",function(erro){
    cy.get(paginaPerfil.erroCampos).invoke("text").should("contain", erro)
})
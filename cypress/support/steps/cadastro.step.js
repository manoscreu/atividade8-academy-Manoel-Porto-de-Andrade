import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inicialPage from "..//pages/paginaInicial.page";
import cadastroPage from "../pages/cadastro.page";
import { fakerPT_BR } from "@faker-js/faker";
const paginaInicial = new inicialPage();
const paginaCadastro = new cadastroPage();

Given("que me encontro na area de cadastro", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com");
  paginaInicial.clickRegistro();
});

When("Preencho o campo nome {string}",function(nome){
    paginaCadastro.typeNome(nome)
})
When("preencho o campo email com um email valido {string}", function (email) {
  paginaCadastro.typeEmail(email);
});
When("preencho o campo senha", function () {
  paginaCadastro.typeSenha("123456");
});
When("preencho o campo confirmação de senha", function () {
  paginaCadastro.typeConfirmSenha("123456");
});
When("confirmo a operacao", function () {
  paginaCadastro.clickCadastrar();
});

Then("o sistema deve apresentar o erro {string} e nao finalizar o cadastro", function (erro) {
  cy.get(".input-error").should("be.visible");
  cy.get(".input-error").invoke("text").should("equal", erro);
});

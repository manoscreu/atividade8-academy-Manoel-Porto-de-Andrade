import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { fakerPT_BR } from "@faker-js/faker";
import inicialPage from "../pages/paginaInicial.page";
import loginPage from "../pages/login.page";
import perfilPage from "../pages/perfil.page";
const paginaInicial = new inicialPage();
const paginaLogin = new loginPage();
const paginaPerfil = new perfilPage();

Given("que ja tenho um usuario cadastrado no sistema", function () {
  let email;
  let nome;
  cy.criaUsuario().then(function (data) {
    cy.wrap((email = data.userEmail)).as("emailC");
    cy.wrap((nome = data.userName)).as("nomeC");
  });
});

When("me encontro na area de login", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com");
  paginaInicial.clickLogin();
});

When("preencho o campo email", function () {
  paginaLogin.typeEmail(this.emailC);
});

When("preencho o campo senha {string}", function (senha) {
  paginaLogin.typeSenha(senha);
});

When("confirmo a operacao", function () {
  paginaLogin.clickLoginButton();
});
When("o sistema deve apresentar o erro {string}", function (erro) {
  cy.get(paginaLogin.campoErro).invoke("text").should("equal", erro);
});
When("preencho o campo email com email inexistente", function () {
  paginaLogin.typeEmail(fakerPT_BR.internet.email());
});
When("o sistema deve apresentar o erro de falha ao autenticar", function () {
  cy.get(paginaLogin.modal).should("be.visible");
  cy.get(paginaLogin.modal).should("contain", "Falha ao autenticar");
  cy.get(paginaLogin.modal).should("contain", "Usuário ou senha inválidos.");
});
When("o sistema deve fazer o login corretamente", function () {
  paginaLogin.clickPerfil();
  cy.get(paginaPerfil.userInfo).should("contain",this.nomeC)
  cy.get(paginaPerfil.userInfo).should("contain",this.emailC)
});

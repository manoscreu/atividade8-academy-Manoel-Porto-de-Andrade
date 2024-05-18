import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { fakerPT_BR } from "@faker-js/faker";
import inicialPage from "../pages/paginaInicial.page";
import cadastroPage from "../pages/cadastro.page";
import loginPage from "../pages/login.page";
import perfilPage from "../pages/perfil.page";
const paginaInicial = new inicialPage();
const paginaCadastro = new cadastroPage();
const paginaLogin = new loginPage();
const paginaPerfil = new perfilPage();

Given("que me encontro na area de cadastro", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com");
  paginaInicial.clickRegistro();
});
Given("que ja existe um usuario cadastrado", function () {
  cy.intercept("POST", "https://raromdb-3c39614e42d4.herokuapp.com/api/users", {
    statusCode: 409,
    fixture: "/mocks/userExistente",
  });
});

When("Preencho o campo nome {string}", function (nome) {
  paginaCadastro.typeNome(nome);
});
When("Preencho o campo nome com um novo nome", function () {
  let nome = fakerPT_BR.person.fullName();
  paginaCadastro.typeNome(nome);
});
When("preencho o campo email com um email valido {string}", function (email) {
  paginaCadastro.typeEmail(email);
});
When("preencho o campo email com um novo email", function () {
  let email = fakerPT_BR.internet.email();
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
When(
  "preencho o campo email com um email invalido {string}",
  function (emailErrado) {
    paginaCadastro.typeEmail(emailErrado);
  }
);
When("faco um cadastro valido de um novo usuario", function () {
  let emailF;
  cy.criaUsuario().then(function (data) {
    cy.wrap((emailF = data.userEmail)).as("emailV");
  });
});
When("faco o login", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com");
  paginaInicial.clickLogin();
  paginaLogin.typeEmail(this.emailV);
  paginaLogin.typeSenha("123456");
  paginaLogin.clickLoginButton();
  paginaLogin.clickPerfil();
});

Then(
  "o sistema deve apresentar o erro {string} e nao finalizar o cadastro",
  function (erro) {
    cy.get(paginaCadastro.erroCampos).should("be.visible");
    cy.get(paginaCadastro.erroCampos).invoke("text").should("equal", erro);
  }
);
Then(
  "o sistema deve apresentar um erro dizendo que o usuario ja existe",
  function () {
    cy.get(paginaCadastro.janela).should("be.visible");
    cy.get(paginaCadastro.janela).should("contain", "Falha no cadastro.");
    cy.get(paginaCadastro.janela).should(
      "contain",
      "E-mail já cadastrado. Utilize outro e-mail"
    );
  }
);
Then("o sistema deve apresentar um erro de email invalido", function () {
  cy.get(paginaCadastro.janela).should("be.visible");
  cy.get(paginaCadastro.janela).should("contain", "Falha no cadastro.");
  cy.get(paginaCadastro.janela).should(
    "contain",
    "Não foi possível cadastrar o usuário."
  );
});
Then("o sistema deve concluir o cadastro corretamente", function () {
  cy.get(paginaCadastro.janela).should("be.visible");
  cy.get(paginaCadastro.janela).should("contain", "Sucesso");
  cy.get(paginaCadastro.janela).should("contain", "Cadastro realizado!");
});
Then("posso verificar que este usuario foi cadastrado como comum", function () {
  paginaLogin.clickPerfil();
  paginaPerfil.clickGerenciar();
  cy.get(paginaPerfil.campoTipoUser).should("contain", "Comum");
});

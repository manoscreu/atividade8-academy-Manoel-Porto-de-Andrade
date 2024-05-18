export default class loginPage {
  campoEmail = '[name="email"]';
  campoSenha = '[name="password"]';
  buttonLogin = ".login-button";

  typeEmail(email) {
    cy.get(this.campoEmail).type(email);
  }
  typeSenha(senha) {
    cy.get(this.campoSenha).type(senha);
  }
  clickLoginButton() {
    cy.get(this.buttonLogin).click();
  }
}

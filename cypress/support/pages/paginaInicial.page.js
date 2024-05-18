export default class inicialPage {
  buttonFilmes = '[href="/"]';
  buttonLogin = '[href="/login"]';
  buttonRegistro = '[href="/register"]';

  clickLogin() {
    cy.get(this.buttonLogin).click();
  }
  clickRegistro() {
    cy.get(this.buttonRegistro).click();
  }
}

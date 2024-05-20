export default class perfilPage {
  buttonGerenciar = '[href="/account"]';
  buttonSair = '[href="/logout"]';
  buttonPerfil = '[href="/profile"]';
  buttonSalvar = ".account-save-button";
  campoTipoUser = ":nth-child(3) > .profile-input";
  userInfo = ".user-info";
  header = ".profile-header";
  campoNome = '[name="name"]';
  campoEmail = '[name="email"]';
  campoSenha = '[name="password"]';
  campoConfirmSenha = '[name="confirmPassword"]';
  erroCampos = ".input-error"
  janela = ".modal-body";
  buttonOk = ".modal-actions";
  buttonTrocaSenha = ".account-password-button";

  typeNome(nome) {
    cy.get(this.campoNome).type(nome);
  }
  typeEmail(email) {
    cy.get(this.campoEmail).type(email);
  }
  typeSenha(senha) {
    cy.get(this.campoSenha).type(senha);
  }
  typeConfirmSenha(senha) {
    cy.get(this.campoConfirmSenha).type(senha);
  }
  clickPerfil() {
    cy.get(this.buttonPerfil).click();
  }
  clickSalvar() {
    cy.get(this.buttonSalvar).click();
  }
  clickGerenciar() {
    cy.get(this.buttonGerenciar).click();
  }
  clickSair() {
    cy.get(this.buttonSair).click();
  }
  clickOk() {
    cy.get(this.buttonOk).click();
  }
  clickTrocaSenha(){
    cy.get(this.buttonTrocaSenha).click()
  }
}

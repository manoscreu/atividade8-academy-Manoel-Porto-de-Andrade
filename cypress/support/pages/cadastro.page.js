export default class cadastroPage {
  campoNome = '[name="name"]';
  campoEmail = '[name="email"]';
  campoSenha = '[name="password"]';
  campoConfirmSenha = '[name="confirmPassword"]';
  buttonCadastrar = ".account-save-button";
  erroCampos = ".input-error";
  janela = ".modal-body";

  typeNome(nome) {
    cy.get(this.campoNome).then(function(campo){
      if (nome === "vazio") {
        cy.get(campo).type("   ");
      } else {
        cy.get(campo).type(nome);
      }
    });
  }
  typeEmail(email) {
    cy.get(this.campoEmail).type(email);
  }
  typeSenha(senha) {
    cy.get(this.campoSenha).type(senha);
  }
  typeConfirmSenha(confsenha) {
    cy.get(this.campoConfirmSenha).type(confsenha);
  }
  clickCadastrar() {
    cy.get(this.buttonCadastrar).click();
  }
}

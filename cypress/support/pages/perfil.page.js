export default class perfilPage{
    buttonGerenciar = '[href="/account"]'
    buttonSair = '[href="/logout"]'
    campoTipoUser = ":nth-child(3) > .profile-input"

    clickGerenciar(){
        cy.get(this.buttonGerenciar).click()
    }
    clickSair(){
        cy.get(this.buttonSair).click()
    }
}
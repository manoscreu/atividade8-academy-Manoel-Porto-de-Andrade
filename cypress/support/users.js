import { fakerPT_BR } from "@faker-js/faker";

Cypress.Commands.add("criaUsuario", function () {
  let nome = fakerPT_BR.person.fullName();
  let email = fakerPT_BR.internet.email();
  cy.request(
    "POST",
    "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
    {
      name: nome,
      email: email,
      password: "123456"
    }
  ).then(function () {
    return {
      userEmail: email,
      userName: nome
    };
  });
});

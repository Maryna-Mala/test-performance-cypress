import { getInvalidPassword, getLoginEmail } from "../userService";

describe('Login with invalid credentials for your free account', () => {
    it('should display an error message for invalid credentials', () => {
      cy.visit('/customer/account/login');
      cy.get('#email').type(getLoginEmail());
      cy.get('[name="login[password]"]').type(getInvalidPassword());
      cy.get('button.primary').click();
      cy.get('[data-ui-id="message-error"]').should('contain', 'Вхід в обліковий запис був неправильний');
    });
  });
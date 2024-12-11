describe('Add the first product item to the cart', () => {
    it('should navigate to home page and add first product item to the cart', () => {
        cy.visit('/');
        cy.get('li.nav-1').click();
        cy.get('.actions-primary').first().should('be.visible').click();
        cy.get('#minicart-content-wrapper').should('be.visible');
    });
});
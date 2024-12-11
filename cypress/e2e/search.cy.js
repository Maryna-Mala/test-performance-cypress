describe('Search products using the search feature', () => {
    it('fills in the search field and checks the visibility of result', () => {
        cy.visit('/');
        cy.get('.search-toggle#testClick2').click();
        cy.get('#search.input-text').type('coffee');
        cy.get('button.search').click();
        cy.contains('span', 'coffee').should('be.visible');
    });
});
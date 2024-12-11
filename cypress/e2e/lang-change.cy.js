describe('Change the website language to English', () => {
    it('should change the language to English when clicked', () => {
      cy.visit('/');
      cy.get("li.view-en").click();
      cy.get('#switcher-language-trigger').should('be.visible');
      cy.get('#switcher-language-trigger').invoke('text').should('include', 'EN');
    });
  });
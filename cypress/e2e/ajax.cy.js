describe('ajax call', () => {
    it('wait for ajax call to finish', () => {
        cy.visit('');

        cy.get('a').contains('AJAX Data').click();

        cy.intercept('/ajaxdata').as('ajaxCall');
        cy.get('button#ajaxButton').click();
        cy.wait('@ajaxCall');

        cy.get('#content .bg-success').should('be.visible').and('contain', 'Data loaded with AJAX get request.')

    })
})

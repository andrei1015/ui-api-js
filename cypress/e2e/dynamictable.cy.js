let value;

describe('dynamic table', () => {
    it('dynamically find something in a table', () => {
        cy.visit('');

        cy.get('a').contains('Dynamic Table').click();

        cy.get('[role="row"]').contains("Chrome").parent().within(() => {
            cy.get('[role="cell"]').contains('%').then(($value) => {
                value = $value.text()
            })
        })
        cy.get('body').then(() => {
            cy.get('[class="bg-warning"]').should('contain', 'Chrome CPU: ' + value)
        })
    })
})

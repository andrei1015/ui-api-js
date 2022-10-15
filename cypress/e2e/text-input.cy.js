import {
  faker
} from '@faker-js/faker';
const inputText = faker.random.words(5);

describe('text input', () => {
  it('can write in the field', () => {
    cy.visit('');

    cy.get('a').contains('Text Input').click();

    cy.get('input#newButtonName').type(inputText);

    cy.get('button#updatingButton').click().then(() => {
      cy.get('button#updatingButton').should('have.text', inputText)
    });
  })
})

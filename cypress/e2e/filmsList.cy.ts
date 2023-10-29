import {cy} from 'local-cypress'

describe('Films list Module', () => {
  const filmsCount = 20
  const waitSecValue = 3000

  it('initially, showMoreButton and 20 films should be uploaded and visible', () => {
    cy.visit('http://localhost:3000')
    cy.wait(waitSecValue)

    cy.get('[data-testid=filmsList]').as('filmsList')

    cy.get('@filmsList').should('be.visible')
    cy.get('@filmsList')
      .children()
      .should('be.visible')
      .should('have.length', filmsCount + 1)
    cy.get('[data-testid=showMoreButton').should('be.visible')
  })

  it('should open film modal with appropriate trailer after clicking on any movie card', () => {
    cy.get('[data-testid=filmsList]').children().first().click()
    cy.get('[data-testid=modal]').should('be.visible')
    cy.get('[data-testid=closeButton]').wait(waitSecValue).first().click()
  })

  it('when you click on the showMoreButton button, 20 more films should be loaded', () => {
    cy.get('[data-testid=showMoreButton]').click()
    cy.wait(waitSecValue)
    cy.get('[data-testid=filmsList]')
      .children()
      .should('have.length', filmsCount * 2 + 1)
  })
})

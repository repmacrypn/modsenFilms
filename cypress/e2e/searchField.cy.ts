import {cy} from 'local-cypress'

describe('Search Field module', () => {
  it('search field elements should be visible', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid=searchField]')
      .get('[data-testid=searchInput]')
      .get('[data-testid=searchButton]')
      .should('be.visible')
  })

  it('input should respond correctly after typing', () => {
    const inputValue = 'whiplash'

    cy.get('[data-testid=searchInput]').type(inputValue).should('have.value', inputValue)
  })

  it('hint modal should appear when the input value > 0', () => {
    cy.get('[data-testid=hintModal]').should('be.visible')
  })

  it('should open the film modal with the corresponding trailer after clicking on the exact film', () => {
    const waitSecValue = 3000

    cy.get('[data-testid=hintModal]').wait(waitSecValue).first().click()
    cy.get('[data-testid=modal]').should('be.visible')
    cy.get('[data-testid=closeButton]').wait(waitSecValue).first().click()
  })

  it('when you click on the button, the query "search for movies by title" should go', () => {
    const waitSecValue = 3000
    const filmTitle = 'whiplash'

    cy.get('[data-testid=searchInput]').should('have.value', filmTitle)
    cy.get('[data-testid=searchButton]').wait(waitSecValue).click()

    cy.get('[data-testid=filmsList]').wait(waitSecValue).should('be.visible')
  })
})

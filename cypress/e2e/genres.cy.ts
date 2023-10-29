import {cy} from 'local-cypress'

import {genres} from './../../src/utils/constants/genres'

describe('Genres module', () => {
  it('all of the category buttons should be visible', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid=genres]').as('genres')

    cy.get('@genres').should('be.visible')
    cy.get('@genres').children().should('be.visible').should('have.length', genres.length)
  })

  it('at the begining the first "All" button shuold be active', () => {
    cy.get('[data-testid=genres]')
      .children()
      .first()
      .should('have.text', 'All')
      .should('have.css', 'background-color', 'rgb(0, 0, 0)')
      .should('have.css', 'color', 'rgb(248, 248, 248)')
  })

  it('should find films by genre', () => {
    const waitSecValue = 3000

    cy.get('[data-testid=genres]').children().last().as('lastGenre')

    cy.get('@lastGenre').should('have.text', 'Documentary').click()

    cy.wait(waitSecValue)

    cy.get('@lastGenre')
      .should('have.css', 'background-color', 'rgb(0, 0, 0)')
      .should('have.css', 'color', 'rgb(248, 248, 248)')
  })
})

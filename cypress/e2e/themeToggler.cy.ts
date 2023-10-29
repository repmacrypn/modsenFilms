import {cy} from 'local-cypress'

describe('Theme toggler module', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("should switch element's color within the app", () => {
    cy.get('[data-testid=genres]').as('genres')
    cy.get('[data-testid=searchButton]').as('searchButton')
    cy.get('[data-testid=searchInput]').as('searchInput')
    cy.get('[data-testid=togglerWrapper]').as('toggler')

    // checking toggler's colors
    cy.get('@toggler')
      .first()
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('@toggler').first().should('have.css', 'border-color', 'rgb(255, 138, 0)')

    // checking searchInput's colors
    cy.get('@searchInput')
      .first()
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('@searchInput').should('have.css', 'color', 'rgb(0, 0, 0)')

    // checking searchButton's colors
    cy.get('@searchButton')
      .first()
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('@searchButton')
      .first()
      .should('have.css', 'border-color', 'rgb(196, 196, 196)')

    // checking genres's colors
    cy.get('@genres').first().should('have.css', 'border-color', 'rgba(0, 0, 0, 0.19)')

    cy.get('[data-testid="toggler"]').first().click()

    // checking toggler's colors
    cy.get('@toggler').first().should('have.css', 'background-color', 'rgb(20, 20, 20)')
    cy.get('@toggler').first().should('have.css', 'border-color', 'rgb(255, 255, 255)')

    // checking searchInput's colors
    cy.get('@searchInput')
      .first()
      .should('have.css', 'background-color', 'rgb(20, 20, 20)')
    cy.get('@searchInput').should('have.css', 'color', 'rgb(255, 255, 255)')

    // checking searchButton's colors
    cy.get('@searchButton')
      .first()
      .should('have.css', 'background-color', 'rgb(20, 20, 20)')
    cy.get('@searchButton')
      .first()
      .should('have.css', 'border-color', 'rgb(125, 125, 125)')

    // checking genres's colors
    cy.get('@genres').first().should('have.css', 'border-color', 'rgb(109, 110, 118)')
  })

  it('the theme should be saved and applied after the page is reloaded', () => {
    cy.get('[data-testid="toggler"]').first().click()

    cy.reload()

    // checking searchButton's colors
    cy.get('[data-testid=searchInput]')
      .first()
      .should('have.css', 'background-color', 'rgb(20, 20, 20)')
    cy.get('[data-testid=searchInput]')
      .first()
      .should('have.css', 'border-color', 'rgb(125, 125, 125)')
  })
})

/* global describe, it, cy, Cypress */

describe('Petgraam', () => {
  it('check if the app works', () => {
    cy.visit('/')
  })

  it('navigates to a category and watch a photo', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navigates to home using the navbar', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('not registered users see the registration form when they go to nav', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('App', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('renders the app', function () {
    cy.get('#AppSidebarContainer').should('have.length', 1)
    cy.get('#AppPageContainer').should('have.length', 1)
    cy.get('#AppHeaderContainer').should('have.length', 1)
  })
})

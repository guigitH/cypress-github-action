import {URL} from "../constant/url";

context('Actions', () => {
  beforeEach(() => {
    cy.visit(`${URL.ACTION}`)
  })

  it('.scrollIntoView() - scroll an element into view', () => {
    cy.get('#scroll-horizontal button')
      .should('not.be.visible')

    cy.get('#scroll-horizontal button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-vertical button')
      .should('not.be.visible')

    cy.get('#scroll-vertical button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-both button')
      .should('not.be.visible')

    cy.get('#scroll-both button').scrollIntoView()
      .should('be.visible')
  })
})
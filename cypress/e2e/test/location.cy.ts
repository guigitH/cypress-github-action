import {URL} from "../constant/url";

context('Location', () => {
  beforeEach(() => {
    cy.visit(`${URL.LOCATION}`)
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq(`${URL.BASE}${URL.LOCATION}`)
    })
  })
})
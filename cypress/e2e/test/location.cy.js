context('Location', () => {
  beforeEach(() => {
    cy.visit('/commands/location')
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq('https://example.cypress.io/commands/location')
    })
  })
})
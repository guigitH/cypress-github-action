context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('/commands/network-requests')
  })

  it('cy.request() - make an XHR request', () => {
    cy.request('https://jsonplaceholder.cypress.io/comments')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
})
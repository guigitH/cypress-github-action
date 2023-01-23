context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('/commands/network-requests')
  })

  // Manage HTTP requests in your app

  it('cy.request() - make an XHR request', () => {
    // https://on.cypress.io/request
    cy.request('https://jsonplaceholder.cypress.io/comments')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
})
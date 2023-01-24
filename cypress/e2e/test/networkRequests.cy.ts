import {URL} from "../constant/url";
import BasePage from "../page/BasePage";

context('Network Requests', () => {
  beforeEach(() => {
    cy.visit(`${URL.NETWORK}`)
  })

  it('User gets successful http response from cypress jsonplaceholder page', () => {
    const cypress = new BasePage();
    cypress.validateHttpRequest(URL.JSONPLACEHOLDER, 200);
  })
})
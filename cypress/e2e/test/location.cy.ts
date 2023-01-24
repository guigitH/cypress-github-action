import {URL} from "../constant/url";
import BasePage from "../page/BasePage";

context('Location', () => {
  beforeEach(() => {
    cy.visit(`${URL.LOCATION}`)
  })

  it('User is on the command location page', () => {
    const cypress = new BasePage();
    cypress.confirmLocation(`${URL.BASE}${URL.LOCATION}`);
  })
})
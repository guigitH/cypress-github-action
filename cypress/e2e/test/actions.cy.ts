import {URL} from "../constant/url";
import Action from "../page/Action";

context('Actions', () => {
  beforeEach(() => {
    cy.visit(`${URL.ACTION}`)
  })

  it('User can scroll in different direction', () => {
    const cypress = new Action();
    cypress.buttonNotVisible({view: "horizontal"});
    cypress.scrollAndCheckButton({view: "horizontal"});
    cypress.buttonNotVisible({view: "vertical"});
    cypress.scrollAndCheckButton({view: "vertical"});
    cypress.buttonNotVisible({view: "both"});
    cypress.scrollAndCheckButton({view: "both"});
  })
})
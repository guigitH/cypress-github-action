import BasePage from "./BasePage";

type Button = {
    view: "horizontal" | "vertical" | "both",
}

class Action extends BasePage {
    private notVisible = 'not.be.visible';
    private visible = 'be.visible';

    private scrollButton(button: string) { 
        return `#scroll-${button} button`; 
    }

    public async buttonNotVisible(button: Button) {
        cy.get(this.scrollButton(button.view))
            .should(this.notVisible)
    }

    public async scrollAndCheckButton(button: Button) {
        cy.get(this.scrollButton(button.view)).scrollIntoView()
            .should(this.visible)
    }
}

export default Action

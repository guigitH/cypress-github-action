
class BasePage {
    public async confirmLocation(url: string) {
        cy.location().should((location) => {
            expect(location.href).to.eq(url);
        });
    };

    public async validateHttpRequest(url: string, responseStatus: number) {
        cy.request(url)
        .should((response) => {
          expect(response.status).to.eq(responseStatus)
        })
    }
}

export default BasePage
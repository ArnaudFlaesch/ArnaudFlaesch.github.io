/// <reference types='cypress' />

xdescribe('404 page tests', () => {
  it('Should display the 404 error page', () => {
    cy.visit('/404').title().should('equals', "404: Page non trouvée | Arnaud Flaesch - Développeur d'applications");
  });
});

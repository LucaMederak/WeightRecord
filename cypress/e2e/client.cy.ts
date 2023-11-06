describe("User dashboard", () => {
  beforeEach(() => {
    cy.session("User Session", () => {
      cy.visit("http://localhost:3000");
      cy.get("button").contains("Przejdź do strony logowania").click();
      cy.url().should("include", "/auth/login");
      cy.get("input[name='email']").type("jan.kowalski.test@gmail.com");
      cy.get("input[name='password']").type("jankowalskitest");
      cy.get("button").contains("Zaloguj się").click();
      cy.url().should("include", "/dashboard/home");
    });
  });
  it("Add new client", () => {
    cy.visit("http://localhost:3000/dashboard/clients");
    cy.get("a").contains("Dodaj klienta").click();
    cy.get("input[name='firstName']").type("Ela");
    cy.get("input[name='surname']").type("Nowak");
    cy.get("button[name='openDatePickerPopup']").click();
    cy.get("button[name='openYearsPopup']").click();
    cy.get("button").contains("1995").click();
    cy.get("button[name='datePickerDay']").contains("15").click();
    cy.get("input[name='gender']").clear().type("kobieta");
    cy.get("li[id='autocompleteOption']").contains("kobieta").click();
    cy.get("input[name='pal']").clear();
    cy.get("li[id='autocompleteOption']").contains("1.5").click();
    cy.get("button[type='submit']").contains("Dodaj klienta").click();
  });
});

describe("Login to the dashboard", () => {
  it("should get home page", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").contains("Przejdź do strony logowania").click();
    cy.url().should("include", "/auth/login");
  });
  it("should login to dashboard", () => {
    cy.get("input[name='email']").type("jan.kowalski.test@gmail.com");
    cy.get("input[name='password']").type("jankowalskitest");
    cy.get("button").contains("Zaloguj się").click();
    cy.url().should("include", "/dashboard/home");
  });
});

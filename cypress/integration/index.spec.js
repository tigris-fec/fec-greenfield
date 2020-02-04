describe("Index", () => {
  it("should allow users to view the '/' page", () => {
    cy.visit("/")
      .get("h1")
      .contains("Hello World!");
  });
});

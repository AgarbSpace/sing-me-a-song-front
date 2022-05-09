/// <reference types="cypress" />

describe("Return to main page", () => {
    it("should return to main page", () => {
        cy.intercept("GET", "http://localhost:5000/recommendations/top/10").as("topRecommendations");
        cy.visit("http://localhost:3000/random")

        cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
        cy.get("#main").click();
        cy.url().should("equal", "http://localhost:3000/")
        cy.wait("@getRecommendations");
    });
});
/// <reference types="cypress" />

describe("Random song route", () => {
    it("should visit random song route", () => {
        cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
        cy.visit("http://localhost:3000");
        cy.wait("@getRecommendations");
        
        cy.intercept("GET", "http://localhost:5000/recommendations/random").as("randomRecommendation");
        cy.get("#random").click();
        cy.url().should("equal", "http://localhost:3000/random");
        cy.wait("@randomRecommendation");
    });
});
/// <reference types="cypress" />

describe("Top songs route", () => {
    it("should visit top songs route", () => {
        cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
        cy.visit("http://localhost:3000");
        cy.wait("@getRecommendations");
        
        cy.intercept("GET", "http://localhost:5000/recommendations/top/10").as("topRecommendations");
        cy.get("#top").click();
        cy.url().should("equal", "http://localhost:3000/top")
        cy.wait("@topRecommendations")
    });
});
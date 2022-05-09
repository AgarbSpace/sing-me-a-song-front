/// <reference types="cypress" />

describe("upvote a video", () => {
    it("should upvote a video", () => {
        cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
        cy.visit("http://localhost:3000");
        cy.wait("@getRecommendations");

        cy.intercept("POST", "http://localhost:5000/recommendations/*/upvote").as("upvote");
        cy.get("#upvote").click();
        cy.wait("@upvote")
    });
});
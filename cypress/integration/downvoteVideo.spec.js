/// <reference types="cypress" />

describe("downvote a video", () => {
    it("should downvote a video", () => {
        cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
        cy.visit("http://localhost:3000");
        cy.wait("@getRecommendations");

        cy.intercept("POST", "http://localhost:5000/recommendations/*/downvote").as("downvote");
        cy.get("#downvote").click();
        cy.wait("@downvote")
    });
});
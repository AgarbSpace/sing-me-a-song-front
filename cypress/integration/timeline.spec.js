/// <reference types="cypress" />
import { faker } from "@faker-js/faker"

describe("Timeline", () => {
    it("should show timeline with videos", () => {
        cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
        cy.visit("http://localhost:3000");
        cy.wait("@getRecommendations");
    });

    it("should post a video", () => {
        cy.get("#name").type(faker.name.findName());
        cy.get("#link").type("https://www.youtube.com/watch?v=ijS_orLb6VU");
        cy.intercept("POST", "http://localhost:5000/recommendations").as("postRecommendation");
        cy.get("#postRecommendation").click();
        cy.wait("@postRecommendation");
    });
});
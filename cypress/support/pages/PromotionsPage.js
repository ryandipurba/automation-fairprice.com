const locator = require("../locator/PromotionsLocator");

class PromotionPage {
  async visit(path) {
    cy.viewport(1280, 800);
    cy.visit(path);
    return cy.url().should("eq", "https://www.fairprice.com.sg/");
  }

  async sel_promotion_tab() {
    cy.wait(3000);
    return cy.get(locator.datatestid.menu_promotion).click();
  }

  async sel_promotion_pwp() {
    cy.get(locator.datatestid.tab_all).click();
    cy.wait(3000);
    return cy.get(locator.datatestid.tab_pwp).click();
  }

  async val_label() {
    cy.wait(1500);
    cy.get(locator.datatestid.tab_pwp).should("have.text", "PWP");
    cy.wait(1500);
    cy.get(locator.datatestid.tab_digital).should(
      "have.text",
      "Digital Club Exclusive"
    );
    cy.wait(1500);
    cy.get(locator.datatestid.tab_weeklyDeals).should(
      "have.text",
      "Weekly Deals"
    );
  }

  async val_pwp() {
    cy.wait(3000);
    cy.get(locator.datatestid.label_prod_pwp)
      .find(`span:nth-child(1)`)
      .then((product) => {
        let productLength = Cypress.$(product).length;
        for (let index = 0; index < productLength; index++) {
          cy.get(locator.datatestid.label_prod_pwp2)
            .eq(index)
            .should("have.text", "PWP");
        }
      });
  }
}

module.exports = PromotionPage;

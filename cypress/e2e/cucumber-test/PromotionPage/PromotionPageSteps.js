import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

const PromotionPage = require("../../../support/pages/PromotionsPage");

let promotionPage = new PromotionPage();

Given(/^I open fairprice Web$/, () => {
  promotionPage.visit("/");
});

When(/^I click Menu Promotion$/, () => {
  promotionPage.sel_promotion_tab();
});

Then(
  /^Validate 3 mandatory promotional labels: PWP , Weekly Deals, and Digital Club Exclusive$/,
  () => {
    promotionPage.val_label();
  }
);

And(/^I click tab pwp$/, () => {
  promotionPage.sel_promotion_pwp();
});

Then(/^I validate label pwp on product in tab pwp$/, () => {
  promotionPage.val_pwp();
});

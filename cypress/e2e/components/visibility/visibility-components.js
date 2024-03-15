export class VisibilityPage {
    visit() {
      cy.visit('/visibility');
    }
  
    clickHideButton() {
      cy.get('#hideButton').click();
    }
  
    isElementVisible(selector) {
      cy.get(selector).should('be.visible');
    }
  
    isElementNotVisible(selector) {
      cy.get(selector).should('not.be.visible');
    }
  }
  
 
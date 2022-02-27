/// <reference types= "cypress" />


//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    //This function is to describe the test case
    it('Instagram login', function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");

        //spy on the  element
      cy.get (':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
      //type username
      .type("KITTYBLOOM.NG");
       //spy on the  element
      cy.get (':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
      //type password
      .type("KITTYBLOOMNG");

      cy.get(".sqdOP > .qF0y9").click();
      cy.get(".eyXLr")
      .should("be.visible");
    
 

  });
});
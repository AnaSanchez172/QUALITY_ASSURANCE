/* ==== Test Created with Cypress Studio ==== */
it('FlujoCompra', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type('Ana');
  cy.get('[data-test="lastName"]').type('Sanchez');
  cy.get('[data-test="postalCode"]').type('00000');
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
  cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  /* ==== End Cypress Studio ==== */
});
describe('Tech Quiz E2E Flow', () => {
    it('starts quiz and completes all questions', () => {
      cy.visit('/');
      cy.get('[data-cy=start-quiz]').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy=question]').should('exist');
        cy.get('[data-cy=option]').first().click();
        if (i < 9) {
          cy.contains('Next').click(); // if applicable
        }
      }
  
      cy.get('[data-cy=score]').should('exist');
    });
  });
  
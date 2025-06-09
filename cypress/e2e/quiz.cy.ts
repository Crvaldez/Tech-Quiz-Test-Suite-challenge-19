describe('Tech Quiz E2E Flow', () => {
    it('starts quiz and finishes all 10 questions', () => {
      cy.visit('/');
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy=question]').should('exist');
        cy.get('[data-cy=option]').first().click();
        if (i < 9) {
          cy.contains('Next').click();
        }
      }
  
      cy.contains('Your Score').should('exist');
    });
  });
  
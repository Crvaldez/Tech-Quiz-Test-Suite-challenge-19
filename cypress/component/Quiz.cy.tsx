import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../Develop/client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders Start Quiz button', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-quiz]').should('be.visible');
  });
});
import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../Develop/client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('exist');
  });
});

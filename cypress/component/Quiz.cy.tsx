import React from 'react';
import Quiz from '../../src/components/Quiz';

describe('<Quiz />', () => {
        cy.mount(<Quiz />); // Use the imported mount function
        cy.get('button').contains('Start Quiz').should('exist');
    }
);

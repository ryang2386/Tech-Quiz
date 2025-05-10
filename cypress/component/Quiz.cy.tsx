import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    it('renders the quiz component', () => {  
    cy.mount(<Quiz />), // Use the imported mount function
        cy.get('button').contains('Start Quiz').should('exist');
    })
});

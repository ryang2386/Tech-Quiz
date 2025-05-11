describe('Tech Quiz', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:3001/');
    });
    
    it('should display the quiz title', () => {
        cy.get('button').contains('Start Quiz');
    });
    
    it('should display the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2', { timeout: 10000 }).should('be.visible');
    });
    
    it('should allow the user to select an answer', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2', { timeout: 10000 }).should('be.visible');
        cy.get('.mt-3', { timeout: 10000 }).should('be.visible');
        cy.get('.mt-3').first().click();
    });
});
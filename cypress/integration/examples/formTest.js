describe('Pizza Making Components', () => {
    it('Can have a name', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('form input:first').type('Mark')
        cy.get('form input:first').should('have.value', 'Mark')
    })
    it('Can have multiple toppings', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('form input:nth-of-type(4)').check()
        cy.get('form input:nth-of-type(4)').should('be.checked')
        cy.get('form input:nth-of-type(5)').check()
        cy.get('form input:nth-of-type(5)').should('be.checked')
        cy.get('form input:nth-of-type(6)').check()
        cy.get('form input:nth-of-type(6)').should('be.checked')
        cy.get('form input:nth-of-type(7)').check()
        cy.get('form input:nth-of-type(7)').should('be.checked')
    })
    it('Has the ability to submit', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('form input:first').type('Mark')
        cy.contains('Submit').click()
        cy.url().should('include', '/confirmation')
    })
})
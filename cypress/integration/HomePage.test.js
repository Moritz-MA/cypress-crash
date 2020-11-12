
describe('Site loads without problems', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('displays header', () => {
        cy.get('[data-cy=header]')
            .should('be.visible')
    })

    it('displays logo', () => {
        cy.get('[data-cy=logo]')
            .should('be.visible')
    })

    it('displays link', () => {
        cy.get('[data-cy=learn-react-link]')
            .should('be.visible')
            .should('have.attr', 'href', 'https://reactjs.org')
    })
})
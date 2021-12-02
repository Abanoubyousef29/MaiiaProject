Cypress.Commands.add('SearchForDrItemBox', () => {
    cy.get('#downshift_input_0')
})

Cypress.Commands.add('SearchResultList', () => {
    cy.get('#downshift-simple-menu')
})

Cypress.Commands.add('DrProfileTittle', () => {
    cy.get('.name-n-spe')
})

Cypress.Commands.add('ClickOnChooseTheReasonList', () => {
    cy.get('#consultationReasonName')
})

Cypress.Commands.add('ConsultationResultList', () => {
    cy.get('.MuiList-root')
})

Cypress.Commands.add('redirectToURL', () => {
    cy.visit(Cypress.config().baseUrl)
})

Cypress.Commands.add('CalendarItem', () => {
    cy.get('.search-card__rdv.availability-calendar.percy-hidden')
})

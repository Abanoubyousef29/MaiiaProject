/// <reference types="cypress" />

Given('Open Maiia Website', () => {

    cy.redirectToURL()
    cy.wait(Cypress.env("timeout"));

})

When('User search with {string} in the search bar', (searchedWord) => {

    cy.SearchForDrItemBox().type(searchedWord)
    cy.wait(Cypress.env("timeout"))

})

When('user select {string} from search list', (selectedName) => {

    cy.SearchResultList().children().each(($el, index, $list) => {
        
        cy.wrap($el).contains(selectedName).click()
    })
    cy.wait(Cypress.env("timeout"))

    // we can use also the bellow command to select the searched name by contain but it may fail if 
    // we got the same name in the rest of the page 
    // cy.contains(selectedName).click()
})

Then('The Dr {string} reloaded', (profileName) => {
    cy.DrProfileTittle().should('contain.text', profileName)
})

When('user click on reason for consultation', () => {
    cy.ClickOnChooseTheReasonList().click()
})

When('user select {string} from drop down', (DataFromList) => {

    cy.ConsultationResultList().children().each(($el, index, $list) => {
        if ($el.text() === DataFromList) {
            cy.wrap($el).click()
        }
    })
    cy.wait(Cypress.env("timeout"))
})

Then('the calender should not appear in the page befor choosing the reason', () => {

    cy.CalendarItem().should('not.exist')
    cy.wait(Cypress.env("timeout"))
})

Then('the calender should appear in the page', () => {

    cy.CalendarItem().should('exist')
    cy.wait(Cypress.env("timeout"))

    cy.CalendarItem()
        .then($button => {
            $button.css('border', '3px dashed red')
        })
    cy.wait(Cypress.env("timeout"))
})
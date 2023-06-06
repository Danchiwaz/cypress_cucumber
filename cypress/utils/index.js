class Utils{
    static type(selector, value) {
        cy.get(selector).type(value)
    }

    static click(selector){
        cy.get(selector).click()
    }
}

module.exports = Utils
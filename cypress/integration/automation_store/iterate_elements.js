/// <reference types="Cypress" />

describe("iterate over elements", () => {

    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("log information of all hair care products", () => {
       
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });
       
    });

    it("add specific product to basket", () => {

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text().contains('Curls to straight Shampoo')) {
                cy.wrap($el).click()
            }
        });
       
    });

});



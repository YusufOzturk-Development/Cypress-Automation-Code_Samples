/// <reference types="Cypress" />

describe("inspect items", () => {
    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
        
    })

    it("click the first", () => {
       
        cy.scrollTo('center')
        cy.xpath('//*[@id="block_frame_featured_1769"]/div/div[1]/div[2]/a/img').trigger('mouseover')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .shortlinks > .details').click()
        cy.log("test passed");
       
    });

    it.only("find titles of item headers", () =>{

        cy.scrollTo('center')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {

            cy.log ("Selected item header"+ itemHeaderText.text())
        })

    })


});



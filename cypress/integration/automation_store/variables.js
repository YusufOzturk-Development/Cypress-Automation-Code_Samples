/// <reference types="Cypress" />

describe("Verifying variables", () => {


    it("navigating to spesific product pages", () => {
       
        cy.visit("https://automationteststore.com/")
        /* const makeUpLink= cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeUpLink.click();
        const skincareLink= cy.get("a[href*='product/category&path=']").contains("Skincare")
        skincareLink.click();
        const fragranceLink= cy.get("a[href*='product/category&path=']").contains("Fragrance")
        fragranceLink.click();
        const menLink= cy.get("a[href$='path=58']")
        menLink.click(); */


        //more guarenteed
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get('h1 .maintext').then(($headerText)=>{
            const text=$headerText.text()
            cy.log("Make up header: "  + text)
            expect(text).is.eq('Makeup')
        })
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get("a[href*='product/category&path=']").contains("Fragrance").click()
        cy.get("a[href$='path=58']").click()


})

})

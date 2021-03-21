/// <reference types="cypress" />

describe("Test File Upload via webdriveruni", () => {
    it("Upload a file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("sample.pdf", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "sample.pdf",
                    mimeType: "application/pdf"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
    });

    it("Upload no file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get("#submit-button").click();
    });
})
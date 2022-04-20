///<reference types ="cypress"/>

describe ("Suite de test kata1-cy",function(){
    it ("Verification d'affichage des questions et reponses", function(){
        cy.log("Premier scenario"),
        cy.visit("Javascript/projet.html"),
        cy.get('form > :nth-child(2) > u').should("be.visible"),
        cy.get('#Oujda').should("be.visible"),
        cy.get('#Rabat').should("be.visible"),
        cy.get('#Fes').should("be.visible"),
        cy.get(':nth-child(4) > u').should("be.visible")
        cy.get('[for="xavi"]').should("be.visible"),
        cy.get('[for="iniesta"]').should("be.visible"),
        cy.get('[for="maradona"]').should("be.visible"),
        cy.get('[for="zidane"]').should("be.visible")
    });
    it("Cocher les bonnes réponses et verification message de succés",function(){
        cy.log("Deuxieme Scenarion"),
        cy.get('#Rabat').check().should("be.checked"),
        cy.get('#xavi').check().should("be.checked"),
        cy.get('#iniesta').check().should("be.checked"),
        cy.get('.boutton').click(),
        cy.get('#choix1').should("be.visible").contains("La réponse à la première question est correcte"),
        cy.get('#choix2').should("be.visible").contains("La réponse à la deuxième question est correcte")
    });
    it("Cocher les mauvaises réponses et verification message d'erreur",function(){
        cy.log("Troisieme scenario"),
        cy.get('#Fes').click(),
        cy.get('#xavi').uncheck().should("not.be.checked"),
        cy.get('#iniesta').uncheck().should("not.be.checked"),
        cy.get('#maradona').check().should("be.checked"),
        cy.get('#zidane').check().should("be.checked"),
        cy.get('.boutton').click(),
        cy.get('#choix1').should("be.visible").contains("La réponse à la première question est incorrecte"),
        cy.get('#choix2').should("be.visible").contains("La réponse à la deuxième question est incorrecte")

    })
})


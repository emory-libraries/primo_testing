describe("PrimoSB", function(){
    it('should handle a simple flow', function(){
        cy.visit('http://discoveretest.emory.edu/primo_library/libweb/action/search.do?vid=discovere');
        cy.get('#search_field').should('exist').type("hello{enter}");
        cy.get('#exlidResult5 > .EXLSummary > .EXLSummaryContainer > .EXLSummaryFields > .EXLResultTitle > a').click();
        cy.url().should('contains', 'detailsTab');
        cy.get('#exlidResult0-RequestTab > a').click();
        cy.get('#backToResultsBtn').should('exist');
    })
});
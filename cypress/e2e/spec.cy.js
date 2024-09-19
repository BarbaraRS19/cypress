describe('login', () => {
  it(('Login com sucesso'), () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('#usuário').type('admin');
    cy.get('#senha').type('admin');
    cy.get('#entrar').click();
  
    cy.on('window: alert', (txt) => {
      expect(txt).to.contains('Login efetuado')
    });
  });
  it(('Login com erro'), () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('#usuário').type('usu');
    cy.get('#senha').type('ario');
    cy.get('#entrar').click();

    cy.get('#erro').should('be.visible');
  

  });
});
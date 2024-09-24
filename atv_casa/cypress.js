describe('Formulário de Cadastro', () => {
    it('deve exibir mensagem de erro para campos vazios', () => {
        cy.visit('/');
        cy.get('button[type="submit"]').click();
        cy.get('#mensagem').should('contain.text', 'Preencha todos os campos!');
    });

    it('deve exibir mensagem de erro para senhas diferentes', () => {
        cy.visit('/');
        cy.get('#nome').type('Barbara');
        cy.get('#email').type('barbararsabino@gmal.com');
        cy.get('#senha').type('123456');
        cy.get('#confirmarSenha').type('654321');
        cy.get('button[type="submit"]').click();
        cy.get('#mensagem').should('contain.text', 'Senha incorreta!');
    });

    it('deve realizar o cadastro com sucesso', () => {
        cy.visit('/');
        cy.get('button[type="submit"]').click();
        cy.get('#mensagem').should('contain.text', 'Cadastro realizado com sucesso!');
    });
});


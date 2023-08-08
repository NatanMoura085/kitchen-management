// cypress/integration/login.spec.ts
describe('Login Component', () => {
    beforeEach(() => {
      cy.visit('/'); // Substitua a URL pela página de login do seu aplicativo React
    });
  
    it('Exibe a página de login corretamente', () => {
      cy.contains('Sign in to your account').should('be.visible');
      cy.get('[data-testid=username]').should('be.visible');
      cy.get('[data-testid=password]').should('be.visible');
      cy.get('[data-testid=remember-checkbox]').should('be.visible');
      cy.get('[data-testid=login-button]').should('be.visible');
      cy.contains("Don't have an account yet?").should('be.visible');
      cy.contains('Sign up').should('be.visible');
  

    });
  });
  
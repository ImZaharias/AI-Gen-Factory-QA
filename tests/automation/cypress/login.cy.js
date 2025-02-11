describe('Login Test', () => {
    it('should successfully log in and redirect to the home page', () => {
      // Step 1: Visit the home page
      cy.visit('https://ai-gen-factory.onrender.com/');
  
      // Step 2: Click the "Login" button
      cy.contains('a', 'Login').click(); // Find and click the login link
  
      // Step 3: Wait for login form and fill in credentials
      cy.get('#email').type('testuser@gmail.com');
      cy.get('#password').type('password123');
  
      // Step 4: Click the "Submit" button
      cy.get('button[type="submit"]').click();
  
      // Step 5: Verify redirection to home page
      cy.url().should('eq', 'https://ai-gen-factory.onrender.com/');
  
      // Step 6: Confirm successful login (if a success message or logout button appears)
      cy.contains('Logout').should('be.visible'); // Adjust this based on your UI
    });
  });
  
describe('Signup Test', () => {
    it('should sign up a new user successfully and redirect to the home page', () => {
      // Step 1: Visit the home page
      cy.visit('https://ai-gen-factory.onrender.com/');
  
      // Step 2: Click on the "Signup" button
      cy.contains('a', 'Sign Up').click(); // Find and click the signup link
  
      // Step 3: Fill out the signup form
      cy.get('#name').type('newuser'); // Enter name
      cy.get('#email').type('newuser@gmail.com'); // Enter email
      cy.get('#password').type('password123'); // Enter password
      cy.get('#confirmPassword').type('password123'); // Confirm password
  
      // Step 4: Click the "Submit" button
      cy.get('button[type="submit"]').click();
  
      // Step 5: Verify redirection to the home page (after successful signup)
      cy.url().should('eq', 'https://ai-gen-factory.onrender.com/');
  
      // Step 6: Confirm successful signup (Check for logout button or welcome message)
      cy.contains('Logout').should('be.visible'); // Adjust this based on your UI
    });
  });
  
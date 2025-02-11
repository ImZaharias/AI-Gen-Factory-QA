describe('Logout Test', () => {
    it('should log out successfully and redirect to the home page', () => {
      // Step 1: Visit the home page
      cy.visit('https://ai-gen-factory.onrender.com/');
  
      // Step 2: Set authentication cookie (Replace with your actual session cookie name & value)
      cy.setCookie('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Nzg1OTlhZTdjYTFlOTY1MmNmOTU1YzciLCJpYXQiOjE3MzcxNDk2NzYsImV4cCI6MTczNzE1MDU3Nn0.oapuDD_wU_h-bU32f58hXyez9ILDiESZKJ3Qf7KuY34');
  
      // Step 3: Refresh the page to apply authentication
      cy.reload();
  
      // Step 4: Verify user is logged in (Check for logout button or any logged-in indicator)
      cy.get('.lucide.lucide-log-out').should('be.visible');
  
      // Step 5: Click the logout button
      cy.get('.lucide.lucide-log-out').click();
  
      // Step 6: Verify redirection to the home page (after logout)
      cy.url().should('eq', 'https://ai-gen-factory.onrender.com/');
  
      // Step 7: Ensure the user is logged out (Check for login button or missing logout button)
      cy.get('.lucide.lucide-log-out').should('not.exist');
    });
  });
  
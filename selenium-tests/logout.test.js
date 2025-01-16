import { Builder, By, until } from 'selenium-webdriver';

(async function logoutTest() {
    // Initialize WebDriver for Chrome
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Navigate to the home page
        console.log('Navigating to the home page');
        await driver.get('https://ai-gen-factory.onrender.com/');

         // Step 2: Set authentication cookies
         console.log('Setting authentication cookies');
         await driver.manage().addCookie({
             name: 'accessToken', // Name of the cookie (replace with your app's cookie name)
             value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Nzg1OTlhZTdjYTFlOTY1MmNmOTU1YzciLCJpYXQiOjE3MzcwNDUwMzEsImV4cCI6MTczNzA0NTkzMX0.lU6srhF19TaaNR6jVIMfngLNj874tCT8Ynq6SMecJSQ', // Value of the session cookie (obtain this from a previous login)
             domain: 'ai-gen-factory.onrender.com', // Domain of the cookie
         });
 
         // Step 3: Refresh the page to apply the logged-in session
         console.log('Refreshing the page to apply cookies');
         await driver.navigate().refresh();
 
         // Step 4: Verify the logged-in state
         console.log('Verifying logged-in state');
         await driver.wait(until.elementLocated(By.css('.lucide.lucide-log-out')), 5000); // Replace with a locator unique to the logged-in state

        // Step 1: Log in to start the test
        console.log('Logging in as a prerequisite for logout');
        

        // Step 2: Wait for the logout button and click it
        console.log('Waiting for the logout button');
        const logoutButton = await driver.wait(
            until.elementLocated(By.css('.lucide-log-out')), // Locate the logout link by its href
            10000 // Wait up to 10 seconds for the button to appear
        );
        await logoutButton.click(); // Click the logout button
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        // Step 3: Verify redirection to the login page after logout
        console.log('Checking URL for successful logout');
        await driver.wait(until.urlIs('https://ai-gen-factory.onrender.com/'), 10000); // Verify the redirected URL
        console.log('Redirected to the root URL, logout successful!');
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        console.log('Test Passed: Logout was successful!');
    } catch (error) {
        // Log any errors encountered during the test
        console.error('Test Failed:', error);
    } finally {
        // Quit the browser to clean up the WebDriver session
        await driver.quit();
    }
})();

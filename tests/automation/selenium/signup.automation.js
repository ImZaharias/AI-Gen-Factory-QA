import { Builder, By, until } from 'selenium-webdriver';

(async function signupTest() {
    // Initialize WebDriver for Chrome
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Navigate to the home page
        console.log('Navigating to the home page');
        await driver.get('https://ai-gen-factory.onrender.com/'); // Open the home page URL
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        // Step 2: Wait for the signup button and click it
        console.log('Waiting for the signup button');
        const signupButton = await driver.wait(
            until.elementLocated(By.xpath('//a[@href="/signup"]')), // Locate the signup link by its href
            10000 // Wait up to 10 seconds for the button to appear
        );
        await signupButton.click(); // Click the signup button
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        // Step 3: Wait for the signup form to load
        console.log('Waiting for the signup form to load');
        await driver.wait(until.elementLocated(By.id('name')), 5000); // Wait for the name input field
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        // Step 4: Fill in the signup form
        console.log('Filling in the signup form');
        await driver.findElement(By.id('name')).sendKeys('newuser');
        await driver.findElement(By.id('email')).sendKeys('newuser@gmail.com'); // Input email
        await driver.findElement(By.id('password')).sendKeys('password123'); // Input password
        await driver.findElement(By.id('confirmPassword')).sendKeys('password123'); // Confirm password
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        // Step 5: Wait for the submit button and click it
        console.log('Waiting for the submit button');
        const submitButton = await driver.wait(
            until.elementLocated(By.css('button[type="submit"]')), // Locate the submit button by its type
            10000 // Wait up to 10 seconds for the button to appear
        );
        await submitButton.click(); // Click the submit button
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        console.log('Checking URL for successful signup');
        await driver.wait(until.urlIs('https://ai-gen-factory.onrender.com/'), 10000); // Verify the redirected URL
        console.log('Redirected to the root URL, signup successful!');
        await driver.sleep(2000); // Pause for 2 seconds to visually observe

        console.log('Test Passed: Signup was successful!');
    } catch (error) {
        // Log any errors encountered during the test
        console.error('Test Failed:', error);
    } finally {
        // Quit the browser to clean up the WebDriver session
        await driver.quit();
    }
})();

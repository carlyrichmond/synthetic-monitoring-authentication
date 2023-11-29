import { journey, step, monitor, expect, afterAll } from '@elastic/synthetics';

journey('My Example Authentication Journey', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'example-monitor',
    schedule: 10,
  });

  step('Go to cloud page', async () => {
    await page.goto(params.url);

    const header = await page.locator('h1.euiTitle');
    expect(await header.textContent()).toContain('Log in');
  });

  step('Manual login', async () => {
    const submitButton = await page.getByTestId('login-button');
    expect(submitButton).toBeDisabled();

    // Add credentials
    const username = process.env.ELASTIC_USERNAME || '';
    expect(username).toBeDefined();
    await page.getByTestId('login-username').fill(username);

    const password = process.env.ELASTIC_PASSWORD || '';
    expect(password).toBeDefined();
    await page.getByTestId('login-password').fill(password);

    // Check login button is now enabled
    expect(submitButton).toBeEnabled();
    await submitButton.click();

    // How can we wait?
    await page.waitForURL('**/home');

    // Validate we have logged in successfully
    const header = await page.locator('h1.euiTitle');
    expect(await header.textContent()).toContain('Welcome to Elastic');
  });

  afterAll(() => {

  })
});

import { journey, step, monitor, expect, beforeAll } from '@elastic/synthetics';

journey('My Example Auto Authentication Journey', ({ page, params, request }) => {
  // We will populate these variable from example HTTP API responses
  let apiKey;

  // Lets simulate getting an authentication token back from an auth service
  const apiBaseUrl = params.auth_endpoint;
  const clientId = params.example_client_id;

  // Let's say we expect the auth API to return a token
  const exampleAccessTokenKey = 'access_token';
  const exampleAccessToken = params.example_access_token;
  
  // Get headers for use by the page
  step('Get token from auth service', async() => {
    console.log(apiBaseUrl);
    console.log(clientId);
    console.log(exampleAccessTokenKey);
    console.log(exampleAccessToken);
    const resp = await request.get(`${apiBaseUrl}?client_id=${clientId}&${exampleAccessTokenKey}=${exampleAccessToken}`);
    apiKey = resp.headers()[exampleAccessTokenKey];
    expect(apiKey).toEqual(exampleAccessToken);
  });

  // Use headers in other page access
  step('Use API Key in page request', async() => {
    await page.setExtraHTTPHeaders({ [exampleAccessTokenKey]: apiKey });

    await page.goto(`${params.redirectUrl}?${exampleAccessTokenKey}=${apiKey}`);
    await page.waitForSelector(`text=${apiKey}`);
  });
});
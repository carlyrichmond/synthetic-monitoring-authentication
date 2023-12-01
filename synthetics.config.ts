import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://cloud.elastic.co/',
      redirectUrl: 'https://httpbin.org/response-headers',
      username: process.env.ELASTIC_USERNAME,
      password: process.env.ELASTIC_PASSWORD,
      auth_endpoint: process.env.EXAMPLE_OAUTH2_ENPOINT,
      example_access_token: process.env.EXAMPLE_ACCESS_TOKEN,
      example_client_id: process.env.EXAMPLE_CLIENT_ID
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
      testIdAttribute: 'data-test-id'
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 5,
      locations: ['united_kingdom'],
      privateLocations: [],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'synthetic-monitoring-authentication',
      url: 'https://fe8f3eff95d246c6a166d76a9dff6090.uksouth.azure.elastic-cloud.com:443',
      space: 'default',
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};

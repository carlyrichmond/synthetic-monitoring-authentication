# Synthetic Monitoring Authentication Example

This sample showcases how to use Playwright JS, Elastic Synthetics and GitHub Actions to perform monitoring against an application requiring authentication. This example appears in the Elastic 2023 Advent Calendar.

## Overview

The aim is to meet the objective of allowing developers, QA engineers, operations agents, and SRE and DevOps experts to use a common approach to test and monitor an application. For this experiment, an E2E test journey written using [Playwright](https://playwright.dev/) and [Elastic Synthetics](https://github.com/elastic/synthetics) is used to login to the [Elastic homepage](https://www.elastic.co/).

This journey can be executed in 3 different places:

1. Locally as part of an E2E testing suite.
2. Execution of the e2e test suite within CI using [GitHub Actions](https://docs.github.com/en/actions).
3. Execution on a fixed schedule within [Elastic Synthetics](https://www.elastic.co/observability/synthetic-monitoring) after being pushed via [GitHub Actions](https://docs.github.com/en/actions).

## Running Locally

Before running locally please ensure you have the following pre-requisites installed:

1. [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [Elastic Synthetics CLI via a global install](https://www.npmjs.com/package/@elastic/synthetics)

Running the synthetics suite:

```
npm install
npm run test
```

Debugging the suite in headed browser mode:

```
npm install
npm run debug
```
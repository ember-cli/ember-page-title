# How To Contribute

This repo is divided into multiple packages using Yarn workspaces:

- `addon` is the actual ember-page-title addon
- `test-app` is its test suite
- `docs` is the documentation/marketing site

## Installation

- `git clone <repository-url>`
- `cd ember-page-title`
- `pnpm install`

## Linting

Inside any of the packages you can run:

- `pnpm lint`
- `pnpm lint:fix`

## Running the test application

- `cd test-app && pnpm vite`
- Visit the test application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

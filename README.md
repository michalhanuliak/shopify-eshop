# eShop

eShop is a Next.js-based frontend application for a shop-like experience. It utilizes GraphQL to fetch data and is integrated with various developer tools such as Storybook for UI component management, Vitest for testing, and Playwright for end-to-end testing. TailwindCSS is used for styling, along with utility libraries like `clsx` and `class-variance-authority` for streamlined component styling.

## Table of Contents

- Prerequisites

- Installation

- Environment Variables

- Available Scripts

- Code Generation

- Testing

- Storybook

- Folder Structure

- Additional Notes

## Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

- **Package Manager**: Yarn or npm. The examples below will assume `npm`.

## Installation

```bash

cd eshop

npm install

```

## Environment Variables

The project requires environment variables to function correctly, particularly for interacting with the GraphQL endpoint. A sample `.env.example` file is provided for your convenience. To set up your environment variables:

1. Copy `.env.example` to `.env.local`:

```bash

cp .env.example .env.local

```

2. Update the values in `.env.local`:

```bash

GRAPHQL_ENDPOINT=your_shopify_api_here

SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here

```

The `GRAPHQL_ENDPOINT` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN` should be configured with valid credentials. If you do not have a token, you can create or request one from the appropriate source (e.g., Shopify).

## Available Scripts

All commands are run from the root directory of the project.

- **Start development server:**

```bash

npm run dev

```

Starts the Next.js development server at [http://localhost:3000](http://localhost:3000).

- **Build for production:**

```bash

npm run build

```

Creates an optimized production build of the application.

- **Start production server:**

```bash

npm start

```

Starts the production server. Make sure you’ve run `npm run build` first.

- **Lint the code:**

```bash

npm run lint

```

Runs ESLint checks against your codebase.

- **Generate GraphQL Types:**

```bash

npm run generate:types

```

Uses `graphql-codegen` to generate TypeScript types and operations based on your GraphQL schema.

- **Test with Vitest:**

```bash

npm test

```

Runs the unit tests.

- **Watch mode for tests:**

```bash

npm run test:watch

```

- **Test coverage:**

```bash

npm run test:coverage

```

- **Playwright end-to-end tests:**

```bash

npm run test:playwright

```

## Code Generation

The project uses [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen) to automatically generate TypeScript types and hooks from GraphQL queries. Update `codegen.yml` as needed, then run:

```bash

npm  run  generate:types

```

This ensures that GraphQL operations and their results are strongly typed, improving the development experience and reducing runtime errors.

## Testing

This project uses [Vitest](https://vitest.dev/) for unit and integration tests, along with [Testing Library](https://testing-library.com/) for React component testing. Test files are typically located alongside the components they test or in a `__tests__` directory.

- **Run all tests:**

```bash

npm test

```

- **Run tests in watch mode:**

```bash

npm run test:watch

```

- **Generate coverage reports:**

```bash

npm run test:coverage

```

For end-to-end testing, [Playwright](https://playwright.dev/) is used:

- **Run Playwright tests:**

```bash

npm run test:playwright

```

## Storybook

Storybook is used for developing UI components in isolation.

- **Start Storybook:**

```bash

npm run storybook

```

Opens Storybook at [http://localhost:6006](http://localhost:6006).

- **Build static Storybook:**

```bash

npm run build-storybook

```

Generates a static Storybook build in the `storybook-static` folder.

## Additional Notes

- **TypeScript:** The project is fully typed with TypeScript for improved developer experience and code reliability.

- **ESLint & Prettier:** The project uses ESLint (and possibly Prettier) to maintain code consistency and quality. Adjust configurations as needed.

- **Continuous Integration:** If you plan to set up CI, ensure that the environment variables are set correctly in your CI configuration and that necessary checks (lint, tests, build) are run.

## License

Please refer to the `LICENSE` file if provided. If not, you may need to define the appropriate license for the project.

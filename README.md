# Aimedis Ecosystem Monorepo

Welcome to the Metaverse Healthcare Monorepo! This repository contains several apps that make up the Metaverse Healthcare platform. Each app is contained within its own directory, and can be built and deployed independently.

## Apps

The following apps are included in this monorepo:

- `Metaverse-portal`: A web app that for the creation and maintenance for real immersive experience inside the Avalon Metaverse.
- `admin-portal`: A web app that allows admins to manage user accounts, view system logs, and configure system settings.

Each app has its own `README.md` file that provides more information about its features, architecture, and deployment instructions.

## Shared packages

In addition to the apps, this monorepo includes several shared packages that are used by multiple apps. These packages are contained within the `packages` directory, and include the following:

- `common-ui`: A set of reusable UI components that are used across multiple apps.
- `api-client`: A common API client that is used to communicate with the Metaverse Healthcare API.
- `auth-service`: A shared authentication service that is used to authenticate users across multiple apps.

Each package has its own `README.md` file that provides more information about its features and usage.

## Development

To start developing the Metaverse Healthcare platform, follow these steps:

1. Clone this repository to your local machine.
2. Install the dependencies by running `yarn install` at the root of the monorepo.
3. Navigate to the directory of the app or package you want to work on.
4. Start the development server by running `yarn dev`.

## Deployment

Each app and package can be deployed independently, according to its own deployment instructions. However, to ensure consistency and maintainability across the entire platform, we recommend using a continuous integration and deployment (CI/CD) system that is configured to build and deploy all apps and packages whenever changes are pushed to the main branch.

## License

This monorepo is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

# my-Angular-Project

# Configuration for server


first npm i

next  npm start


This project uses environment-specific configurations to handle different settings for development and production environments. The configuration is loaded based on the current `NODE_ENV` value, and if `NODE_ENV` is not set, it defaults to `'development'`.

## Configuration Details

### Environment Variables

The `config` object contains two configurations:

1. **Development**:
   - **Port**: The application will run on `3000` by default, but it can be overridden by setting the `PORT` environment variable.
   - **Database URL**: The MongoDB connection URL is set to `'mongodb://localhost:27017/Used-Furniture'` by default for development.
   - **Origin**: The application allows cross-origin requests from `http://localhost:5555` and `http://localhost:4200`.

2. **Production**:
   - **Port**: The application will run on the port specified by the `PORT` environment variable or defaults to `3000`.
   - **Database URL**: The MongoDB connection URL is set using the `DB_URL_CREDENTIALS` environment variable.
   - **Origin**: No origins are specified for production by default, but this can be customized.

### Usage

To use this configuration:

1. **Set the `NODE_ENV` variable**:
   - `NODE_ENV=development` for local development.
   - `NODE_ENV=production` for production.

2. **Set the required environment variables**:
   - `PORT`: The port on which the server will listen (optional, defaults to `3000`).
   - `DB_URL_CREDENTIALS`: The MongoDB connection URL for production (required in production).

### Example

# Express Application with MongoDB and CORS

This project sets up an Express.js application with MongoDB connectivity and CORS handling. It uses environment-based configurations, connects to the MongoDB database, and includes basic error handling.

## Features

- **MongoDB Connection**: The application connects to a MongoDB database using a custom `dbConnector`.
- **CORS**: Configurable Cross-Origin Resource Sharing (CORS) settings to allow or restrict which origins can access the API.
- **Error Handling**: A global error handler to catch and process errors in the application.
- **Environment Configuration**: Loads environment variables from a `.env` file for flexibility and security.

## Project Setup

### 1. **Set up environment variables**

Ensure you have a `.env` file in the root of your project with the following variables:

```env
PORT=3000
DB_URL_CREDENTIALS=<your-database-url>
NODE_ENV=development




FOR MORE INFO config\config.js C:\Users\sit97\Desktop\My_Engular_Project\my-Angular-Project\server\config\config.js



-----------------------------------------------------------------------------------------------------------------------------

# Client Application

This is an Angular 18-based client application.

## Project Overview

This project is built with Angular 18 and includes various dependencies to enhance functionality such as routing, animations, and form handling. The application also integrates Moment.js for date manipulation and RxJS for reactive programming.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** (Node Package Manager), which comes with Node.js.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Development Server

To run the application in development mode, use the following command:
```bash
npm start
```
This will start the Angular development server at `http://localhost:4200/`.


## Build

To build the application for production, use:
```bash
npm run build
```
This will create a `dist/` directory with the production build.

## Available Scripts

In addition to the default `npm start`, there are several other scripts available for development and testing:

- **`npm start`**: Starts the development server using `ng serve`.
- **`npm run build`**: Builds the application for production using `ng build`.
- **`npm run watch`**: Builds the application in watch mode for development.
- **`npm test`**: Runs unit tests with Karma and Jasmine.

## Dependencies

This project uses the following dependencies:

- **@angular/animations**: Animation support for Angular.
- **@angular/common**: Common Angular utilities and services.
- **@angular/compiler**: Angular compiler.
- **@angular/core**: Core Angular framework.
- **@angular/forms**: Angular forms module for reactive and template-driven forms.
- **@angular/platform-browser**: Browser-specific Angular support.
- **@angular/platform-browser-dynamic**: Dynamic loading for Angular.
- **@angular/router**: Angular routing module.
- **@types/moment**: TypeScript types for Moment.js.
- **moment**: Date and time manipulation library.
- **rxjs**: Reactive programming library for asynchronous programming.
- **tslib**: TypeScript runtime library.
- **zone.js**: Zone.js library for managing asynchronous operations in Angular.

## Development Dependencies

For building and testing, the project uses the following development dependencies:

- **@angular-devkit/build-angular**: Angular build tools.
- **@angular/cli**: Command-line interface for Angular.
- **@angular/compiler-cli**: Compiler CLI for Angular.
- **jasmine-core**: Jasmine framework for testing.
- **karma**: Test runner for JavaScript.
- **karma-chrome-launcher**: Launch tests in Chrome.
- **karma-coverage**: Coverage reporter for Karma.
- **karma-jasmine**: Karma plugin for Jasmine.
- **karma-jasmine-html-reporter**: HTML reporter for Karma tests.
- **typescript**: TypeScript compiler.

## Running Tests

To run unit tests with Karma and Jasmine, use:
```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Angular**: A platform for building web applications.
- **Moment.js**: A library for parsing, manipulating, and formatting dates.
- **RxJS**: A library for reactive programming.


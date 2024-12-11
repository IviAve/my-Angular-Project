# Angular Project

# Client Project

## Overview
This is an Angular-based single-page application (SPA) project. The application leverages Angular 18 and includes various scripts for building, testing, and running the development server. It utilizes essential dependencies such as RxJS for reactive programming, Moment.js for date handling, and Angular core libraries.

## Features
- Developed with Angular 18.
- Uses RxJS for managing reactive streams.
- Date manipulation powered by Moment.js.
- Built-in testing framework using Karma and Jasmine.

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts
The following npm scripts are available:

- **`ng`**: Runs Angular CLI commands.
- **`start`**: Starts the development server at `http://localhost:4200/`.
  ```bash
  npm start
  ```
- **`build`**: Builds the application for production.
  ```bash
  npm run build
  ```
- **`watch`**: Builds the application in development mode and watches for changes.
  ```bash
  npm run watch
  ```
- **`test`**: Runs unit tests using Karma and Jasmine.
  ```bash
  npm test
  ```

## Dependencies
### Production Dependencies
- `@angular/animations`: Angular animations module.
- `@angular/common`: Common Angular utilities.
- `@angular/compiler`: Angular compiler.
- `@angular/core`: Core Angular framework.
- `@angular/forms`: Angular forms module.
- `@angular/platform-browser`: Tools for interacting with the browser.
- `@angular/platform-browser-dynamic`: Angular dynamic platform support.
- `@angular/router`: Angular routing module.
- `@types/moment`: Type definitions for Moment.js.
- `moment`: Library for parsing, validating, manipulating, and formatting dates.
- `rxjs`: Reactive Extensions for JavaScript.
- `tslib`: TypeScript runtime library.
- `zone.js`: Angular zone library for change detection.

### Development Dependencies
- `@angular-devkit/build-angular`: Angular build tools.
- `@angular/cli`: Angular CLI for managing projects.
- `@angular/compiler-cli`: Angular compiler CLI.
- `@types/jasmine`: Type definitions for Jasmine testing framework.
- `jasmine-core`: Core Jasmine testing framework.
- `karma`: Test runner for JavaScript.
- `karma-chrome-launcher`: Launcher for Karma to run tests in Chrome.
- `karma-coverage`: Coverage reporting tool for Karma.
- `karma-jasmine`: Adapter for Jasmine in Karma.
- `karma-jasmine-html-reporter`: HTML reporter for Karma and Jasmine.
- `typescript`: TypeScript language support.

## Usage
- To develop and test the project locally:
  ```bash
  npm start
  ```
  Access the application at `http://localhost:4200/`.

- To build the project for production:
  ```bash
  npm run build
  ```

## Testing
Run unit tests:
```bash
npm test
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Feel free to fork this repository and submit pull requests to improve or fix issues with the project.

---

### Author
Developed by [rusalita].


# Angular Client Application

This repository contains the front-end of an application built using Angular 18. The client connects to a REST API server and provides a dynamic, interactive user interface.

## Features

- **Modern UI Framework**: Built with Angular 18 for a fast and responsive user experience.
- **Routing**: Efficient navigation between views using Angular Router.
- **Form Handling**: Includes Angular Forms for user input and validation.
- **Moment.js Integration**: Simplified date and time manipulation.

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Angular CLI (v18 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BoogyHS/Angular-client.git
   cd Angular-client
Install dependencies:
bash
Копиране на код
npm install
Usage
Running the Application
To serve the application locally:
bash
Копиране на код
npm start
The application will be available at http://localhost:4200.
Building the Application
To build the application for production:
bash
Копиране на код
npm run build
The build artifacts will be stored in the dist/ directory.
Watching for Changes
To rebuild the application automatically during development:
bash
Копиране на код
npm run watch
Running Tests
To execute unit tests:
bash
Копиране на код
npm test
Project Structure
bash
Копиране на код
src/
├── app/                  # Main Angular application
├── assets/               # Static assets
├── environments/         # Environment-specific configurations
└── index.html            # Main HTML file
Scripts
npm start: Starts the Angular development server.
npm run build: Builds the application for production.
npm run watch: Rebuilds the application on changes.
npm test: Runs unit tests.
Dependencies
@angular/core: Core Angular framework.
rxjs: Reactive programming library for handling asynchronous data streams.
moment: For date and time manipulation.
Dev Dependencies
@angular/cli: Angular CLI tools.
karma: Test runner for Angular projects.
typescript: TypeScript language support.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the ISC License.

Author
BoogyHS

Issues
If you encounter any issues, please report them here.

Project Homepage
Find the project here.
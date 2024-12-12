# REST API

A REST API built using Node.js and Express.js, providing various endpoints for managing resources. This project uses MongoDB as the database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Dependencies](#development-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Authentication and authorization with JSON Web Tokens (JWT)
- Secure password hashing using bcrypt
- Environment variable management with dotenv
- CORS enabled for cross-origin resource sharing
- MongoDB integration using Mongoose
- Error handling middleware

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BoogyHS/REST-api.git
   cd REST-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

## Usage

### Running the Server

- To start the server in production mode:

  ```bash
  npm start
  ```

- To start the server in development mode (with live reload):

  ```bash
  npm run dev
  ```

### API Endpoints

Refer to the API documentation for available endpoints and their usage.

## Scripts

- `start`: Runs the application in production mode using Node.js
- `dev`: Runs the application in development mode using nodemon

## Dependencies

- **bcrypt**: ^5.0.0
- **cookie-parser**: ^1.4.5
- **cors**: ^2.8.5
- **dotenv**: ^8.2.0
- **express**: ^4.17.1
- **jsonwebtoken**: ^8.5.1
- **mongoose**: ^5.9.19

## Development Dependencies

- **nodemon**: ^2.0.4

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature name'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## Bugs and Issues

If you encounter any issues, please report them [here](https://github.com/BoogyHS/REST-api/issues).

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

**Author:** [BoogyHS](https://github.com/BoogyHS)

For more information, visit the [project homepage](https://github.com/BoogyHS/REST-api#readme).


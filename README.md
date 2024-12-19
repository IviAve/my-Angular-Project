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

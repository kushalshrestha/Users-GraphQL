# Users-GraphQL

This project is a simple GraphQL server built using Node.js, with a schema defined in `schema.js`. It uses a JSON database provided by `db.json` to serve dummy user data. The server is set up to interact with the database using [json-server](https://github.com/typicode/json-server).

## Installation

Before you begin, make sure you have Node.js and npm installed on your machine.

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kushalshrestha/Users-GraphQL.git
   ```
2. Change into the project directory

   ```bash
   cd Users-GraphQL
   ```
3. Install the project dependencies:

   ```bash
   npm install
   ```
## Usage
1. Starting the JSON Server

Before running the GraphQL server, you need to start the JSON server to serve the dummy data. You can start the JSON server by running the following command:

   ```bash
   npm run json:server
   ```
This will start the JSON server on http://localhost:3000.


2. Starting the GraphQL Server

To start the GraphQL server, you can run the following command:

   ```bash
   node server.js
   ```
The GraphQL server will be accessible at http://localhost:4000. You can use tools like GraphQL Playground to interact with the GraphQL API.


## Dependencies

This project relies on the following dependencies, which can be found in the package.json file:

* `axios` - Promise-based HTTP client for making requests to external services.
* `express` - Web framework for building the GraphQL server.
* `express-graphql` - Middleware for integrating GraphQL with Express.
* `graphql` - The GraphQL runtime library.
* `json-server` - A full-fledged fake REST API that can be used as a data source for the GraphQL server.
lodash - Utility library for JavaScript.
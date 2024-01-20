# Node.js GraphQL Project

This project demonstrates the alternatives to REST API by implementing both REST and GraphQL type request handling projects using the MERN stack.

## Description
This project showcases the usage of GraphQL alongside the traditional REST API approach. It provides examples of how to handle different types of requests using both REST and GraphQL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
Follow these steps to install and set up the project:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `bun install` or `npm install` to install the dependencies.
4. Set up the required environment variables.
5. Run `bun run start` script or `npm start` to start the server.

## Usage
To use the project, follow these instructions:

1. Make requests to the REST API endpoints to interact with the RESTful part of the project.
2. Make requests to the GraphQL endpoint to interact with the GraphQL part of the project.
3. Refer to the project documentation for detailed information on the available endpoints and request formats.

- ### GraphQL Client read example:
```
query {
  clients{
    name
  }
}
```

- ### GraphQL Client insert example:
```
mutation{
  addClient(name: "Ayush Tickoo", email: "ayush.tickoo@reazon.com", phone: "9914188982") {
    name,
    phone,
    id
  }
}
```

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.


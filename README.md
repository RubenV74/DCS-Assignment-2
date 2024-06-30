# DCS-Assignment-2

## Overview

This project is a part of DCS (Distributed Computing Systems) Assignment 2. It involves setting up a database connection using Mongoose, implementing CRUD operations, and testing the functionality using Jest.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RubenV74/DCS-Assignment-2.git
   cd DCS-Assignment-2

2. Install dependencies:

   ```bash
   npm install

3. Ensure MongoDB is running on your system.

## Usage

Start the server:

   ```
   node index.js
   ```

The server will run on the port specified in the `.env` file.

## Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

   ```
   MONGO_URI = your_mongodb_connection_string
   ```

This file should not be committed to version control for security reasons. Make sure to add .env to your .gitignore file.

## API Endpoints

### Documentation Postman

https://documenter.getpostman.com/view/32178673/2sA3duHDhw

### Get Specify Family
- URL: `/api/families/name/SpecifyFamily`
- Method: `GET`
- Description: families Retrieve a list of all families.

### Create a Family
- URL: `/api/families`
- Method: `POST`
- Description: Create a new family record.

### Update a Family
- URL: `/api/families`
- Method: `PUT`
- Description: Update an existing family record by 

### Delete a Family By ID
- URL: `/api/families/:id`
- Method: `DELETE`
- Description: Delete a family record by its ID.


## Project Structure

```
.
├── Logger
│   └── logger.js              # Logger configuration
├── Models
│   └── families.model.js      # Mongoose model for family data
├── __tests__
│   └── storageConnection.test.js  # Jest tests for StorageConnection
├── storageConnection.js       # Main storage connection file
├── .env                       # Environment variables
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

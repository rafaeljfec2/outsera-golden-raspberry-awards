# Golden Raspberry Awards API

This is a RESTful API that allows reading the list of nominees and winners for the "Worst Picture" category of the Golden Raspberry Awards. The main goal is to provide information about the producer with the longest and shortest intervals between consecutive awards.

## Technologies

- Node.js
- TypeScript
- Express
- SQLite (in-memory database)
- Jest and Supertest (for integration tests)

## Prerequisites

- Node.js installed (version 14 or higher)
- NPM (Node.js package manager)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rafaeljfec2/outsera-golden-raspberry-awards.git
   cd golden-raspberry-awards-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

# Configuration

The project does not require additional environment configurations, as it uses an in-memory database (SQLite) and loads data from a CSV file. Ensure that the file movielist.csv is located in the data/ folder at the root of the project.

# Running the Project

To run the project in development mode, use:

```bash
npm run start
```

The API will be available at http://localhost:3000.

# Endpoints

# GET /awards/producer-intervals

Returns the producer with the longest interval between two consecutive awards and the producer who won two awards the fastest.

# Running Integration Tests

To run the integration tests, use the command:

```bash
npm run test
```

# Golden Raspberry Awards API

This is a RESTful API that allows reading the list of nominees and winners for the "Worst Picture" category of the Golden Raspberry Awards. The main goal is to provide information about the producer with the longest and shortest intervals between consecutive awards.

## Technologies

- Node.js
- TypeScript
- Express
- SQLite (in-memory database)
- Jest and Supertest (for integration tests)
- Docker
- Docker compose

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

# Prerequisite for Docker

If you want to run the application in a Docker container, make sure you have Docker installed on your machine. You can download Docker from Docker's official website. Follow the installation instructions for your operating system.

# Running the Project

To run the project in development mode, use:

```bash
npm run dev
```

To run the project in docker, use:

```bash
docker-compose up -d
```

The API will be available at http://localhost:3000.

# Endpoints

# GET /api/awards/producer-intervals

Returns the producer with the longest interval between two consecutive awards and the producer who won two awards the fastest.

### Example Response

The following is an example response from the `/awards/producer-intervals` endpoint:

```json
{
  "min": [
    {
      "producers": "Bo Derek",
      "interval": 6,
      "previousWin": 1984,
      "followingWin": 1990
    }
  ],
  "max": [
    {
      "producers": "Bo Derek",
      "interval": 6,
      "previousWin": 1984,
      "followingWin": 1990
    }
  ]
}
```

# Running Integration Tests

To run the integration tests, use the command:

```bash
npm run test
```

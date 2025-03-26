# PriceScout

A web application for monitoring product prices in real-time.

## Features

- Automated web scraping of product data
- Real-time price monitoring
- Responsive Bootstrap UI
- PostgreSQL database for data storage

## Tech Stack

- **Frontend**: Next.js with Bootstrap
- **Backend**: Node.js
- **Database**: PostgreSQL
- **Web Scraping**: Playwright
- **Containerization**: Docker and Docker Compose

## Getting Started

### Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up PostgreSQL database:
   ```bash
   # Create database named 'pricescout'
   # Set password for postgres user to '1234'
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```

4. Start the Next.js frontend:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

### Running with Docker


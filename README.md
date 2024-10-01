# Log-streamer-cd-109

**Log-streamer-cd-109** is a lightweight and containerized log forwarding solution designed to stream server logs to a central server for further processing and analysis. It uses Logstash to capture logs, filter out unnecessary information, and forward important log data to a central logging server.

## Features

- **Log forwarding**: Captures and forwards logs from your server's `/var/log` directory.
- **Log filtering**: Only forwards logs with `ERROR` or `WARN` levels to reduce noise.
- **Dockerized deployment**: Simple deployment using Docker.
- **Centralized logging**: Sends logs to a central server for aggregation and analysis.
- **Customizable**: Easily configure the log paths, filters, and destination server.

## Project Structure

```plaintext
.
├── Dockerfile
├── README.md
├── dist                # Compiled TypeScript files (output directory)
├── node_modules        # Dependencies
├── package.json        # Project dependencies and scripts
├── src                 # TypeScript source files
│   └── server.ts       # Express server
├── tsconfig.json       # TypeScript configuration
└── .gitignore          # Git ignore rules
```

## Prerequisites

- **Docker** must be installed on your server.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/softwares-compound/Log-streamer-cd-109.git
   cd Log-streamer-cd-109
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. Running the Application

Now you can run your **TypeScript** server locally or inside Docker.

### For Local Development:

- **To run the server in development mode (with hot-reloading):**

  ```bash
  npm run dev
  ```

- **To run the server in production mode:**

  ```bash
  npm run start
  ```

### For Docker Deployment:

- **To build the Docker image:**   

  ```bash
  docker build -t log-streamer-cd-109 .
  ```

- **To run the Docker image:**

  ```bash
  docker run -p 3000:3000 log-streamer-cd-109
  ```
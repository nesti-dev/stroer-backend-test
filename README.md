# STROER BACKEND TEST

## Getting started

### 1. Clone the repository:
```bash
git clone https://github.com/nesti-dev/stroer-backend-test.git
```

### 2. Install Dependencies:
 ```bash
 cd stroer-backend-test
 npm install
 ```

## Configuration
In the root folder of the project is the file [.env](.env) where the environment variables are declared.
```
DATA_FILENAME: "data.json" // Name of the file that saves the content of POST requests to the "/track" endpoint.
REDIS_HOST: "localhost" // Host of the Redis server.
REDIS_PORT: 6379 // Port of the Redis server.
```

## Running

### localhost
```bash
npm start
```

### docker
```bash
docker build . -t stroer-backend-test
docker run -e REDIS_HOST="redis.example.local" -p 3000:3000 stroer-backend-test
```

### docker compose
```bash
docker-compose up --build
```

## Testing

```bash
npm test
```

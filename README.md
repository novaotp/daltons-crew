# Daltons Crew

[INSÉRER SLOGAN ICI]

## Getting Started

> You must have NodeJS v24+ and Docker Compose installed.

### Development

1. Install the dependencies.

    ```sh
    npm install
    ```

2. Create a `.env` file based on `.env.example`.

    ```sh
    cp .env.example .env
    ```

3. Run the services using `docker compose`.

    ```sh
    # Start the container
    docker compose up --watch --build

    # Stop the container
    docker compose stop

    # Remove everything
    docker compose down --remove-orphans
    ```

4. Open your browser at http://localhost:5173.

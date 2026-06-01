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

3. Generate the prisma client.

    ```sh
    npx prisma generate
    ```

4. Run the services using `docker compose`.

    ```sh
    # Start the container
    docker compose up --watch --build

    # Stop the container
    docker compose stop

    # Remove everything
    docker compose down --remove-orphans
    ```

5. (Optional) Seed the database.

    > First, create the data inside `prisma/data.json` with the following structure.
    >
    > ```json
    > [
    >     {
    >         "nickname": "johndoe304",
    >         "name": "John",
    >         "skill": {
    >             "top": 9,
    >             "jungle": 7,
    >             "mid": 3,
    >             "adc": 4,
    >             "support": 3
    >         },
    >         "preference": {
    >             "top": 1,
    >             "jungle": 2,
    >             "mid": 4,
    >             "adc": 3,
    >             "support": 5
    >         }
    >     }
    >     // Other players...
    > ]
    > ```

    ```sh
    npx prisma db seed
    ```

6. Open your browser at http://localhost:5173.

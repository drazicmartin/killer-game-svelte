# killer-game-svelte
Killer Game app with svelte

- Frontend: svelte & SvelteKit
- backend: supabase

# Init repo

## Frontend
```
cd frontend
cp .env.example .env
npm i
```

## Backend
```
cd backend\docker
cp .env.example .env
```

- Populate `frontend\.env` with corresponding values in `backend\docker\.env`

- Copy content of `/backend/dump.txt` and paste-it in SQL Editor of supabase.

# Development

## Front
```bash
cd fonrtend
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Back
```bash
# start
docker compose -f backend/docker/docker-compose.yml up -d 
# then go to kong dashboard http://127.0.0.1:8000/
# user : supabase
# password : this_password_is_insecure_and_should_be_updated

# stop
docker compose -f backend/docker/docker-compose.yml stop

# restart
docker compose -f backend/docker/docker-compose.yml restart
```

## Accessing the APIs
Each of the APIs are available through the the same API gateway:

- REST: http://<your-ip>:8000/rest/v1/
- Auth: http://<your-domain>:8000/auth/v1/
- Storage: http://<your-domain>:8000/storage/v1/
- Realtime: http://<your-domain>:8000/realtime/v1/

## Usefull

- Export database schemas 
    - Enter docker Postgres console
    ```bash
    pg_dump --username postgres --schema=public -s
    ```

## WIL

- supabase:
    - has a pretty bad documentation
    - loggin/registrer system is not easy to implement
    - join table does no work very well
    - fetch/insert/update query are easy !
- svlete:
    - is very fun and easy !

## TODO

- [X] Login / Register
- [X] Init the game
- [X] Shuffle Game State
- [X] Game admin settings
- [X] Game player settings
- [X] Kill logic
- [X] Add score
- [X] People must not have same mission has their target mission.
- [X] Allow dead to follow the game state
- [ ] Quit game
- [ ] Power up
    - [ ] change mission
- [ ] Direct message system between killer and target

PGPASSWORD=pg_password pg_dump --username postgres $POSTGRES_DB

## Contributors
- [Drazic MARTIN](https://github.com/drazicmartin)
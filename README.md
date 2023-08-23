# killer-game-svelte
Killer Game app with svelte

- Frontend: svelte & SvelteKit
- backend: supabase


# Development

## Front
```bash
cd frontend

npm run --prefix frontend dev
# or start the server and open the app in a new browser tab
npm run --prefix frontend dev -- --open
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

## TODO

- [ ] direct message system between killer and target

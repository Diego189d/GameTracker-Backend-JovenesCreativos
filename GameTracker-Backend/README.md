# GameTracker Backend

API REST en Node/Express + MongoDB

## Setup

1. Copia `.env.example` a `.env` y completa `MONGO_URI`.
2. `npm install`
3. `npm run dev`

Endpoints:
- GET /api/games
- GET /api/games/:id
- POST /api/games
- PUT /api/games/:id
- DELETE /api/games/:id

- GET /api/reviews/game/:gameId
- POST /api/reviews
- PUT /api/reviews/:id
- DELETE /api/reviews/:id

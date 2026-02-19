# hmphtv
The Anime Streaming Website is a web-based platform that allows users to browse, search, and stream anime content online. The system provides organized anime listings, episode streaming, user interaction, and admin content management. 

## Server (Node.js + Express)

Backend source is in `server`.

### Run backend

1. Open terminal in project root.
2. Run:

```bash
cd server
npm install
npm run dev
```

Server runs on `http://localhost:5000` by default.

### Environment variables

Copy `server/.env.example` to `server/.env` and edit as needed:

- `PORT` (default `5000`)
- `CLIENT_URL` (default `http://localhost:5173`)
- `NODE_ENV` (default `development`)

### Starter API endpoints

- `GET /api/health`
- `GET /api/streams`
- `GET /api/streams/live`
- `GET /api/schedule`

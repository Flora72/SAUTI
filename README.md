# Sauti: A Sanctuary for Survivor Voice

**Sauti** (Swahili for "voice") is a trauma-informed platform designed to center the lived experiences of rape survivors and those navigating sexual violence. It offers a gentle, secure space for reflection, expression, and healing—where silence is honored, and voice is sacred.

---

## Vision

Sauti is not just a product. It is a promise:
- To listen without judgment.
- To hold space without intrusion.
- To empower survivors to reclaim their narratives on their own terms.

---

## Features

### 1. **Guided Journaling**
- Trauma-informed prompts designed with emotional pacing
- Optional anonymity and encryption
- Daily, weekly, or custom reflection flows

### 2. **Audio Reflections**
- Private voice notes with layered privacy
- Option to share with trusted listeners or support circles
- Soft UI that mimics the rhythm of breath and pause

### 3. **Affirmation Library**
- Survivor-written affirmations, poetry, and grounding phrases
- Curated by theme: safety, strength, softness, reclamation

### 4. **Community Threads (Optional)**
- Moderated spaces for shared healing
- No likes, no metrics—just presence and response
- Threads can be closed, archived, or revisited gently

### 5. **Safety Architecture**
- Tiered privacy controls
- Emergency logout and data wipe
- Survivor-first onboarding with emotional scaffolding

---

## Tech Stack (MERN)

- Frontend: React (Vite) + CSS (Tailwind optional)
- Backend: Node.js + Express
- Database: MongoDB (via Mongoose)
- Auth: To be decided (e.g., JWT/Session, third-party)
- Deployment: Vercel/Netlify (client) + Railway/Render (server)

---

## Project Structure (MERN)

This repository now includes a minimal MERN scaffold alongside the existing static prototype files.

- client/
  - package.json
  - index.html
  - src/
    - main.jsx
    - App.jsx
    - styles/
      - index.css
  - .env.example
- server/
  - package.json
  - .env.example
  - src/
    - index.js
    - routes/
      - index.js
    - controllers/
      - health.controller.js
    - middleware/
      - errorHandler.js
    - config/
      - default.js
    - utils/
      - logger.js
- shared/
  - README.md
- templates/ (earlier HTML prototype)
- static/ (earlier CSS/JS prototype assets)
- README.md

Notes:
- The server exposes GET /health and GET /api/health for quick checks.
- MongoDB connection is optional. Set USE_DB=false in server/.env to skip.
- The client expects VITE_API_BASE_URL in client/.env (see .env.example).

---

## Naming & Design Ethos

Every component in Sauti is named with intention:
- EchoBox: for voice notes
- SanctuaryFlow: for journaling
- WhisperThread: for community posts
- SoftGate: for onboarding

Colors are muted, earthy, and warm—designed to soothe, not stimulate. Typography is gentle, with high readability and low visual noise.

---

##  Why Sauti?

Because survivors deserve more than clinical forms and cold dashboards.  
They deserve spaces that feel like home.  
Sauti is built to be that home—digital, but deeply human.

---

## Status

Sauti is currently in ideation and early prototyping.  
If you'd like to contribute, reflect, or co-create, reach out gently.

---

## Built With Love By

Florence — strategic, emotionally intelligent builder of sanctuary-like platforms.  
Every line of code is written with care, clarity, and the belief that healing is possible.


# Sauti: A Sanctuary for Survivor Voice

**Sauti** (Swahili for "voice") is a trauma-informed platform designed to center the lived experiences of rape survivors and those navigating sexual violence. It offers a gentle, secure space for reflection, expression, and healing—where silence is honored, and voice is sacred.

---

## Vision

Sauti is not just a product. It is a promise:
- To listen without judgment.
- To hold space without intrusion.
- To empower survivors to reclaim their narratives on their own terms.

---

## Features

### 1. **Guided Journaling**
- Trauma-informed prompts designed with emotional pacing
- Optional anonymity and encryption
- Daily, weekly, or custom reflection flows

### 2. **Audio Reflections**
- Private voice notes with layered privacy
- Option to share with trusted listeners or support circles
- Soft UI that mimics the rhythm of breath and pause

### 3. **Affirmation Library**
- Survivor-written affirmations, poetry, and grounding phrases
- Curated by theme: safety, strength, softness, reclamation

### 4. **Community Threads (Optional)**
- Moderated spaces for shared healing
- No likes, no metrics—just presence and response
- Threads can be closed, archived, or revisited gently

### 5. **Safety Architecture**
- Tiered privacy controls
- Emergency logout and data wipe
- Survivor-first onboarding with emotional scaffolding

---

## Tech Stack (MERN)

- Frontend: React (Vite) + CSS (Tailwind optional)
- Backend: Node.js + Express
- Database: MongoDB (via Mongoose)
- Auth: To be decided (e.g., JWT/Session, third-party)
- Deployment: Vercel/Netlify (client) + Railway/Render (server)

---

## Project Structure (MERN)

This repository now includes a minimal MERN scaffold alongside the existing static prototype files.

- client/
  - package.json
  - index.html
  - src/
    - main.jsx
    - App.jsx
    - styles/
      - index.css
  - .env.example
- server/
  - package.json
  - .env.example
  - src/
    - index.js
    - routes/
      - index.js
    - controllers/
      - health.controller.js
    - middleware/
      - errorHandler.js
    - config/
      - default.js
    - utils/
      - logger.js
- shared/
  - README.md
- templates/ (earlier HTML prototype)
- static/ (earlier CSS/JS prototype assets)
- README.md

Notes:
- The server exposes GET /health and GET /api/health for quick checks.
- MongoDB connection is optional. Set USE_DB=false in server/.env to skip.
- The client expects VITE_API_BASE_URL in client/.env (see .env.example).

---

## Naming & Design Ethos

Every component in Sauti is named with intention:
- EchoBox: for voice notes
- SanctuaryFlow: for journaling
- WhisperThread: for community posts
- SoftGate: for onboarding

Colors are muted, earthy, and warm—designed to soothe, not stimulate. Typography is gentle, with high readability and low visual noise.

---

##  Why Sauti?

Because survivors deserve more than clinical forms and cold dashboards.  
They deserve spaces that feel like home.  
Sauti is built to be that home—digital, but deeply human.

---

## Status

Sauti is currently in ideation and early prototyping.  
If you'd like to contribute, reflect, or co-create, reach out gently.

---

## Built With Love By

Florence — strategic, emotionally intelligent builder of sanctuary-like platforms.  
Every line of code is written with care, clarity, and the belief that healing is possible.


---

## MERN Features Implemented (MVP)

Frontend (React Vite):
- SanctuaryFlow (Guided Journaling): create, list, view, delete entries.
- EchoBox (Audio Reflections): record stub via URL, list, play, delete.
- Affirmation Library: browse curated affirmations by theme.
- WhisperThread (Optional): simple threads with replies; feature-flagged.
- SoftGate (Safety): heartbeat, emergency logout, wipe my data.

Backend (Node/Express + Mongoose):
- JournalEntry model and CRUD endpoints.
- AudioNote model and CRUD endpoints (metadata only for now).
- Affirmation list + dev-only seed route.
- Thread with posts; archive; feature-flagged with FEATURE_THREADS.
- Safety endpoints: panic, wipe, heartbeat.
- Anonymous identity via x-anon-id header.

Environment:
- client/.env.example with VITE_API_BASE_URL and VITE_FEATURE_THREADS.
- server/.env.example with USE_DB, MONGO_URI, FEATURE_THREADS.

### API Endpoints
- GET /health
- GET /api/health
- Journal
  - GET /api/journal
  - POST /api/journal { title?, content, mood?, visibility? }
  - GET /api/journal/:id
  - DELETE /api/journal/:id
- Audio
  - GET /api/audio
  - POST /api/audio { title?, url, durationSec?, visibility? }
  - DELETE /api/audio/:id
- Affirmations
  - GET /api/affirmations?theme=grounding|safety|strength|softness|reclamation
  - POST /api/affirmations/seed (dev only)
- Threads (feature-flag)
  - GET /api/threads
  - POST /api/threads { title, visibility? }
  - POST /api/threads/:id/posts { body }
  - POST /api/threads/:id/archive
- Safety
  - POST /api/safety/panic
  - POST /api/safety/wipe
  - GET /api/safety/heartbeat

All state-changing requests expect header: x-anon-id. The client sets and persists this automatically.

### Front-end Navigation
- /journal → Guided journaling
- /audio → Audio reflections
- /affirmations → Affirmation library
- /community → Community threads (toggle via VITE_FEATURE_THREADS and FEATURE_THREADS)
- /safety → Safety actions

### Legacy static assets
The earlier static prototype assets in static/ are deprecated and not used by the MERN app. The templates/ folder has been removed from the repository.

### Running locally
Option A — One command (recommended):
1. Copy env files
   - cp server/.env.example server/.env
   - cp client/.env.example client/.env
2. From the project root, install and start both apps
   - npm install
   - npm run install-all
   - npm run dev

This launches:
- API at http://localhost:4000 (with DB disabled by default)
- Client at http://localhost:5173

By default, the client opens to the Safety page so it works even without a database. To use Journal/Audio/Community, enable a MongoDB connection (see below).

Option B — Run separately:
1. Server
   - cd server && npm i && npm run dev
2. Client
   - cd client && npm i && npm run dev

Open http://localhost:5173 and ensure the API is available at http://localhost:4000.

Notes:
- MongoDB is optional. Set USE_DB=true in server/.env and provide MONGO_URI to enable database-backed routes (Journal, Audio, Threads). With USE_DB=false, only non-DB endpoints (health, safety/heartbeat, panic) will work.
- Audio uploads are metadata-only for now; integrate storage (S3, Cloudinary) later.

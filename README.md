# Fortune Cookie ✨

A small full-stack fortune cookie website for a RepoVitals demo.

## Features
- Warm, responsive fortune-cookie themed interface
- Click a cookie to reveal a random fortune
- Save favourite fortunes during the current session
- Copy a fortune to share it
- Flask backend API serves fortunes and a health endpoint
- Frontend and backend dependency manifests for repository scanning

## Project structure
- `frontend/index.html` — page layout
- `frontend/style.css` — responsive styling
- `frontend/script.js` — cookie interaction and API integration
- `backend/app.py` — Flask API
- `backend/requirements.txt` — backend dependencies

## Push to GitHub for RepoVitals
1. Extract this ZIP.
2. Create a GitHub repository (for example, `fortune-cookie-website`).
3. Upload the contents of this folder, preserving `frontend/` and `backend/`.
4. Add the repository URL in RepoVitals and run a scan.

## Run locally
### Start backend
```bash
cd backend
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```
Backend: `http://127.0.0.1:5000`

### Open frontend
Open `frontend/index.html` in your browser. If the API isn't running, the website uses built-in sample fortunes, so the interaction still works.

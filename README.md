# Kirti Shukla — Portfolio

> Vue 3 (JSX) + Tailwind CSS frontend · Python FastAPI backend · Resend email · Deploy-ready on Render free tier

---

## 📁 Project Structure

```
portfolio/
├── render.yaml                  ← one-click Render deploy
├── .gitignore
│
├── frontend/                    ← Vue 3 + Vite + Tailwind
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── main.js              ← app entry point
│       ├── App.jsx              ← root component
│       ├── assets/
│       │   └── main.css         ← Tailwind + all custom styles
│       ├── data/
│       │   └── portfolio.js     ← ALL content (edit here)
│       ├── composables/
│       │   ├── useScrollReveal.js
│       │   ├── useTyping.js
│       │   └── useTheme.js
│       └── components/
│           ├── LoadingScreen.jsx
│           ├── Navbar.jsx
│           ├── HeroSection.jsx
│           ├── AboutSection.jsx
│           ├── SkillsSection.jsx
│           ├── ProjectsSection.jsx
│           ├── ExperienceSection.jsx
│           ├── ContactSection.jsx
│           └── FooterSection.jsx
│
└── backend/                     ← Python FastAPI
    ├── main.py
    ├── requirements.txt
    └── .env.example
```

---

## 🚀 Quick Start (Local)

### 1. Clone & enter the repo

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

---

### 2. Frontend

```bash
cd frontend
npm install
npm run dev          # → http://localhost:5173
```

The frontend dev server **proxies `/api/*` to `http://localhost:8000`** automatically (see `vite.config.js`).

---

### 3. Backend

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy env template and fill in values
cp .env.example .env
# Edit .env with your Resend API key
nano .env

# Run server
uvicorn main:app --reload --port 8000
```

The API will be live at `http://localhost:8000`.  
Interactive docs: `http://localhost:8000/docs`

---

## 📧 Email Setup (Resend — Free)

[Resend](https://resend.com) gives you **3 000 free emails/month** with no credit card.

### Steps:

1. **Sign up** at [resend.com](https://resend.com) (takes 30 seconds)

2. **Create an API key**  
   Dashboard → API Keys → Create API Key  
   Copy the key starting with `re_...`

3. **Set sender email**  
   - For testing: use `onboarding@resend.dev` (works immediately, no domain needed)
   - For production: add your domain in Resend → Domains → Add DNS records

4. **Update your `.env`**:

```env
RESEND_API_KEY=re_your_actual_key_here
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=shuklakirti2004@gmail.com
```

5. **Test**: Fill out the contact form at `localhost:5173` and check your inbox.

---

## ☁️ Deploy to Render (Free)

Both services deploy for free on Render. The `render.yaml` in the repo root configures everything.

### Steps:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Render**:
   - Go to [render.com](https://render.com) → New → Blueprint
   - Connect your GitHub repo
   - Render auto-detects `render.yaml` and creates both services

3. **Set environment variables** in Render Dashboard for the backend service:
   | Key | Value |
   |-----|-------|
   | `RESEND_API_KEY` | `re_your_key_here` |
   | `FROM_EMAIL` | `onboarding@resend.dev` |
   | `TO_EMAIL` | `shuklakirti2004@gmail.com` |
   | `ALLOWED_ORIGINS` | `https://kirti-portfolio-frontend.onrender.com` |

4. **Update API URL in frontend**: After backend deploys, set:
   | Key | Value |
   |-----|-------|
   | `VITE_API_URL` | `https://kirti-portfolio-api.onrender.com` |

5. **Update the axios base URL** in `frontend/src/components/ContactSection.jsx`:
   ```js
   // Change the axios call from:
   await axios.post('/api/contact', ...)
   // To use env var:
   await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, ...)
   ```

> ⚠️ **Render Free Plan Note**: The backend spins down after 15 minutes of inactivity. The first form submission after idle may take ~30 seconds as it wakes up. This is normal for the free tier.

---

## ✏️ Personalizing Content

All content lives in one file:

```
frontend/src/data/portfolio.js
```

Edit this file to update:
- Name, bio, contact details
- Projects (title, description, links, tech stack)
- Skills and levels
- Work experience / education timeline
- Social links

---

## 🧩 Component Reference

| File | Purpose |
|------|---------|
| `App.jsx` | Root — loading screen + section orchestration |
| `Navbar.jsx` | Sticky nav, theme toggle, mobile menu |
| `HeroSection.jsx` | Typing animation, orb avatar, stats, CTAs |
| `AboutSection.jsx` | Bio paragraphs + glassmorphism info cards |
| `SkillsSection.jsx` | Skill bars (scroll-triggered) + tech chips |
| `ProjectsSection.jsx` | 6-card grid with hover lift + links |
| `ExperienceSection.jsx` | Vertical timeline (work + education) |
| `ContactSection.jsx` | Info cards + validated form → backend |
| `FooterSection.jsx` | Social links + copyright |

| Composable | Purpose |
|-----------|---------|
| `useScrollReveal.js` | IntersectionObserver → `.reveal` → `.visible` |
| `useTyping.js` | Typewriter cycling through role phrases |
| `useTheme.js` | Dark / light toggle via `<html>` class |

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend framework | Vue 3 (Composition API + JSX) |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| HTTP client | Axios |
| Backend | Python 3.11 + FastAPI |
| Email | Resend SDK |
| Validation | Pydantic v2 |
| Hosting | Render (free tier) |

---

## 📜 License

MIT — feel free to fork and adapt.

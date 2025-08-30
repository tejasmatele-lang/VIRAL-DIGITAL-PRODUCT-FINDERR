# Viral Digital Product Finder (Fullstack, Tejas Gupta)

## 🚀 Deploy to Railway
Click below to deploy instantly:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/YOUR_USERNAME/viral-digital-finder&envs=OPENAI_API_KEY,SERP_API_KEY&OPENAI_API_KEYDesc=Your+OpenAI+API+Key&SERP_API_KEYDesc=Your+SerpAPI+Key)

---

## 🔑 Required Environment Variables
- `OPENAI_API_KEY` → from https://platform.openai.com  
- `SERP_API_KEY` → from https://serpapi.com  

---

## 🖥 Local Development
```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# Frontend
cd frontend
npm install
npm run dev

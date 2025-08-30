from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import requests, os
from openai import OpenAI

app = FastAPI()

# Allow frontend calls
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve built frontend
app.mount("/", StaticFiles(directory="frontend-dist", html=True), name="frontend")

SERP_API_KEY = os.getenv("SERP_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

@app.get("/api/research")
async def research(niche: str):
    serp = requests.get(
        "https://serpapi.com/search.json",
        params={"engine": "google", "q": f"best {niche} digital products", "api_key": SERP_API_KEY}
    ).json()

    titles = [r.get("title") for r in serp.get("organic_results", [])[:5]]

    prompt = f"""
    You are a product researcher. Given these digital products in niche '{niche}': {titles}
    📌 Overview: short summary
    ⚠️ Problems: list of cons
    💡 Opportunities: where competitors fail
    🚀 Suggested Product Idea: one new idea
    """

    ai = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return {"niche": niche, "products": titles, "analysis": ai.choices[0].message.content}

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def health():
    return "fine"

@app.get("/songs")
async def songs():
    songs = ["a","b"]
    return songs
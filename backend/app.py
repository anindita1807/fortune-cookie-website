from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

FORTUNES = [
    "Small steps still move you toward beautiful places.",
    "The thing you are looking for is also looking for you.",
    "A new opportunity will arrive disguised as a small change.",
    "You do not need to have it all figured out to begin.",
    "Your kindness is making more of a difference than you know.",
    "A little courage today can open a very big door tomorrow.",
    "Make room for the unexpected; it has excellent timing.",
    "Trust the slow magic of becoming who you are.",
    "The answer may come when you stop forcing the question.",
    "Something you start today will make future-you grateful."
]

@app.get("/api/fortune")
def fortune():
    return jsonify({"fortune": random.choice(FORTUNES)})

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "little-fortune-api"})

@app.get("/api/fortunes")
def fortunes():
    return jsonify({"count": len(FORTUNES), "fortunes": FORTUNES})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)

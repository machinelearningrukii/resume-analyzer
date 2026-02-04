from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber
import io
import json

app = FastAPI()

# Allow your Frontend to talk to your Backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze_resume(file: UploadFile = File(...), jd: str = Form(...)):
    # 1. Extract Text from PDF
    with pdfplumber.open(io.BytesIO(await file.read())) as pdf:
        resume_text = ""
        for page in pdf.pages:
            resume_text += page.extract_text()

    # 2. The AI Prompt (The "Intelligence")
    # In a real app, you'd call OpenAI here. For now, we return a structured mock.
    analysis_result = {
        "score": 85,
        "match_keywords": ["React", "Python", "FastAPI"],
        "missing_keywords": ["Docker", "AWS"],
        "suggestions": "Add quantifiable achievements to your experience section."
    }
    
    return analysis_result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
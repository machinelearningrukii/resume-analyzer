from fastapi import FastAPI, UploadFile, Form, File
from fastapi.middleware.cors import CORSMiddleware
import io
import PyPDF2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/analyze") 
async def analyze(file: UploadFile = File(...), jd: str = Form(...)):
    content = await file.read()
    pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
    cv_text = ""
    for page in pdf_reader.pages:
        cv_text += page.extract_text().lower()

    possible_skills = ["javascript", "golang", "python", "php", "node.js", "jwt", "sql", "mysql", "mongodb", "redis", "git", "linux", "wordpress", "aws", "docker"]
    
    jd_lower = jd.lower()
    required_skills = [s for s in possible_skills if s in jd_lower]
    
    if not required_skills:
        required_skills = ["git", "api", "communication"]

    matched = [s for s in required_skills if s in cv_text]
    missing = [s for s in required_skills if s not in cv_text]

    actual_score = int((len(matched) / len(required_skills)) * 100)

 
    suggestion = "Excellent alignment!"
    if len(missing) >= 2:
        suggestion = f"Focus on learning {missing[0]} and {missing[1]} to improve alignment."
    elif len(missing) == 1:
        suggestion = f"Focus on learning {missing[0]} to improve alignment."

    return {
        "score": actual_score,
        "match_keywords": matched,
        "missing_keywords": missing,
        "suggestions": suggestion
    }

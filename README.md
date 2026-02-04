# ASTRA.CORE // Neural Resume Auditor v3.0

ASTRA.CORE is a high-performance Resume-to-Job Description (JD) matching engine. It leverages a Python-based FastAPI backend to perform semantic analysis on PDF resumes, comparing them against specific job requirements to generate a real-time "Match Index" score.

![Neural UI](https://img.shields.io/badge/UI-Cyberpunk_Dark-blue)
![Backend](https://img.shields.io/badge/Backend-FastAPI-emerald)
![Analysis](https://img.shields.io/badge/Analysis-Dynamic_Set_Logic-rose)

## 🚀 Key Features
* **Neural Scan:** Deep-extraction of text from PDF source files.
* **Dynamic Scoring:** Real-time percentage calculation based on JD keyword intersection.
* **Gap Identification:** Instant detection of missing skills (e.g., AWS, Docker, Golang).
* **Engineering Logs:** Live system telemetry showing the state of the neural engine.
* **Cyberpunk Interface:** Sleek, high-contrast UI designed for clarity and speed.

## 🛠️ Tech Stack
* **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide Icons.
* **Backend:** Python 3.10+, FastAPI, PyPDF2.
* **Communication:** Axios (REST API).

## 📥 Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/machinelearningrukii/resume-analyzer.git](https://github.com/machinelearningrukii/resume-analyzer.git)
cd resume-analyzer

##  2. Backend Setup
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# Install dependencies:
pip install fastapi uvicorn PyPDF2 python-multipart
# Run server:
uvicorn main:app --port 8001 --reload

##   3. Frontend Setup
# Open a new terminal
cd frontend
npm install
npm run dev

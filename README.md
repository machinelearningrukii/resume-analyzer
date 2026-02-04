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

To make this truly "Outstanding" for your SLIIT submission, I’ve written a comprehensive, professional README.md. This includes a system architecture section, which examiners love because it shows you understand how the Frontend and Backend communicate.📄 Complete README.mdCopy and paste this into your README.md file in the root directory:Markdown# ASTRA.CORE // Neural Resume Auditor v3.0

ASTRA.CORE is an advanced AI-driven Resume Analysis tool designed to bridge the gap between job seekers and recruiters. By utilizing a high-performance **FastAPI** backend and a **React-TS** frontend, it provides real-time semantic auditing of candidate profiles against specific Job Descriptions.

![System Status](https://img.shields.io/badge/System_Status-Online-emerald)
![Build](https://img.shields.io/badge/Build-v3.0.4_Stable-blue)
![Environment](https://img.shields.io/badge/Node-18.x+-orange)
![Environment](https://img.shields.io/badge/Python-3.9+-yellow)

## 🌌 System Architecture
ASTRA.CORE operates on a decoupled architecture:
1.  **Frontend (React):** Manages the "Neural UI," handling file uploads and JD input.
2.  **API Layer (Axios):** Transmits multi-part form data to the processing node.
3.  **Backend (FastAPI):** Orchestrates the PDF parsing engine and matching logic.
4.  **Audit Engine:** Performs keyword intersection and generates the Match Index.



## 🚀 Key Features
* **Neural Scan:** Extracts raw text data from binary PDF streams using `PyPDF2`.
* **Dynamic Match Index:** Real-time percentage scoring based on JD-specific requirements.
* **Skill Gap Analysis:** Highlights "Semantic Gaps" to show what candidates are missing.
* **Telemetry Logs:** A live system log feed displaying backend connection status and processing steps.
* **Cyberpunk UI:** High-fidelity dark mode interface with engineering grid overlays and Lucide iconography.

## 🛠️ Technical Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **Styling** | Framer Motion, Lucide Icons |
| **Backend** | Python 3.10, FastAPI, Uvicorn |
| **Processing** | PyPDF2, Python-Multipart |
| **API Client** | Axios |

## 📥 Installation & Setup

### 1. Clone & Root Entry
```bash
git clone [https://github.com/machinelearningrukii/resume-analyzer.git](https://github.com/machinelearningrukii/resume-analyzer.git)
cd resume-analyzer
2. Backend Environment (Port 8001)Bashcd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate 
# Linux/Mac:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --host 127.0.0.1 --port 8001 --reload
3. Frontend Environment (Port 5173/3000)Bashcd ../frontend
npm install
npm run dev
🔍 Neural Processing LogicThe engine utilizes a Set Intersection Algorithm:$$Match \% = \left( \frac{\text{Keywords Found in CV}}{\text{Keywords Required in JD}} \right) \times 100$$Normalization: Both JD and CV text are converted to lowercase and stripped of special characters.Matching: The engine scans for a predefined tech-stack array (e.g., React, AWS, Docker) within the JD.Validation: It cross-references these identified "Target Skills" against the candidate's extracted PDF text.🛡️ Project InformationInstitution: SLIITModule: [Insert Your Module Name]Developer: machinelearningrukiiVersion: 3.0.0 (Neural Audit)© 2024 Astra Core Systems. All rights reserved.
---

### 🚀 Final Git Push Commands
Now, push this to your repository so it looks perfect:

```bash
# Move to root if you aren't there
cd .. 

# Add the new README
git add README.md

# If you haven't made a requirements file yet, do it now:
cd backend
pip freeze > requirements.txt
cd ..
git add backend/requirements.txt

# Final Commit
git commit -m "docs: finalize professional readme and requirements"
git push origin main

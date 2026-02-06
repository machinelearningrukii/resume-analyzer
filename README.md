# ASTRA.CORE // Neural Resume Auditor v3.0

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
<img width="1894" height="962" alt="image" src="https://github.com/user-attachments/assets/f786a37f-d388-40ab-aee2-d3881eb3ad00" />
## 📥 Installation & Setup

### 1. Clone & Root Entry
```bash
git clone [https://github.com/machinelearningrukii/Astra-Core-resume-analyzer.git](https://github.com/machinelearningrukii/Astra-Core-resume-analyzer.git)
cd resume-analyzer
## 🏗️ Project Structure
This repository contains both the frontend and backend services:
```text
resume-analyzer/
├── backend/            # FastAPI (Python) Engine
│   ├── main.py         # Neural logic & API endpoints
│   └── requirements.txt


├── frontend/           # React (TypeScript) Dashboard
│   ├── src/            # UI Components & Logic
│   └── package.json
└── README.md           # Documentation

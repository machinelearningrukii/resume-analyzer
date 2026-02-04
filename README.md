# ASTRA.CORE // Neural Resume Auditor v3.0

ASTRA.CORE is a professional-grade AI Resume Screening tool. It automates the process of matching candidate profiles against complex Job Descriptions using a **FastAPI** backend and a **React-TypeScript** frontend.

![System Status](https://img.shields.io/badge/System_Status-Online-emerald)
![Build](https://img.shields.io/badge/Build-v3.0_Stable-blue)
![Architecture](https://img.shields.io/badge/Architecture-Decoupled_Monorepo-white)

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

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ──────────────────────────────────────────────
#  Portfolio Data
# ──────────────────────────────────────────────

ABOUT = {
    "name": "Dineshkumar M",
    "title": "Computer Science Student | Exploring AI, Cybersecurity & Full Stack Development",
    "university": "V.S.B. COLLEGE OF ENGINEERING TECHNICAL CAMPUS",
    "branch": "Computer Science & Engineering",
    "year": "2nd Year",
    "bio": (
        "I'm a curious mind in tech and a Computer Science student on a journey "
        "exploring AI, Cloud, and Cybersecurity. I'm a problem-solving enthusiast "
        "growing my skills in Java and Python, with a passion for building "
        "innovative Full Stack applications and securing the digital landscape."
    ),
    "resumeUrl": "/Dineshkumar_M_Resume.pdf",
    "avatarUrl": "/profile.jpg",
    "stats": [
        {"label": "Projects", "value": "2"},
        {"label": "Learning", "value": "24/7"},
        {"label": "Commits", "value": "100+"},
        {"label": "Tech Stack", "value": "5+"},
    ],
}

SKILLS = [
    {
        "category": "Programming",
        "icon": "💻",
        "items": [
            {"name": "Java", "level": 95},
            {"name": "C", "level": 90},
            {"name": "Python", "level": 70},
        ],
    },
    {
        "category": "Current Focus",
        "icon": "🚀",
        "items": [
            {"name": "Artificial Intelligence", "level": 60},
            {"name": "Cybersecurity", "level": 65},
            {"name": "Full Stack Development", "level": 70},
        ],
    },
    {
        "category": "Frontend",
        "icon": "🎨",
        "items": [
            {"name": "HTML / CSS", "level": 85},
            {"name": "JavaScript", "level": 70},
            {"name": "React.js", "level": 65},
        ],
    },
]

PROJECTS = [
    {
        "id": 1,
        "title": "EditKaro.in Portfolio",
        "description": (
            "A comprehensive portfolio platform developed for a video editing and marketing agency. "
            "Features advanced filtering, dynamic content categorization, and a sleek dark-themed design."
        ),
        "image": "/editkaro-screenshot.png",
        "tags": ["React", "CSS3", "JavaScript", "Responsive Design"],
        "category": "frontend",
        "github": "https://github.com/dinesh7271",
        "live": "https://editkaro.in",
    },
    {
        "id": 2,
        "title": "AquaWatch CBE - AI Outbreak Prediction",
        "description": (
            "An AI-driven early warning system for water-borne diseases in Coimbatore. "
            "Built during an 18-hour hackathon, it uses Random Forest & LSTM models to predict "
            "outbreak risks 7-14 days in advance with high confidence."
        ),
        "image": "/aquawatch-cbe.png",
        "tags": ["React", "FastAPI", "Python", "Machine Learning"],
        "category": "ml",
        "github": "https://github.com/dinesh7271",
        "live": "https://www.linkedin.com/posts/dineshkumar-m-6aaa84379_hackathon-ai-machinelearning-activity-7431224501108965376-gsc1",
    },
]

EDUCATION = [
    {
        "id": 1,
        "year": "2026",
        "degree": "Hackathon Project - AquaWatch CBE",
        "institution": "KPR Institute of Engineering and Technology",
        "description": "Developed an AI-Based Risk Prediction Dashboard in 18 hours using Random Forest and LSTM models to predict water-borne disease outbreaks.",
        "type": "achievement",
    },
    {
        "id": 2,
        "year": "Feb 2025",
        "degree": "Web Development Intern",
        "institution": "Vault of Codes",
        "description": "Completed a month-long intensive internship focused on responsive web design, Google Sheets integration, and frontend development workflows.",
        "type": "experience",
    },
    {
        "id": 3,
        "year": "2024 — Present",
        "degree": "B.E. in Computer Science & Engineering",
        "institution": "V.S.B. COLLEGE OF ENGINEERING TECHNICAL CAMPUS",
        "description": "Currently in my 2nd year. Gaining deep knowledge in Data Structures, AI fundamentals, and Cyber Security while maintaining active participation in tech events.",
        "type": "education",
    },
]

CONTACT = {
    "email": "mdineskumar7271@gmail.com",
    "phone": "+91 8870672615",
    "location": "India",
    "social": {
        "github": "https://github.com/dinesh7271",
        "linkedin": "https://www.linkedin.com/in/dineshkumar-m-6aaa84379",
        "twitter": "https://twitter.com",
        "instagram": "https://instagram.com",
    },
}

# ──────────────────────────────────────────────
#  API Routes
# ──────────────────────────────────────────────


@app.route("/api/about")
def get_about():
    return jsonify(ABOUT)


@app.route("/api/skills")
def get_skills():
    return jsonify(SKILLS)


@app.route("/api/projects")
def get_projects():
    return jsonify(PROJECTS)


@app.route("/api/education")
def get_education():
    return jsonify(EDUCATION)


@app.route("/api/contact")
def get_contact():
    return jsonify(CONTACT)


@app.route("/api/all")
def get_all():
    return jsonify(
        {
            "about": ABOUT,
            "skills": SKILLS,
            "projects": PROJECTS,
            "education": EDUCATION,
            "contact": CONTACT,
        }
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)

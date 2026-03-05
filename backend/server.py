from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ──────────────────────────────────────────────
#  Portfolio Data
# ──────────────────────────────────────────────

ABOUT = {
    "name": "Dineshkumar M",
    "title": "Computer Science Student | Exploring AI, Cybersecurity & App Development",
    "university": "V.S.B. COLLEGE OF ENGINEERING TECHNICAL CAMPUS",
    "branch": "Computer Science & Engineering",
    "year": "2nd Year",
    "bio": (
        "I'm a curious mind in tech and a Computer Science student on a journey "
        "exploring AI, Cloud, and Cybersecurity. I'm a problem-solving enthusiast "
        "growing my skills in Java and Python, with a passion for building "
        "innovative applications and securing the digital landscape."
    ),
    "resumeUrl": "#",
    "avatarUrl": "/profile.jpg",
    "stats": [
        {"label": "Projects", "value": "5+"},
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
            {"name": "App Development", "level": 70},
            {"name": "Cloud Computing", "level": 55},
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
        "title": "Smart AI Portfolio",
        "description": (
            "A modern, highly-responsive portfolio website built with React and a "
            "Python/Flask backend to showcase technical journey and skills."
        ),
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        "tags": ["React", "Flask", "Vite"],
        "category": "fullstack",
        "github": "https://github.com",
        "live": "#",
    },
    {
        "id": 2,
        "title": "Network Security Tool",
        "description": (
            "A prototype tool for basic network vulnerability scanning and "
            "security assessment developed as part of cybersecurity exploration."
        ),
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
        "tags": ["Python", "Networking"],
        "category": "cybersecurity",
        "github": "https://github.com",
        "live": "#",
    },
]

EDUCATION = [
    {
        "id": 1,
        "year": "2024 — Present",
        "degree": "B.E. in Computer Science & Engineering",
        "institution": "V.S.B. COLLEGE OF ENGINEERING TECHNICAL CAMPUS",
        "description": "Currently in my 2nd year. Deepening knowledge in Algorithms, AI fundamentals, and Cybersecurity.",
        "type": "education",
    },
]

CONTACT = {
    "email": "mdineskumar7271@gmail.com",
    "phone": "+91 XXXXX XXXXX",
    "location": "India",
    "social": {
        "github": "https://github.com/dineshkumar",
        "linkedin": "https://www.linkedin.com/in/dineshkumar-m-6aaa84379/",
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

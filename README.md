# Muhammad Zaki Kurniawan - Portfolio Website

> Official interactive portfolio website built directly from the **Apple Developer Academy Indonesia Application** presentation deck.

---

## 🌟 Overview & Identity

- **Name**: Muhammad Zaki Kurniawan
- **Target**: Apple Developer Academy Indonesia Application
- **Specialization**: Computer Science (Intelligent Systems Stream), BINUS University (5th Semester)
- **Roles**: Developer & UX Designer
- **Leadership**: Member of HIMTI BINUS Commission One (Study and Lecture)
- **Core Philosophy**: *"I specialize at emerging machine learning models to create recommendation systems that understand everyone, including you."*

---

## 🚀 Key Features

1. **Apple Academy & Neo-Brutalist Visual Design**:
   - Signature vibrant royal blue, playful deck badges (`Developer`, `UX Designer`, `Hi, i am`), and geometric deck accents faithfully matching the application slides.
   - Clean card hierarchy, bold sticker shadows, micro-interactions, and responsive layout for mobile, tablet, and desktop.

2. **5 Featured Projects with Full Case Studies**:
   - **GymBot** (AI Fitness Chatbot using fine-tuned Qwen LoRA model)
   - **Hybrid Movie Recommender System 🎬** (Content-Based + Demographic Filtering)
   - **CrowdAID** (AI-Powered Smart Hospital Recommendation System)
   - **ShipDecKK** (Ship Marketplace UI/UX & Web Design)
   - **LostFindings** (Community Item Recovery App & Quality Assurance)
   - Each project card includes role, year, summary, direct links (GitHub / Figma), and a **Case Study Deep Dive Modal** displaying the exact reflective questions & answers from the deck.

3. **Interactive Live Playgrounds / Simulators**:
   - 🤖 **GymBot AI Simulator**: Test simulated fitness prompts ("Waktu 30 menit", "Latihan dada tanpa alat", "Split 3 hari") and receive responsive conversational guidance.
   - 🎬 **Hybrid Movie Recommender Widget**: Select age, gender, occupation, and seed film to compute real-time hybrid movie rankings with predicted star ratings.

4. **Original 13-Page Slide Deck Viewer**:
   - Full 16:9 interactive carousel allowing reviewers and mentors to browse every original presentation slide in crisp high-definition, plus a 1-click download button for `MuhammadZakiKurniawan_Portofolio_Academy.pdf`.

5. **Direct Connect & Contact Integration**:
   - Verified links to WhatsApp (+62 819 1988 1319), Email with 1-click clipboard copy, LinkedIn, and GitHub.
   - Interactive quick-message contact form.

---

## 📁 Project Structure

```
├── index.html                   # Main portfolio webpage
├── assets/
│   ├── css/
│   │   └── style.css            # Responsive styles and neo-brutalist theme
│   ├── js/
│   │   ├── projects-data.js     # Structured dataset from the PDF slides
│   │   └── main.js              # Interactive simulators, filters & modal
│   └── images/
│       ├── profile.png          # High-resolution profile photo
│       ├── project-*.png        # High-res project previews
│       └── page_1.png .. 13.png # Full slide deck images
├── MuhammadZakiKurniawan_Portofolio_Academy.pdf # Original application document
└── README.md
```

---

## 💻 How to View & Run Locally

### Option 1: Double-click to open
Simply double-click [`index.html`](file:///Users/mzakik10/Documents/Magangg/index.html) or run in terminal:
```bash
open index.html
```

### Option 2: Run a local server
```bash
python3 -m http.server 3000
# Open http://localhost:3000 in your browser
```

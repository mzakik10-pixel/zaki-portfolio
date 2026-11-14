# Muhammad Zaki Kurniawan - Portfolio Website (Vercel Ready)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

> Official interactive portfolio website built directly from the **Apple Developer Academy Indonesia Application** presentation deck, fully configured for instant deployment on [Vercel](https://vercel.com).

---

## 🌟 Overview & Identity

- **Name**: Muhammad Zaki Kurniawan
- **Target**: Apple Developer Academy Indonesia Application
- **Specialization**: Computer Science (Intelligent Systems Stream), BINUS University (5th Semester)
- **Roles**: Developer & UX Designer
- **Leadership**: Member of HIMTI BINUS Commission One (Study and Lecture)
- **Core Philosophy**: *"I specialize at emerging machine learning models to create recommendation systems that understand everyone, including you."*

---

## 🚀 How to Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended)

1. Create a new repository on your GitHub account (e.g. `zaki-portfolio`).
2. Link and push your local project to GitHub:
   ```bash
   git remote add origin https://github.com/mzakik10-pixel/zaki-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Open [vercel.com](https://vercel.com) and log in with your GitHub account.
4. Click **"Add New..."** > **"Project"**.
5. Select your `zaki-portfolio` repository and click **"Deploy"**.
6. Vercel will automatically detect `vercel.json` and deploy your site to a live URL (e.g. `https://zaki-portfolio.vercel.app`) in seconds with free SSL!

---

### Method 2: Deploy via Vercel CLI

If you have Node.js / Vercel CLI installed:
```bash
# If using npx (no global install needed):
npx vercel

# Or install Vercel CLI globally:
npm i -g vercel
vercel
```
Follow the interactive prompt, select your scope, and your website will be deployed immediately.

---

### Method 3: Drag & Drop Deploy

1. Compress this folder or open [vercel.com/new](https://vercel.com/new).
2. Drag and drop the project folder directly into the Vercel dashboard.

---

## ⚙️ Vercel Configuration (`vercel.json`)

The project includes an optimized `vercel.json`:
- **Clean URLs**: Enables clean routing without `.html` extensions.
- **Edge Asset Caching**: 1-year immutable caching for static images, CSS, and JS under `/assets/`.
- **Security Headers**: Includes `X-Content-Type-Options`, `X-Frame-Options`, and `X-XSS-Protection`.

---

## 📁 Project Structure

```
├── vercel.json                  # Vercel deployment configuration
├── package.json                 # Project metadata & npm scripts
├── .gitignore                   # Git ignore rules
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

## 💻 Local Preview

Run a local HTTP server anytime:
```bash
python3 -m http.server 3000
# Open http://localhost:3000 in your browser
```
Or simply double-click [`index.html`](file:///Users/mzakik10/Documents/Magangg/index.html).

# Evaluating AI Systems for Product Managers
### Course Landing Page

A professional, lightweight course landing page for an e-learning module built with Synthesia, Articulate Storyline 360, and hosted on GitHub Pages.

---

## Before You Publish — Two Things to Update

### 1. Add your video file
Copy your MP4 to:
```
assets/video/intro.mp4
```
See `assets/video/README.txt` for specifications and a YouTube/Vimeo alternative.

### 2. Replace the Storyline URL
Open `index.html` and find this line near the top of the `<body>` tag:
```html
<body data-storyline-url="https://REPLACE_WITH_YOUR_STORYLINE_URL">
```
Replace `https://REPLACE_WITH_YOUR_STORYLINE_URL` with your published Storyline URL, for example:
```html
<body data-storyline-url="https://yourusername.github.io/your-storyline-module/story.html">
```
That single change automatically updates **all** launch buttons on the page.

---

## Local Preview

No build step needed. Open the file directly:

```bash
open index.html          # macOS
start index.html         # Windows
```

Or use the **VS Code Live Server** extension for hot-reload during editing.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `ai-pm-course`)
2. Push this folder's contents to the `main` branch
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch** → `main` → `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://yourusername.github.io/ai-pm-course/
```

It may take 1–2 minutes for the first deployment to appear.

---

## Folder Structure

```
AI PM Website/
├── index.html              ← Main page (edit content here)
├── assets/
│   ├── css/
│   │   └── styles.css      ← All styles (custom properties at the top)
│   ├── js/
│   │   └── main.js         ← Progressive enhancement only
│   └── video/
│       ├── README.txt      ← Instructions for adding your video
│       └── intro.mp4       ← Your video file (add this yourself)
└── README.md               ← This file
```

---

## Customizing Content

All page content lives in `index.html`. Each section is clearly commented:

| Section | Comment marker |
|---|---|
| Navigation | `NAVIGATION` |
| Hero | `SECTION 1: HERO` |
| Course Overview | `SECTION 2: COURSE OVERVIEW` |
| Why It Matters | `SECTION 3: WHY THIS COURSE MATTERS` |
| Learning Objectives | `SECTION 4: LEARNING OBJECTIVES` |
| How It Works | `SECTION 5: HOW THE COURSE WORKS` |
| EVAL Framework | `SECTION 6: EVAL FRAMEWORK PREVIEW` |
| Start the Module | `SECTION 7: START THE MODULE` |
| Before You Begin | `SECTION 8: BEFORE YOU BEGIN` |
| About | `SECTION 9: ABOUT THIS PROJECT` |

**Colors** are defined as CSS custom properties at the top of `assets/css/styles.css` — change the values in the `:root` block to retheme the whole site.

---

## Tools Used

- **[Synthesia](https://www.synthesia.io)** — AI video platform for the intro video
- **[Articulate Storyline 360](https://articulate.com/360/storyline)** — Interactive simulation
- **[GitHub Pages](https://pages.github.com)** — Static site hosting

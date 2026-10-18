# Tushar Pawar — Creative Portfolio

A responsive editorial portfolio using HTML, CSS and vanilla JavaScript. It uses oversized condensed display typography, a handwritten accent, dark cinematic surfaces, magenta/orange contrast and subtle grain. The supplied font images are used as visual references; this project uses Google Fonts alternatives rather than bundling commercial font files.

## Files
- `index.html` — page content and structure
- `style.css` — design, animations and responsive layout
- `script.js` — mobile navigation, scroll progress and reveal animations
- `assets/tushar.jpg` — your portrait
- `Jenkinsfile` — basic CI validation and optional Render deploy hook
- `render.yaml` — Render static-site configuration

## Run locally
Open `index.html` in a browser or use VS Code Live Server. No Node.js install or build command is required.

## Before publishing
Check all links and project claims. For Fish Detection, Deepfake Detection and other projects, replace profile links with exact repository URLs when available. Add a resume PDF to `assets/` and a link in the HTML if you want a downloadable CV.

## Push to GitHub
Create a repository (e.g. `tushar-creative-portfolio`), open a terminal in this folder, then run:
```bash
git init
git add .
git commit -m "Build creative portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tushar-creative-portfolio.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username.

## Deploy on Render
This is a **static site**, not a Node web service. Connect the GitHub repository to Render as a Static Site. The included `render.yaml` configures:
- Build command: `echo "Static site - no build required"`
- Publish directory: `.`

Render can redeploy automatically on each push to the connected branch.

## Jenkins pipeline
The `Jenkinsfile` checks that the main HTML, CSS, JS and image files exist. It can optionally call a Render deploy hook when a Jenkins secret text credential with ID `RENDER_DEPLOY_HOOK` is configured. Create the hook in Render and save it in Jenkins under **Manage Jenkins → Credentials** as a Secret text credential. To trigger it, run the pipeline with the `TRIGGER_RENDER_DEPLOY` parameter enabled. Do not commit the hook URL to GitHub.

Suggested flow: **GitHub push → Jenkins validation → optional Render deploy hook → Render static site**.
If Render GitHub auto-deploy is enabled, the hook is optional and may trigger a duplicate deploy.

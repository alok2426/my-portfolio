# Alok Pal — Portfolio Website

A responsive, minimal portfolio website with a project gallery showing real dashboard screenshots.

## Folder structure
- `index.html` – page content
- `styles.css` – styling
- `script.js` – mobile menu, project tabs and full-size image viewer
- `assets/img/` – dashboard screenshots (cropped from your PDFs and image)

## Run locally
Open `index.html` in your browser. No build tools needed.

## Before publishing
Contact details are already filled in. To change them, edit `index.html`:
- `YOUR_EMAIL@example.com` with your professional email
- `YOUR-LINKEDIN-USERNAME` with your LinkedIn username
- the GitHub link with your profile URL

## Add or change screenshots
Put a new image in `assets/img/`, then copy an `<img>` line inside a project's `.v-imgs` block (and a matching tab button in `.v-tabs`) in `index.html`.

## Publish with GitHub Pages
1. Create a GitHub repository and upload everything in this folder to the root.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Confidentiality
The screenshots show internal company dashboards, including real proposal, customer and address data. Get your employer's approval before publishing, and blur or remove sensitive details first.

# Alok Pal | Portfolio Website

A responsive, single-page portfolio for **Alok Pal**, a Data Analyst and Full-Stack Dashboard Developer. It showcases real dashboards built with Python, FastAPI, React.js, Oracle SQL and Tableau.

Built with plain HTML, CSS and JavaScript. There is no framework, build step or package installation.

**Live site:** `https://alok2426.github.io/alok-pal-portfolio/portfolio` *(available after you enable GitHub Pages, see below)*

## Features

- Hero section with an auto-rotating preview of the dashboard projects
- Project gallery with tabs for each dashboard view
- Full-size screenshot viewer with next, previous and keyboard (arrow keys, Esc) controls
- About and toolkit section side by side
- "How I work" data-flow overview and contact section
- Fully responsive layout with a mobile menu
- Respects reduced-motion settings (no auto-rotating slides)

## Projects featured

| Project | Stack |
| --- | --- |
| CES Regulatory Management & Analytics Dashboard | React.js, FastAPI, Python, Pandas, Oracle SQL, oracledb |
| New Connection Tracking Dashboard | HTML, CSS, JavaScript, FastAPI (Python) |
| PMG Energy Analytics Suite | Tableau |
| Data Pipeline Health Monitors | Python, web dashboard |

## Folder structure

```
alok-pal-portfolio/
├── index.html        # Page content
├── styles.css        # Styling
├── script.js         # Mobile menu, project tabs, hero slideshow, image viewer
├── README.md
└── assets/
    └── img/          # Dashboard screenshots
```

## Run locally

1. Clone or download this repository.
2. Open `index.html` in your browser.

Keep the `assets` folder next to `index.html`, or the images will not load.

## Deploy with GitHub Pages

1. Push the contents of this folder to the root of a GitHub repository (for example `alok-pal-portfolio`).
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then click **Save**.
5. Wait a minute or two. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Customize

- **Text and links:** edit `index.html`. Contact details are in the section with `id="contact"`.
- **Colours and spacing:** edit `styles.css`. The main green accent is `#537b67`.
- **Add a screenshot to a project:** save the image in `assets/img/`, then add an `<img>` line inside that project's `.v-imgs` block and a matching `<button>` in its `.v-tabs` block in `index.html`.
- **Hero slideshow:** it automatically uses the first screenshot of each project, so no extra setup is needed.

## Confidentiality notice

The screenshots in `assets/img/` come from internal company dashboards and show real operational data, including proposal names, customer names and addresses. Before making this repository public:

- Get your employer's approval to publish the screenshots.
- Blur or remove any customer names, addresses, internal URLs and other sensitive details.
- Do not add company source code, original Excel files, database credentials or internal API details to this repository.

If you cannot publish the real screenshots, replace them with a demo version built on dummy data.

## Contact

- **Email:** alok.pal2606@gmail.com
- **LinkedIn:** [linkedin.com/in/alok-pal26](https://www.linkedin.com/in/alok-pal26)
- **GitHub:** [github.com/alok2426](https://github.com/alok2426)

© Alok Pal. All rights reserved.

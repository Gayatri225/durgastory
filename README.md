# Jai Maa Durga — static story site

This is a small static website about Maa Durga. It ships as a tiny Nginx image and works with your existing CI/CD (GitHub Actions → ECR → EC2 via SSH).

## Structure
- `site/index.html` — content
- `site/styles.css` — styles, light/dark theme
- `site/script.js` — small JS for theme & image placeholders
- `site/images/` — drop `durga1.jpg`, `durga2.jpg`, `durga3.jpg`
- `Dockerfile` — Nginx static server
- `.github/workflows/ci-cd.yml` — pipeline

## Local build
```bash
docker build -t maa-durga .
docker run -p 8080:80 maa-durga
# open http://localhost:8080
```

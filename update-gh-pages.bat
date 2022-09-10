@echo off
npm run prerender
git add .
git commit -m "STANDARDIZED COMMIT: GH-PAGES"
git push -u origin main
git subtree push --prefix dist/digital-overdose/browser/ origin gh-pages

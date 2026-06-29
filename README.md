# AgenticRL Quiz App

This folder contains a static quiz app for the notes in this repository.

## Files

- `index.html`: app entry
- `styles.css`: responsive layout
- `app.js`: quiz interaction and local progress storage
- `data/quiz-data.js`: knowledge summaries and multiple-choice questions

## Mobile Access

The easiest mobile route is GitHub Pages:

1. Push this folder to GitHub.
2. Open repository settings.
3. Enable GitHub Pages from the `main` branch.
4. Visit the Pages URL on your phone.

For local LAN access, run a static server on the computer and open the computer IP from the phone.

```powershell
cd path\to\AgenticRL-Quiz
py -m http.server 8000
```

Then open `http://your-computer-lan-ip:8000` on the phone.

Progress is stored in the browser's `localStorage`, so it stays on the same device and browser.


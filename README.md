# लक्ष्य · Lakshya

A linked placement-prep tracker for DS/ML roles: 14 syllabus areas, 137 topics and 355 resources (videos, lectures, assignments, practice sets) from CampusX, Mitesh Khapra CS7015, TuteDude, CodeWithHarry and the DSA with Python video.

Every resource exists once. Tick it in **Topic list** or **Course checklist** and it ticks everywhere it appears, and the **Areas** view updates on its own.

## Features

- Three linked views: Areas → Resource, Topic list, Course checklist
- Header numbers: overall %, Must %, hours of video left, daily streak, days to the mock-OA date, 14-day activity strip
- "Next up": the first five unticked Must items, in syllabus order
- Search, Must / Important filter, hide done
- Light and dark themes
- Backup & restore: copy or download your ticks, then restore them on another device

Progress is saved in your browser's local storage. Use **Backup** to move it between devices or before clearing browser data.

## Run it on GitHub Pages

1. Create a new repository (for example `lakshya`) and upload everything in this folder, keeping the `assets/` folder.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
3. Your app will be live at `https://<your-username>.github.io/lakshya/` within a minute or two.

To run it locally, just open `index.html` in a browser.

## Editing the content

All content lives in `build/data.py`. Add, remove or move items there, then regenerate the data file:

```bash
python3 build/data.py
```

This rewrites `assets/data.js`. Item ids stay stable, so your existing ticks are kept. `build/preview.py` bundles everything into one HTML file if you ever need a single-file copy.

## Files

```
index.html          the app shell
assets/style.css    styles (light + dark tokens)
assets/app.js       app logic: rendering, linked ticks, storage, backup
assets/data.js      generated content (do not edit by hand)
build/data.py       the master list of areas, topics and items
build/preview.py    optional single-file bundler
```

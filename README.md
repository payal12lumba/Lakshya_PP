# Lakshya · लक्ष्य

A placement-prep tracker for the DS/ML plan: 14 syllabus areas, 10 sources, 355 items.
Every video, lecture, assignment and practice set is one checkbox, and the same tick shows up
in the Courses view, the Areas view and Up next.

## Features
- **Courses / Areas / Up next** views, with per-course and per-area progress
- **Steps inside every item**: playlists come split into their videos or lessons; add your own
  steps (assignment, notes, revision, practice) with an optional link to each one
- **Links**: each item opens a YouTube or web search by default; paste the exact URL to replace it
- Notes per item, search, tier and type filters, hide-done
- Works offline and installs as an app (Android, desktop Chrome/Edge, iOS "Add to Home Screen")
- Backup and restore your progress as JSON to move it between devices

## Put it on GitHub Pages
1. Create a new repository, e.g. `lakshya`.
2. Upload every file in this folder to the repository root (or `git push` them).
3. Settings → Pages → Source: **Deploy from a branch** → `main` / `root` → Save.
4. Open `https://<your-username>.github.io/lakshya/` and press **Install app**
   (on iPhone: Share → Add to Home Screen).

```bash
git init && git add . && git commit -m "Lakshya prep tracker"
git branch -M main
git remote add origin https://github.com/<your-username>/lakshya.git
git push -u origin main
```

## Editing the plan
All items live in `data.js`, one per line: `title | duration | areas | tier`.
Add a line under any `# course` header and refresh. Item IDs come from the title, so editing
a title starts that item fresh; adding or reordering lines keeps existing progress.
After changing files, bump `CACHE` in `sw.js` (e.g. `lakshya-v3`) so installed copies update.

Progress is stored in your browser (localStorage). Use **Backup** before clearing site data.

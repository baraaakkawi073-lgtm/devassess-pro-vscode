# DevAssess Pro — VS Code / Live Server Edition

A **completely static** technical assessment platform: six QCM quiz tracks, instant scoring with per-question explanations, a technical case study, and a built-in source-code viewer.

No build step. No backend. No `npm install`. Open the folder in **VS Code**, start **Live Server**, and the whole platform runs.

> Looking for the full-stack version (React + Express REST API, database-free in-memory banks, unit tests, CI)?
> See [`devassess-pro`](https://github.com/baraaakkawi073-lgtm/devassess-pro).

---

## Quick start (VS Code + Live Server)

1. Open this folder in VS Code (`File → Open Folder…`).
2. Install the recommended extension **Live Server** by Ritwick Dey
   (VS Code will prompt you automatically thanks to `.vscode/extensions.json`, or run `ext install ritwickdey.LiveServer`).
3. Open `index.html` and click **Go Live** in the status bar
   — or right-click `index.html` → **Open with Live Server**.
4. The app opens at `http://127.0.0.1:5500/`.

Prefer the terminal? Any static server works just as well:

```bash
npx serve .        # or: python -m http.server 5500
```

### Why can't I just double-click `index.html`?

Browsers block `fetch()` on `file://` URLs. The Case Study tab (loads `docs/Technical_Report.md`) and the Code viewer (loads the project's own source files) both use `fetch()`, so they need an HTTP origin. The quizzes still work from `file://`, but the platform is designed to run through Live Server — if `fetch()` fails, the UI shows a clear message telling you how to start it.

---

## Features

- **6 quiz tracks, 60 questions** — 10 questions per track, instant grading, pass threshold **70%**.
- **Per-question feedback** — after selecting an option you immediately see whether it was correct plus a written explanation; at the end you get a full breakdown of every question.
- **Score report** — animated score ring, passed/failed banner, per-question review, retake button.
- **Logical analysis track** — pattern and deduction puzzles alongside the technical tracks.
- **Case Study tab** — renders `docs/Technical_Report.md` with [marked](https://github.com/markedjs/marked) into a formatted engineering report.
- **Built-in code viewer** — browse the four project files (`index.html`, `app.js`, `README.md`, `docs/Technical_Report.md`) with line/byte counts and one-click copy, served live by Live Server.
- **Hash routing** — `#/`, `#/quiz/<track>`, `#/report`; refresh-safe and shareable, no server rewrites needed.
- **Dark / light theme** — persisted in `localStorage` under `devassess-theme`.
- **Responsive** — mobile through desktop, Tailwind utility styling plus an embedded custom style block.
- **Accessible** — semantic landmarks, keyboard-navigable options, `Esc` closes the code modal, ARIA labels on icon buttons.

---

## Quiz tracks

| Code | Track | Focus | Questions |
|------|-------|-------|-----------|
| `DSA` | Data Structures & Algorithms | Complexity, linear structures, trees, graphs, algorithm design | 10 |
| `OOP` | Object-Oriented Programming | Four pillars, SOLID, inheritance vs. composition, polymorphism | 10 |
| `WEB` | HTML, CSS & JavaScript | Semantics, box model, flexbox, scoping, events, browser APIs | 10 |
| `MERN` | MERN Stack Development | MongoDB, Express, React, Node.js, REST, hooks, auth | 10 |
| `ASPX` | ASP.NET Core & C# | Middleware, DI, routing, EF Core, modern C# | 10 |
| `LOG` | Logical Analysis | Pattern recognition and deduction puzzles | 10 |

Grading is instant and local: one point per correct answer, **≥ 70% passes**, unanswered questions score zero.

---

## Project structure

```
DevAssess-Pro-VSCode/
├── index.html                    # Layout, Tailwind CDN config, embedded styles, all views + code modal
├── app.js                        # Question banks (60), scoring, hash router, theme, report + code loader
├── README.md                     # This file
├── docs/
│   └── Technical_Report.md       # Case study rendered in the "Case Study" tab
└── .vscode/
    ├── extensions.json           # Recommends the Live Server extension
    └── settings.json             # Pins Live Server to port 5500
```

### Technologies

| Layer | Choice |
|-------|--------|
| Markup & layout | HTML5 + [Tailwind CSS via CDN](https://cdn.tailwindcss.com) (inline config: `darkMode: 'class'`, custom brand palette) |
| Custom styling | Embedded `<style>` block in `index.html` (components, markdown typography, print) |
| Logic | Vanilla ES2020+, no framework, no bundler |
| Markdown rendering | [marked](https://cdn.jsdelivr.net/npm/marked/marked.min.js) (CDN) |
| Server | VS Code Live Server (or any static file server) |

---

## Architecture at a glance

- **`app.js`** holds everything: `CATEGORIES` (track metadata), `QUESTIONS` (60 items with `answer` index + `explanation`), `CODE_FILES` (code-viewer tabs), and the app state machine (`state.categoryId`, `state.index`, `state.answers`, `state.results`, `state.submitted`).
- **Routing** is hash-based (`parseRoute` / `navigate` on `hashchange`), toggling `#view-home`, `#view-quiz`, `#view-report`.
- **Scoring** happens in `gradeSubmission()` — it returns `{ score, total, percentage, passed, threshold, unanswered, breakdown }`.
- **`loadReport()`** fetches `docs/Technical_Report.md` once and renders it with `marked`.
- **`openCodeViewer(file)`** fetches any of the four project files into the modal with line/byte metadata and copy-to-clipboard.

---

## Security & scope notes (read this)

This is a **demonstration / self-study** edition:

- All correct answers and explanations ship in `app.js`. Anyone with the source (including the in-app Code tab) can read them. That is intentional for a static demo — **do not use this edition for proctored or high-stakes assessments**.
- There is no server, no database, no accounts and no network calls beyond loading the two CDN assets and the local markdown/code files.
- The full-stack edition removes answers from the wire (`GET /api/quiz/:id` strips them) and grades server-side; use it if you need a tamper-resistant flow.

---

## Comparison with the full-stack edition

| | This edition | [`devassess-pro`](https://github.com/baraaakkawi073-lgtm/devassess-pro) |
|---|---|---|
| Stack | Static HTML/CSS/JS | React + Vite + Express |
| Setup | Open folder → Live Server | `npm install` → `npm run dev` / `npm run start` |
| Questions | Embedded in `app.js` | Server-side banks, answers stripped from responses |
| Grading | Client-side, instant | Server-side `POST /api/quiz/:id/check` and `/evaluate` |
| Report | Markdown fetched from `docs/` | Markdown API endpoints + raw mode |
| Tests / CI | — | 8 unit tests, GitHub Actions workflow |

---

## License

MIT — free to use, modify and share.

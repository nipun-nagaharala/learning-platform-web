# Tutor Portal — Static Website

A multi-page static website (HTML, CSS, JavaScript — no build step, no framework, no backend) for a
tutor/lecture portal: home, about, subjects, tutors, lectures, contact, login/registration, and a
student/admin dashboard.

## Getting started

No installation required. Either:

- Open the entry page directly: `Home/Home Page SLIATE.html`, or
- Serve the folder with VS Code **Live Server** (recommended) or any static server:
  `npx serve .` / `python -m http.server`

The site is meant to be served from the repository root — all links are relative.

## Pages

| Folder | Contents |
| --- | --- |
| `assets/` | All images and videos, shared across every page (deduplicated) |
| `Home/` | Landing page (entry point) |
| `About/` | About us |
| `Subjects/` | Subject listings, nested `Lecture/` page |
| `Tutors/` | Tutor/staff profiles |
| `Lecture/` | Lecture listings, logout page |
| `Contact/` | Contact form and details |
| `Login & Registration/` | Login pages (general, admin, student, teacher) |
| `Dashboard/` | Admin panel, courses, student admin, student profile |
| `Other/` | Instructor profile and program cards (standalone pages) |

## Demo credentials

`Lecture/logout.html` checks a **client-side demo login** hardcoded in `Lecture/script.js`:

```
username: admin
password: 1234
```

This is a placeholder for the portfolio/demo only. There is no server-side authentication anywhere
in this project — do not treat it as real security, and never reuse this pattern in production.

## Known limitations

- Several pages link to assets that do not exist in this repo (leftovers from the original
  templates): `1.jpg`–`6.jpg`, `thumbnail.jpg`, `style.css`/`style1.css` inside `Dashboard/`,
  and the blog/article pages (`Artical Template/`, `Nutrition/`, `Fitness/`, `Mental Health/`).
  These links are broken by design and were left untouched rather than guessed at.
- Dashboard pages `2.html`, `lv.html`, `teacher.html` reference sub-pages that were never created.
- Contact details (phone, email, address) are placeholders for a fictional institution.

## Content licensing

Images and videos in this repository come from mixed sources (stock photo/video sites, downloaded
banners, personal photos). Before publishing or reusing this project, confirm that every asset is
licensed for redistribution — replace any that are not. Tutor names and photos are illustrative.

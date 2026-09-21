# Common App Portfolio Website Plan

## Goal
Build an admissions-grade, mobile-responsive Common App portfolio for Ezekiyas (Hezekiah) Tsegaye highlighting **Chemistry with Computer Science** ("From Atoms to Algorithms: Engineering Computational Solutions for Physical Realities") using React, TypeScript, Vite, and Tailwind CSS.

## Tasks
- [x] Task 1: Scaffold React + TypeScript + Vite project with Tailwind CSS & Lucide icons → Verify: `npm run build` succeeds with zero errors in `/home/hezekiah/portfolio`.
- [x] Task 2: Create typed profile schema and populate `src/data/profileData.ts` with authentic education, honors, activities, and research (Pyrolysis, FRADSCR Maji Alert, Trivia Blitz, Scholarship Bot) → Verify: Types pass `tsc --noEmit` and data accurately mirrors user's Common App record.
- [x] Task 3: Build Header, Theme Toggle (Academic Prestige dark/light mode), and Hero Section showcasing motto, intended major, and quick admissions actions → Verify: Toggle smoothly shifts themes; motto and intended major are clearly legible on desktop and mobile.
- [x] Task 4: Build Admissions "At-a-Glance" Metric Bar and Academic Profile Section (St. John Baptist De La Salle, 3.93 GPA, Rank 5/250, National Exam 558/600, Honors) → Verify: Academic stats, course lists, and honor badges render with accessible contrast.
- [x] Task 5: Build Curated Research & Projects Grid (spotlighting Chemistry & Computational ML: Pyrolysis, FRADSCR Maji Alert, Trivia Blitz, Scholarship Bot) with interactive deep-dive modal → Verify: Clicking any card opens a modal showing the chemical/computational problem, architecture, ML stack, and metrics.
- [x] Task 6: Build Common App-Aligned Extracurriculars & Leadership Section (Chemistry Club President, IChC Ambassador, Academic Tutor, EGATE Advanced ML, DSA 2.0, DevCareer, TEDx Speaker) → Verify: All 7 activities render with roles, descriptions, and impact badges.
- [x] Task 7: Build Print / Export Admissions Dossier Mode & Contact Section → Verify: Triggering print stylesheet produces a clean, high-density, printable admissions one-pager without UI clutter.
- [x] Task 8: Verification & Production Build → Verify: Run `npm run build` and `npm run preview` to confirm zero console warnings, full responsiveness, and fast load times.

## Done When
- [x] Portfolio accurately spotlights Chemistry with Computer Science and the user's motto.
- [x] Only requested research/projects appear (Pyrolysis, FRADSCR Maji Alert, Trivia Blitz, Scholarship Bot); omitted projects are completely excluded.
- [x] All Common App education stats (3.93 GPA, Rank 5/250, 558/600 exam, honors) and activities are rendered.
- [x] Dark/Light mode works seamlessly with the Academic Prestige aesthetic.
- [x] Production build passes cleanly with zero errors.

## Notes
- Excluded per user request: Ethio-Lingo, Classic Cuts Bot, and G0DM0D3 AI Research.
- Emphasize the chemistry focus: Independent Pyrolysis research, Chemistry Club Presidency, IChC Ambassador, and State Chemistry Competition award.

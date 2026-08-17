# Portfolio Website

A clean, lightweight personal portfolio built with React and Vite. The site is designed to showcase projects visually — not to duplicate a full resume.

Projects are the main focus. Each project opens in a dedicated showcase modal with problem context, process, visual evidence, findings, and a GitHub link at the end.

---

## Project Overview

This website helps you present your work to recruiters and collaborators. It includes:

- **Hero** — name, role, short intro, resume/projects buttons, social links, profile image
- **Projects** — filterable project cards with detailed showcase modals
- **Skills** — grouped skill tags (no proficiency bars)
- **Experience** — timeline of roles and learning
- **Certifications** — credential cards with links
- **Footer** — name, role, and contact links

All personal content uses clearly marked placeholders (for example `[YOUR NAME]`) so you can replace them easily.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4 (theme tokens in `src/index.css`) + inline styles in components |
| Fonts | DM Serif Display, Inter, JetBrains Mono (Google Fonts) |
| Package manager | pnpm |

There is no backend, database, or authentication.

---

## Folder Structure

```
Portfolio/
├── index.html              # HTML shell
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite + Tailwind configuration
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Page layout and section order
│   ├── index.css           # Tailwind import, theme colors, fonts, global styles
│   ├── data/
│   │   ├── site.ts         # Name, role, intro, resume URL, social links
│   │   ├── projects.ts     # All project content and types
│   │   ├── skills.ts       # Skill categories
│   │   ├── experience.ts   # Experience entries
│   │   └── certifications.ts
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Footer.tsx
│   │   └── SectionLabel.tsx
│   └── assets/
│       ├── profile/
│       │   └── profile-placeholder.svg
│       └── projects/
│           └── _shared/    # Reusable placeholder images
```

---

## Architecture

The app is a single-page layout:

1. `main.tsx` mounts `App` into `#root`.
2. `App.tsx` renders sections in order: Nav → Hero → Projects → Skills → Experience → Certifications → Footer.
3. **Data lives in `src/data/`** — components read from these files instead of hardcoding content.
4. **Projects** render cards from `projects.ts`. Clicking a card opens `ProjectShowcase.tsx` (a modal dialog).
5. **Styling** uses CSS variables defined in `index.css` (`--font-display`, `--color-accent`, etc.) plus component-level inline styles that match the Figma design direction.

```
site.ts / skills.ts / experience.ts / certifications.ts
                    ↓
              App.tsx (layout)
                    ↓
         Section components (Hero, Skills, …)
                    ↓
projects.ts → Projects.tsx → ProjectShowcase.tsx
```

---

## Sections

### Hero

File: `src/components/Hero.tsx`  
Data: `src/data/site.ts`

Two-column layout (stacks on mobile):

- Left: name, role, intro, View Resume / View Projects buttons, social icons
- Right: profile image placeholder

### Projects

Files: `src/components/Projects.tsx`, `src/components/ProjectShowcase.tsx`  
Data: `src/data/projects.ts`

- Filter tabs: All, Data Analytics, AI / ML, Web Development, Other
- Cards show thumbnail, title, category, description, technology tags
- Clicking a card opens the showcase modal (does **not** go to GitHub immediately)
- GitHub link appears at the bottom of the showcase

### Skills

File: `src/components/Skills.tsx`  
Data: `src/data/skills.ts`

Skills grouped by category with tag chips. No percentage bars.

### Experience

File: `src/components/Experience.tsx`  
Data: `src/data/experience.ts`

Timeline cards with title, organization, duration, and description.

### Certifications

File: `src/components/Certifications.tsx`  
Data: `src/data/certifications.ts`

Grid of certification cards with credential links.

### Footer

File: `src/components/Footer.tsx`  
Data: `src/data/site.ts`

Minimal footer with name, role, GitHub, LinkedIn, and email.

---

## Project System

### Data shape

Each project in `src/data/projects.ts` follows this structure:

| Field | Required | Description |
| --- | --- | --- |
| `id` | Yes | Unique slug (e.g. `"sales-dashboard"`) |
| `title` | Yes | Project name |
| `category` | Yes | `"Data Analytics"`, `"AI / ML"`, `"Web Development"`, or `"Other"` |
| `description` | Yes | One-line summary for the card |
| `technologies` | Yes | Array of tech tags |
| `thumbnail` | Yes | Card image (import from `src/assets/`) |
| `thumbnailAlt` | Yes | Alt text for thumbnail |
| `context` | Yes | Short header context in the showcase |
| `problem` | Yes | Problem or question being addressed |
| `data` | No | `{ source, description, characteristics? }` for data projects |
| `approach` | Yes | Array of process steps |
| `visualEvidence` | Yes | Array of `{ type, src, alt, caption? }` images or videos |
| `findings` | Yes | Array of key insight strings (shown as cards) |
| `conclusion` | Yes | Short takeaway |
| `repositoryUrl` | Yes | GitHub repository URL |
| `demoUrl` | No | Live demo URL |

### How to add a new project

**Step 1 — Add images**

Create a folder for your project:

```
src/assets/projects/my-new-project/
├── thumbnail.png
├── dashboard.png
└── chart.png
```

Use PNG or JPG for real screenshots. Replace the shared SVG placeholders when you have real assets.

**Step 2 — Import assets in `projects.ts`**

```typescript
import myThumb from "../assets/projects/my-new-project/thumbnail.png";
import myDashboard from "../assets/projects/my-new-project/dashboard.png";
```

**Step 3 — Add a project object**

Add a new entry to the `projects` array in `src/data/projects.ts`:

```typescript
{
  id: "my-new-project",
  title: "Retail Sales Analysis",
  category: "Data Analytics",
  description: "Explored seasonal sales patterns across product categories.",
  technologies: ["Python", "Pandas", "Matplotlib"],
  thumbnail: myThumb,
  thumbnailAlt: "Dashboard overview of retail sales KPIs",
  context: "A data analysis project using public retail transaction data.",
  problem: "Stakeholders needed to understand which categories drive revenue by season.",
  data: {
    source: "Public retail dataset (Kaggle)",
    description: "12 months of transaction records with product, region, and revenue fields.",
    characteristics: ["~50,000 rows", "8 categorical features", "1 numeric target"],
  },
  approach: [
    "Loaded and cleaned raw CSV data",
    "Aggregated revenue by category and month",
    "Visualized trends with Matplotlib",
    "Summarized top insights for stakeholders",
  ],
  visualEvidence: [
    {
      type: "image",
      src: myDashboard,
      alt: "Sales dashboard with monthly revenue trends",
      caption: "Monthly revenue by product category",
    },
  ],
  findings: [
    "Electronics revenue peaks in Q4 by 34% over the annual average.",
    "Region B underperformed in summer months consistently.",
  ],
  conclusion: "Seasonal planning should prioritize Q4 inventory for top categories.",
  repositoryUrl: "https://github.com/yourusername/my-new-project",
},
```

**Step 4 — Save and preview**

The dev server hot-reloads. Your project appears in the grid and in the correct filter category automatically.

### Adding screenshots

Add images to `visualEvidence` with `type: "image"`:

```typescript
{
  type: "image",
  src: myScreenshot,
  alt: "Describe what the screenshot shows",
  caption: "Optional caption shown below the image",
}
```

### Adding a video or GIF

Use `type: "video"` and point `src` to an MP4 or WebM file:

```typescript
{
  type: "video",
  src: demoVideo,
  alt: "Screen recording of the app workflow",
  caption: "User flow from login to dashboard",
}
```

For GIFs, you can either use them as `type: "image"` or convert to video for smaller file size.

### Adding the GitHub repository

Set `repositoryUrl` on the project object. It renders as **View GitHub Repository** at the bottom of the showcase — not on the card itself.

### Project filtering

Filtering uses the `category` field. Valid values:

- `"Data Analytics"`
- `"AI / ML"`
- `"Web Development"`
- `"Other"`

The filter buttons in `Projects.tsx` match these exactly. A new project appears under its category tab and under **All**.

---

## Personalization Guide

| What to change | Where |
| --- | --- |
| Name, role, intro | `src/data/site.ts` |
| Profile image | Replace `src/assets/profile/profile-placeholder.svg` or update the import in `Hero.tsx` |
| Resume link | `site.resumeUrl` in `src/data/site.ts` (e.g. `"/resume.pdf"`) |
| Social links | `site.social` in `src/data/site.ts` |
| Projects | `src/data/projects.ts` + `src/assets/projects/` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Certifications | `src/data/certifications.ts` |
| Footer content | Uses `site.ts` automatically |

Place your PDF resume in the `public/` folder (create it if needed) and set `resumeUrl: "/resume.pdf"`.

---

## Running Locally

```bash
pnpm install
pnpm dev
```

The dev server runs on port **8443** by default. Open the URL shown in the terminal or use the Figma Make preview panel.

---

## Building

Create an optimized production build:

```bash
pnpm build
```

Output goes to the `dist/` folder.

Preview the production build locally:

```bash
pnpm preview
```

---

## Deployment (GitHub Pages)

1. **Set the base path** in `vite.config.ts` if deploying to `https://username.github.io/repo-name/`:

   ```typescript
   base: "/repo-name/",
   ```

   For a user site (`username.github.io`), use `base: "/"`.

2. **Build:**

   ```bash
   pnpm build
   ```

3. **Deploy `dist/`** using one of these options:

   - GitHub Actions (recommended): add a workflow that runs `pnpm build` and publishes `dist/` to the `gh-pages` branch
   - Manual: push the contents of `dist/` to a `gh-pages` branch

4. In your GitHub repository settings, set **Pages** source to the `gh-pages` branch (or GitHub Actions if using a workflow).

---

## Common Changes

| Goal | Where to go |
| --- | --- |
| Change colors | `src/index.css` → `@theme` block (`--color-accent`, `--color-ink`, etc.) |
| Change fonts | `src/index.css` → Google Fonts import and `@theme` font variables |
| Change project card design | `src/components/Projects.tsx` → `ProjectCard` |
| Change showcase layout | `src/components/ProjectShowcase.tsx` |
| Add/remove a section | `src/App.tsx` (add component + create section file) |
| Modify navigation links | `src/components/Nav.tsx` → `links` array |
| Add a project category | Update `ProjectCategory` type in `projects.ts`, add filter in `Projects.tsx`, use the new category on projects |

---

## Important Notes

- **Placeholder content:** Do not treat placeholder strings as real data. Replace every `[BRACKET]` value before sharing the site publicly.
- **No invented personal info:** The codebase intentionally avoids fake names, companies, or project results.
- **Modal vs route:** Projects use a modal for the showcase to keep the stack lightweight (no router dependency). Press **Escape** or click outside to close.
- **Accessibility:** Semantic HTML, alt text, keyboard-accessible cards (Enter/Space), focus-visible outlines, and `aria-modal` on the showcase.
- **Assets:** Shared SVG placeholders live in `src/assets/projects/_shared/`. Use project-specific folders for real screenshots.
- **Performance:** Images use `loading="lazy"` on cards. Keep image files reasonably sized (compress PNGs/JPGs before adding).

---

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm format` | Format code with oxfmt |

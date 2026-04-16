# Hector Rosario - Portfolio

This is the personal portfolio website of [Hector Rosario](https://github.com/hectorrosario22), a .NET Backend Developer with 9+ years of experience in .NET and cloud technologies (Azure, AWS). The portfolio is designed to showcase personal projects, work experience, skills, and education.

## 🚀 Features

- **Multi-language Support (i18n):** Content is available in both English and Spanish.
- **Modern Tech Stack:** Built with Astro for high performance and fast loading speeds.
- **Dynamic Components:** Uses Svelte for interactive UI components.
- **Responsive Design:** Styled with Tailwind CSS to ensure it looks great on all devices.
- **Content Collections:** Easy to manage and update content (experience, projects, skills) using JSON data in Astro Content Collections.

## 💻 Tech Stack

- [Astro](https://astro.build)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)

## 📂 Project Structure

```text
/
├── public/           # Static assets (images, icons, etc.)
├── src/
│   ├── components/   # Reusable UI components (Astro, Svelte)
│   ├── content/      # JSON data collections (personal, work, education, projects, skills)
│   ├── i18n/         # Internationalization translation files
│   ├── layouts/      # Page wrapper layouts
│   ├── pages/        # File-based routing (pages for /en and /es)
│   └── styles/       # Global CSS / Tailwind directives
├── astro.config.mjs  # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## 🛠️ Getting Started

### Prerequisites

You need to have Node.js and `pnpm` installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hectorrosario22/portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Commands

Inside the directory, you can run several commands:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm run dev`            | Starts the local dev server at `localhost:4321`  |
| `pnpm run build`          | Builds your site to the `dist/` directory        |
| `pnpm run preview`        | Previews your build locally                      |
| `pnpm run format`         | Formats code using Prettier                      |
| `pnpm run type-check`     | Runs TypeScript checks                           |

## 📝 Content Management

To update the content of the portfolio, navigate to the `src/content/` directory. You will find different folders for each section of the portfolio (e.g., `personal`, `projects`, `skills`, `work`). Update the corresponding JSON files for English (`en.json`) and Spanish (`es.json`) to reflect your latest information.

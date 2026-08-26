# GitCDN Generator

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**GitCDN Generator** is a simple tool to convert GitHub file URLs into CDN links (jsDelivr, Statically, and GitHub Raw) with a minimalist UI inspired by Google Search.

<p align="center">
  <img src="src/assets/icon-wide.png" alt="GitCDN Banner" width="600px">
</p>

## Features

- **Multi-Provider Support**: Generate URLs for **jsDelivr**, **Statically**, and **GitHub Raw** in a single click.
- **Minimalist UI**: Clean, distraction-free layout optimized for productivity.
- **Bilingual Support**: Fully localized in **English** and **Indonesian**.
- **History Management**: Keep track of your recently generated links (stored locally in your browser).
- **Knowledge Panel**: Instantly see repository details, owner info, and CDN advantages.
- **Smart Sharing**: Share your results directly to WhatsApp, Facebook, or X with captions.
- **Privacy First**: Zero server-side storage. All your data remains in your browser's LocalStorage.
- **Responsive Design**: Perfect experience across mobile, tablet, and desktop devices.
- **Dark Mode**: Beautiful dark theme that follows your system preferences or manual toggle.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kang-cahya/cdn-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cdn-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:9595`.

## Usage Guide

1. **Find your file**: Open any GitHub repository and select a file (JSON, JS, CSS, Image, etc.).
2. **Copy URL**: Copy the browser URL (e.g., `https://github.com/user/repo/blob/main/data.json`).
3. **Paste & Generate**: Paste it into the GitCDN search bar and hit Enter.
4. **Copy/Test**: Use the Copy button for your preferred CDN or the Play icon to test the link instantly.

## Privacy Policy

We value your privacy. GitCDN Generator is a **client-side only** application.

- **No Data Collection**: We do not collect, store, or share any of your personal data.
- **Local Storage**: Your history and theme preferences are stored exclusively in your browser's `LocalStorage`.
- **No Tracking**: No third-party analytics or tracking cookies are used.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Developed with ❤️ by **Kang Cahya**

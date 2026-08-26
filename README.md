# GitCDN Generator

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

GitCDN Generator is a tool to convert GitHub, GitLab, Bitbucket, GitHub Gist, NPM, and WordPress URLs into CDN links (jsDelivr, Statically, and GitHub Raw) with a minimalist UI.

<p align="center">
  <img src="src/assets/icon-wide.png" alt="GitCDN Banner" width="600px">
</p>

## Features

- Multi-Source Support: GitHub, GitLab, Bitbucket, GitHub Gist, NPM packages, and WordPress (Plugins/Themes).
- Multiple CDN Providers: jsDelivr, Statically, unpkg, and GitHub Raw.
- ESM Support: Automatic conversion to ES Modules via esm.run for NPM packages.
- History Management: Locally saved search history in the browser.
- Multi-Language: Support for English and Indonesian.
- Professional UI: Clean, responsive design with Dark Mode support.
- Privacy Focus: No tracking, all processing is done client-side.

## Tech Stack

- Framework: React
- Styling: Tailwind CSS
- Icons: Lucide React
- Build Tool: Vite
- Utilities: clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

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
   The app will be available at http://localhost:9595.

## Usage Guide

1. **Find your source**: Open a file on GitHub, GitLab, Bitbucket, or a Gist.
2. **Copy URL**: Copy the browser URL (e.g., https://github.com/user/repo/blob/main/file.json).
3. **Paste & Generate**: Paste it into the GitCDN search bar and hit Enter.
4. **Copy/Test**: Use the Copy button for your preferred CDN or the Play icon to test the link.

## Direct Link Usage

Generate CDN links directly by passing the source URL as a query parameter:

```text
https://gitcdn-generator.vercel.app?q=SOURCE_URL
```

Example:

1. [https://gitcdn-generator.vercel.app?q=https://github.com/dyazincahya/iqro-json/blob/main/hijaiyah-letters.json](https://gitcdn-generator.vercel.app?q=https://github.com/dyazincahya/iqro-json/blob/main/hijaiyah-letters.json)

2. [https://gitcdn-generator.vercel.app?q=https://www.npmjs.com/package/jquery](https://gitcdn-generator.vercel.app?q=https://www.npmjs.com/package/jquery)

## Privacy Policy

GitCDN Generator is a client-side only application.

- **No Data Collection**: No personal data is collected, stored, or shared.
- **Local Storage**: History and theme preferences are stored exclusively in your browser's LocalStorage.
- **No Tracking**: No third-party analytics or tracking cookies are used.

## License

This project is open-source and available under the MIT License.

---

Developed by **Kang Cahya**

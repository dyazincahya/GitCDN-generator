import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const parseUrl = (url) => {
  if (!url) return null;
  const trimmedUrl = url.trim();

  // GitHub
  const githubRegex = /github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)/;
  const githubMatch = trimmedUrl.match(githubRegex);
  if (githubMatch) {
    return {
      type: "github",
      user: githubMatch[1],
      repo: githubMatch[2],
      branch: githubMatch[3],
      path: githubMatch[4],
    };
  }

  // NPM
  // https://www.npmjs.com/package/jquery/v/3.6.4
  // https://www.npmjs.com/package/jquery
  const npmRegex = /npmjs\.com\/package\/([^/]+)(?:\/v\/([^/]+))?/;
  const npmMatch = trimmedUrl.match(npmRegex);
  if (npmMatch) {
    return {
      type: "npm",
      packageName: npmMatch[1],
      version: npmMatch[2] || "latest",
      path: "", // Default to empty for directory listing or default file
    };
  }

  // WordPress Plugins
  // https://wordpress.org/plugins/wp-slimstat/
  const wpPluginRegex = /wordpress\.org\/plugins\/([^/]+)/;
  const wpPluginMatch = trimmedUrl.match(wpPluginRegex);
  if (wpPluginMatch) {
    return {
      type: "wp-plugin",
      project: wpPluginMatch[1],
      version: "trunk", // Default to latest
      path: "",
    };
  }

  // WordPress Themes
  // https://wordpress.org/themes/twenty-seventeen/
  const wpThemeRegex = /wordpress\.org\/themes\/([^/]+)/;
  const wpThemeMatch = trimmedUrl.match(wpThemeRegex);
  if (wpThemeMatch) {
    return {
      type: "wp-theme",
      project: wpThemeMatch[1],
      version: "latest",
      path: "",
    };
  }

  return null;
};

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

  // GitHub Raw
  const githubRawRegex =
    /raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)/;
  const githubRawMatch = trimmedUrl.match(githubRawRegex);
  if (githubRawMatch) {
    return {
      type: "github",
      user: githubRawMatch[1],
      repo: githubRawMatch[2],
      branch: githubRawMatch[3],
      path: githubRawMatch[4],
    };
  }

  // jsDelivr GitHub
  const jsdelivrGhRegex =
    /cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^/@]+)(?:@([^/]+))?\/(.+)/;
  const jsdelivrGhMatch = trimmedUrl.match(jsdelivrGhRegex);
  if (jsdelivrGhMatch) {
    return {
      type: "github",
      user: jsdelivrGhMatch[1],
      repo: jsdelivrGhMatch[2],
      branch: jsdelivrGhMatch[3] || "main",
      path: jsdelivrGhMatch[4],
    };
  }

  // GitLab
  const gitlabRegex = /gitlab\.com\/([^/]+)\/([^/]+)\/-\/blob\/([^/]+)\/(.+)/;
  const gitlabMatch = trimmedUrl.match(gitlabRegex);
  if (gitlabMatch) {
    return {
      type: "gitlab",
      user: gitlabMatch[1],
      repo: gitlabMatch[2],
      branch: gitlabMatch[3],
      path: gitlabMatch[4],
    };
  }

  // Bitbucket
  const bitbucketRegex = /bitbucket\.org\/([^/]+)\/([^/]+)\/src\/([^/]+)\/(.+)/;
  const bitbucketMatch = trimmedUrl.match(bitbucketRegex);
  if (bitbucketMatch) {
    return {
      type: "bitbucket",
      user: bitbucketMatch[1],
      repo: bitbucketMatch[2],
      branch: bitbucketMatch[3],
      path: bitbucketMatch[4],
    };
  }

  // Gist
  const gistRegex =
    /gist\.github\.com\/([^/]+)\/([^/]+)(?:\/raw\/([^/]+)\/(.+))?/;
  const gistMatch = trimmedUrl.match(gistRegex);
  if (gistMatch) {
    return {
      type: "gist",
      user: gistMatch[1],
      gistId: gistMatch[2],
      commit: gistMatch[3] || "main",
      path: gistMatch[4] || "",
    };
  }

  // NPM (npmjs.com)
  const npmRegex = /npmjs\.com\/package\/([^/]+)(?:\/v\/([^/]+))?/;
  const npmMatch = trimmedUrl.match(npmRegex);
  if (npmMatch) {
    return {
      type: "npm",
      packageName: npmMatch[1],
      version: npmMatch[2] || "latest",
      path: "",
    };
  }

  // jsDelivr NPM
  const jsdelivrNpmRegex =
    /cdn\.jsdelivr\.net\/npm\/([^/@]+)(?:@([^/]+))?(?:\/(.+))?/;
  const jsdelivrNpmMatch = trimmedUrl.match(jsdelivrNpmRegex);
  if (jsdelivrNpmMatch) {
    return {
      type: "npm",
      packageName: jsdelivrNpmMatch[1],
      version: jsdelivrNpmMatch[2] || "latest",
      path: jsdelivrNpmMatch[3] || "",
    };
  }

  // unpkg NPM
  const unpkgNpmRegex = /unpkg\.com\/([^/@]+)(?:@([^/]+))?(?:\/(.+))?/;
  const unpkgNpmMatch = trimmedUrl.match(unpkgNpmRegex);
  if (unpkgNpmMatch) {
    return {
      type: "npm",
      packageName: unpkgNpmMatch[1],
      version: unpkgNpmMatch[2] || "latest",
      path: unpkgNpmMatch[3] || "",
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

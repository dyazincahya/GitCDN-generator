import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const parseGithubUrl = (url) => {
  try {
    const regex = /github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)/;
    const match = url.trim().match(regex);
    if (match) {
      return {
        user: match[1],
        repo: match[2],
        branch: match[3],
        path: match[4],
      };
    }
    return null;
  } catch (e) {
    return null;
  }
};

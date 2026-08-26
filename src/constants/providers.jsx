import React from "react";
import { Zap, Shield } from "lucide-react";

export const getProviders = (data) => {
  if (!data) return [];

  const providers = [];

  // jsDelivr Logic
  if (["github", "npm", "wp-plugin", "wp-theme"].includes(data.type)) {
    let jsdelivrUrl = "";
    let jsdelivrName = "jsDelivr";

    if (data.type === "github") {
      jsdelivrUrl = `https://cdn.jsdelivr.net/gh/${data.user}/${data.repo}@${data.branch}/${data.path}`;
      jsdelivrName += " (GitHub)";
    } else if (data.type === "npm") {
      jsdelivrUrl = `https://cdn.jsdelivr.net/npm/${data.packageName}@${data.version}/${data.path}`;
      jsdelivrName += " (NPM)";
    } else if (data.type === "wp-plugin") {
      jsdelivrUrl = `https://cdn.jsdelivr.net/wp/plugins/${data.project}/tags/${data.version}/${data.path}`;
      jsdelivrName += " (WP Plugin)";
    } else if (data.type === "wp-theme") {
      jsdelivrUrl = `https://cdn.jsdelivr.net/wp/themes/${data.project}/tags/${data.version}/${data.path}`;
      jsdelivrName += " (WP Theme)";
    }

    providers.push({
      id: "jsdelivr",
      name: jsdelivrName,
      displayName: "cdn.jsdelivr.net",
      url: jsdelivrUrl,
      maxSize: "15MB",
      icon: <Zap className="w-4 h-4 text-yellow-500" />,
      description:
        "Layanan CDN tercepat dan paling populer untuk proyek open source.",
      pros: ["Cepat & Stabil", "Global Edge", "Populer"],
      cons: ["Limit file 15MB"],
    });
  }

  // ESM.run (jsDelivr)
  if (data.type === "npm") {
    const isJsFile = /\.(js|mjs|jsx|ts|tsx)$/.test(data.path);
    if (isJsFile || !data.path) {
      providers.push({
        id: "esm-run",
        name: "ESM.run (NPM)",
        displayName: "esm.run",
        url: `https://esm.run/${data.packageName}@${data.version}/${data.path}`,
        maxSize: "15MB",
        icon: <Zap className="w-4 h-4 text-blue-500" />,
        description:
          "Layanan ESM murni dari jsDelivr yang dioptimalkan untuk browser modern.",
        pros: ["Konversi ESM otomatis", "Siap untuk browser modern"],
        cons: ["Hanya untuk modul JS"],
      });
    }
  }

  // unpkg Logic
  if (data.type === "npm") {
    providers.push({
      id: "unpkg",
      name: "unpkg (NPM)",
      displayName: "unpkg.com",
      url: `https://unpkg.com/${data.packageName}@${data.version}/${data.path}`,
      maxSize: "100MB+",
      icon: <Zap className="w-4 h-4 text-red-500" />,
      description: "CDN cepat dan global untuk paket NPM.",
      pros: ["URL sederhana", "Global Edge", "Dukungan versi spesifik"],
      cons: ["Terbatas pada ekosistem NPM"],
    });
  }

  // Statically Logic
  const staticallySupported = [
    "github",
    "gitlab",
    "bitbucket",
    "gist",
    "npm",
    "wp-plugin",
    "wp-theme",
  ];
  if (staticallySupported.includes(data.type)) {
    let staticallyUrl = "";
    let staticallyName = "Statically";

    if (data.type === "github") {
      staticallyUrl = `https://cdn.statically.io/gh/${data.user}/${data.repo}@${data.branch}/${data.path}`;
      staticallyName += " (GitHub)";
    } else if (data.type === "gitlab") {
      staticallyUrl = `https://cdn.statically.io/gl/${data.user}/${data.repo}@${data.branch}/${data.path}`;
      staticallyName += " (GitLab)";
    } else if (data.type === "bitbucket") {
      staticallyUrl = `https://cdn.statically.io/bb/${data.user}/${data.repo}@${data.branch}/${data.path}`;
      staticallyName += " (Bitbucket)";
    } else if (data.type === "gist") {
      staticallyUrl = `https://cdn.statically.io/gist/${data.user}/${data.gistId}/raw/${data.commit}/${data.path}`;
      staticallyName += " (Gist)";
    } else if (data.type === "npm") {
      staticallyUrl = data.path
        ? `https://cdn.statically.io/npm/${data.packageName}@${data.version}/${data.path}`
        : `https://cdn.statically.io/npm/${data.packageName}`;
      staticallyName += " (NPM)";
    } else if (data.type === "wp-plugin") {
      staticallyUrl = `https://cdn.statically.io/wp/p/${data.project}/${data.version}/${data.path}`;
      staticallyName += " (WP Plugin)";
    } else if (data.type === "wp-theme") {
      staticallyUrl = `https://cdn.statically.io/wp/t/${data.project}/${data.version}/${data.path}`;
      staticallyName += " (WP Theme)";
    }

    providers.push({
      id: "statically",
      name: staticallyName,
      displayName: "cdn.statically.io",
      url: staticallyUrl,
      maxSize: "50MB",
      icon: <Zap className="w-4 h-4 text-purple-500" />,
      description:
        "CDN yang dioptimalkan dengan fitur pemrosesan gambar dan aset otomatis.",
      pros: ["Limit file 50MB", "Optimasi aset", "Bandwidth tidak terbatas"],
      cons: ["Delay caching"],
    });
  }

  // GitHub Raw Logic
  if (data.type === "github") {
    providers.push({
      id: "github-raw",
      name: "GitHub Raw",
      displayName: "raw.githubusercontent.com",
      url: `https://raw.githubusercontent.com/${data.user}/${data.repo}/refs/heads/${data.branch}/${data.path}`,
      maxSize: "100MB+",
      icon: <Shield className="w-4 h-4 text-gray-500" />,
      description: "Akses langsung ke file mentah GitHub. Paling up-to-date.",
      pros: ["Resmi GitHub", "Selalu sinkron"],
      cons: ["Bukan CDN murni"],
    });
  }

  return providers;
};

import React from "react";
import { Zap, Shield } from "lucide-react";

export const getProviders = (data) => {
  if (!data) return [];

  const providers = [];

  if (data.type === "github") {
    providers.push(
      {
        id: "jsdelivr-gh",
        name: "jsDelivr (GitHub)",
        displayName: "cdn.jsdelivr.net",
        url: `https://cdn.jsdelivr.net/gh/${data.user}/${data.repo}@${data.branch}/${data.path}`,
        maxSize: "15MB",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        description: "Layanan CDN gratis untuk proyek open source di GitHub. Sangat cepat dengan jaringan edge global yang luas.",
        pros: ["Cepat & Stabil", "Multi-file bundling", "Populer"],
        cons: ["Limit 15MB", "Repository publik saja"],
      },
      {
        id: "statically-gh",
        name: "Statically (GitHub)",
        displayName: "cdn.statically.io",
        url: `https://cdn.statically.io/gh/${data.user}/${data.repo}/${data.branch}/${data.path}`,
        maxSize: "50MB",
        icon: <Zap className="w-4 h-4 text-purple-500" />,
        description: "CDN yang dioptimalkan untuk pengembang, menawarkan optimasi gambar otomatis dan limit file yang lebih besar.",
        pros: ["Limit 50MB", "Optimasi gambar", "Tanpa limit bandwidth"],
        cons: ["Caching butuh waktu update"],
      },
      {
        id: "github-raw",
        name: "GitHub Raw",
        displayName: "raw.githubusercontent.com",
        url: `https://raw.githubusercontent.com/${data.user}/${data.repo}/refs/heads/${data.branch}/${data.path}`,
        maxSize: "100MB+",
        icon: <Shield className="w-4 h-4 text-gray-500" />,
        description: "Akses langsung ke file mentah GitHub. Paling up-to-date tetapi bukan merupakan CDN murni dengan edge caching.",
        pros: ["Resmi GitHub", "Selalu sinkron", "Mendukung file besar"],
        cons: ["Bukan CDN murni", "Bandwidth terbatas"],
      }
    );
  } else if (data.type === "npm") {
    providers.push(
      {
        id: "jsdelivr-npm",
        name: "jsDelivr (NPM)",
        displayName: "cdn.jsdelivr.net",
        url: `https://cdn.jsdelivr.net/npm/${data.packageName}@${data.version}/${data.path}`,
        maxSize: "15MB",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        description: "Layanan CDN tercepat untuk paket NPM. Mendukung versi spesifik dan minifikasi otomatis.",
        pros: ["Optimasi NPM", "Versi range support", "Minifikasi otomatis"],
        cons: ["Limit 15MB"],
      },
      {
        id: "esm-run",
        name: "ESM.run (NPM)",
        displayName: "esm.run",
        url: `https://esm.run/${data.packageName}@${data.version}/${data.path}`,
        maxSize: "15MB",
        icon: <Zap className="w-4 h-4 text-blue-500" />,
        description: "Layanan ESM murni dari jsDelivr. Mengonversi paket CommonJS ke ES Modules secara otomatis.",
        pros: ["Auto ESM conversion", "Bundling otomatis", "Modern browser ready"],
        cons: ["Hanya untuk modul JS"],
      },
      {
        id: "statically-npm",
        name: "Statically (NPM)",
        displayName: "cdn.statically.io",
        url: `https://cdn.statically.io/npm/${data.packageName}@${data.version}/${data.path}`,
        maxSize: "50MB",
        icon: <Zap className="w-4 h-4 text-purple-500" />,
        description: "Alternatif cepat untuk paket NPM dengan limit file yang lebih besar.",
        pros: ["Limit 50MB", "Cepat"],
        cons: ["Caching update"],
      }
    );
  } else if (data.type === "wp-plugin" || data.type === "wp-theme") {
    const isPlugin = data.type === "wp-plugin";
    const typePath = isPlugin ? "plugins" : "themes";
    const staticPath = isPlugin ? "p" : "t";
    
    providers.push(
      {
        id: "jsdelivr-wp",
        name: `jsDelivr (WordPress ${isPlugin ? "Plugin" : "Theme"})`,
        displayName: "cdn.jsdelivr.net",
        url: `https://cdn.jsdelivr.net/wp/${typePath}/${data.project}/tags/${data.version}/${data.path}`,
        maxSize: "15MB",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        description: `CDN untuk aset WordPress dari direktori resmi. Mempercepat pemuatan plugin dan tema Anda.`,
        pros: ["WordPress SVN support", "Cepat", "Global"],
        cons: ["Limit 15MB"],
      },
      {
        id: "statically-wp",
        name: `Statically (WordPress ${isPlugin ? "Plugin" : "Theme"})`,
        displayName: "cdn.statically.io",
        url: `https://cdn.statically.io/wp/${staticPath}/${data.project}/${data.version}/${data.path}`,
        maxSize: "50MB",
        icon: <Zap className="w-4 h-4 text-purple-500" />,
        description: "Optimasi aset WordPress dengan limit file yang lebih besar.",
        pros: ["Limit 50MB", "Optimasi gambar"],
        cons: ["Caching delay"],
      }
    );
  }

  return providers;
};

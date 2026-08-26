import React from "react";
import { Zap, Shield } from "lucide-react";

export const CDN_PROVIDERS = [
  {
    id: "jsdelivr",
    name: "jsDelivr",
    displayName: "cdn.jsdelivr.net",
    url: "https://www.jsdelivr.net/",
    maxSize: "15MB",
    icon: <Zap className="w-4 h-4 text-yellow-500" />,
    description: "Layanan CDN gratis untuk proyek open source di GitHub. Sangat cepat dengan jaringan edge global yang luas.",
    pros: ["Cepat & Stabil", "Multi-file bundling", "Populer"],
    cons: ["Limit 15MB", "Repository publik saja"],
    generate: (user, repo, branch, path) =>
      `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`,
  },
  {
    id: "statically",
    name: "Statically",
    displayName: "cdn.statically.io",
    url: "https://statically.io/",
    maxSize: "50MB",
    icon: <Zap className="w-4 h-4 text-purple-500" />,
    description: "CDN yang dioptimalkan untuk pengembang, menawarkan optimasi gambar otomatis dan limit file yang lebih besar.",
    pros: ["Limit 50MB", "Optimasi gambar", "Tanpa limit bandwidth"],
    cons: ["Caching butuh waktu update"],
    generate: (user, repo, branch, path) =>
      `https://cdn.statically.io/gh/${user}/${repo}/${branch}/${path}`,
  },
  {
    id: "github",
    name: "GitHub Raw",
    displayName: "raw.githubusercontent.com",
    url: "https://raw.githubusercontent.com/",
    maxSize: "100MB+",
    icon: <Shield className="w-4 h-4 text-gray-500" />,
    description: "Akses langsung ke file mentah GitHub. Paling up-to-date tetapi bukan merupakan CDN murni dengan edge caching.",
    pros: ["Resmi GitHub", "Selalu sinkron", "Mendukung file besar"],
    cons: ["Bukan CDN murni", "Bandwidth terbatas"],
    generate: (user, repo, branch, path) =>
      `https://raw.githubusercontent.com/${user}/${repo}/refs/heads/${branch}/${path}`,
  },
];

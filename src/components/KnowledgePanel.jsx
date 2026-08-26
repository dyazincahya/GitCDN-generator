import React, { useState, useRef, useEffect } from "react";
import {
  Github,
  Gitlab,
  Zap,
  Shield,
  Globe,
  Share2,
  Check,
  Facebook,
  Twitter,
  MessageCircle,
  Copy,
  Box,
  Layers,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function KnowledgePanel({ repoData }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  if (!repoData) return null;

  const currentUrl = window.location.href;
  const shareTitle = t("common.shareTitle");

  let author = "";
  let projectName = "";
  let icon = <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />;
  let typeLabel = t("knowledge.type");
  let typeIcon = <Github className="w-4 h-4" />;

  if (repoData.type === "github") {
    author = repoData.user;
    projectName = repoData.repo;
  } else if (repoData.type === "gitlab") {
    author = repoData.user;
    projectName = repoData.repo;
    icon = <Gitlab className="w-8 h-8 text-[#fc6d26]" />;
    typeLabel = "GitLab Repository";
    typeIcon = <Gitlab className="w-4 h-4" />;
  } else if (repoData.type === "bitbucket") {
    author = repoData.user;
    projectName = repoData.repo;
    icon = <Globe className="w-8 h-8 text-[#0052cc]" />;
    typeLabel = "Bitbucket Repository";
    typeIcon = <Globe className="w-4 h-4" />;
  } else if (repoData.type === "gist") {
    author = repoData.user;
    projectName = "GitHub Gist";
    icon = <Layers className="w-8 h-8 text-gray-700" />;
    typeLabel = "GitHub Gist";
    typeIcon = <Layers className="w-4 h-4" />;
  } else if (repoData.type === "npm") {
    author = "NPM Registry";
    projectName = repoData.packageName;
    icon = <Box className="w-8 h-8 text-red-600" />;
    typeLabel = "NPM Package";
    typeIcon = <Box className="w-4 h-4" />;
  } else if (repoData.type.startsWith("wp-")) {
    author = "WordPress.org";
    projectName = repoData.project;
    icon = <Globe className="w-8 h-8 text-blue-500" />;
    typeLabel = repoData.type === "wp-plugin" ? "WP Plugin" : "WP Theme";
    typeIcon = <Globe className="w-4 h-4" />;
  }

  const fullCaption = `${shareTitle}\n\n👤 Author: ${author}\n📦 Project: ${projectName}\n🔗 GitCDN: ${currentUrl}\n\n#GitCDN #DeveloperTools`;

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-4 h-4 text-[#25D366]" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(fullCaption)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4 text-[#1877F2]" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(fullCaption)}`,
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-4 h-4 text-black dark:text-white" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullCaption)}`,
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className="hidden lg:block animate-in fade-in duration-700">
      <div className="border border-[#dfe1e5] dark:border-[#3c4043] rounded-xl overflow-hidden shadow-sm sticky top-40">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1 uppercase tracking-wider font-medium">
                {typeIcon} {t("knowledge.title")}
              </div>
              <h2 className="text-2xl font-bold dark:text-white">
                {projectName}
              </h2>
              <p className="text-sm text-gray-500 dark:text-[#9aa0a6]">
                {typeLabel}
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 dark:bg-[#3c4043] rounded-lg flex items-center justify-center">
              {icon}
            </div>
          </div>

          <div className="text-sm text-[#4d5156] dark:text-[#bdc1c6] mb-6 leading-relaxed">
            {["github", "gitlab", "bitbucket"].includes(repoData.type) ? (
              <>
                {t("knowledge.owner")} <b>{repoData.user}</b>{" "}
                {t("knowledge.on")} branch <b>{repoData.branch}</b>.
                <br />
                {t("knowledge.file")}:{" "}
                <code>{repoData.path.split("/").pop() || "index"}</code>.
              </>
            ) : repoData.type === "gist" ? (
              <>
                {t("knowledge.owner")} <b>{repoData.user}</b>.
                <br />
                {t("knowledge.file")}:{" "}
                <code>{repoData.path.split("/").pop() || repoData.gistId}</code>
                .
              </>
            ) : repoData.type === "npm" ? (
              <>
                {t("knowledge.package")} <b>{repoData.packageName}</b>{" "}
                {t("knowledge.version")} <b>{repoData.version}</b>.
              </>
            ) : (
              <>
                {t("knowledge.project")} <b>{repoData.project}</b>{" "}
                {t("knowledge.version")} <b>{repoData.version}</b>.
              </>
            )}
          </div>

          <hr className="border-[#dfe1e5] dark:border-[#3c4043] mb-6" />

          <div className="space-y-4">
            {["github", "gitlab", "bitbucket"].includes(repoData.type) && (
              <>
                <div className="flex text-sm">
                  <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                    {t("knowledge.owner")}
                  </span>
                  <a
                    href={
                      repoData.type === "github"
                        ? `https://github.com/${repoData.user}`
                        : repoData.type === "gitlab"
                          ? `https://gitlab.com/${repoData.user}`
                          : `https://bitbucket.org/${repoData.user}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer"
                  >
                    {repoData.user}
                  </a>
                </div>
                <div className="flex text-sm">
                  <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                    {t("knowledge.repo")}
                  </span>
                  <a
                    href={
                      repoData.type === "github"
                        ? `https://github.com/${repoData.user}/${repoData.repo}`
                        : repoData.type === "gitlab"
                          ? `https://gitlab.com/${repoData.user}/${repoData.repo}`
                          : `https://bitbucket.org/${repoData.user}/${repoData.repo}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer"
                  >
                    {repoData.repo}
                  </a>
                </div>
              </>
            )}
            {repoData.type === "gist" && (
              <div className="flex text-sm">
                <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                  Gist
                </span>
                <a
                  href={`https://gist.github.com/${repoData.user}/${repoData.gistId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer"
                >
                  {repoData.gistId}
                </a>
              </div>
            )}
            {repoData.type === "npm" && (
              <>
                <div className="flex text-sm">
                  <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                    {t("knowledge.package")}
                  </span>
                  <a
                    href={`https://www.npmjs.com/package/${repoData.packageName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer"
                  >
                    {repoData.packageName}
                  </a>
                </div>
                <div className="flex text-sm">
                  <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                    {t("knowledge.version")}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {repoData.version}
                  </span>
                </div>
              </>
            )}
            {repoData.type.startsWith("wp-") && (
              <>
                <div className="flex text-sm">
                  <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                    {t("knowledge.project")}
                  </span>
                  <a
                    href={`https://wordpress.org/${repoData.type === "wp-plugin" ? "plugins" : "themes"}/${repoData.project}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer"
                  >
                    {repoData.project}
                  </a>
                </div>
                <div className="flex text-sm">
                  <span className="w-24 font-bold text-[#202124] dark:text-[#e8eaed] shrink-0">
                    {t("knowledge.version")}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {repoData.version}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold mb-3">
              {t("knowledge.prosTitle")}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-[#303134] rounded-lg text-center">
                <Zap className="w-4 h-4 text-yellow-500 mb-1" />
                <span className="text-[10px] font-medium">
                  {t("knowledge.pros.fast")}
                </span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-[#303134] rounded-lg text-center">
                <Shield className="w-4 h-4 text-blue-500 mb-1" />
                <span className="text-[10px] font-medium">
                  {t("knowledge.pros.secure")}
                </span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-[#303134] rounded-lg text-center">
                <Globe className="w-4 h-4 text-green-500 mb-1" />
                <span className="text-[10px] font-medium">
                  {t("knowledge.pros.global")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-[#f8f9fa] dark:bg-[#303134] p-4 border-t border-[#dfe1e5] dark:border-[#3c4043] flex justify-end items-center relative"
          ref={dropdownRef}
        >
          <button
            className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {copied ? (
              <Check className="w-3 h-3" />
            ) : (
              <Share2 className="w-3 h-3" />
            )}
            {copied ? t("common.shareSuccess") : t("common.share")}
          </button>

          {showDropdown && (
            <div className="absolute bottom-full right-4 mb-2 w-48 bg-white dark:bg-[#202124] border border-[#dfe1e5] dark:border-[#3c4043] rounded-xl shadow-xl overflow-hidden animate-in slide-in-from-bottom-2 duration-200 z-50">
              <div className="p-2 space-y-1">
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#303134] rounded-lg transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#303134] rounded-lg transition-colors border-t border-gray-100 dark:border-gray-800 mt-1 pt-2"
                >
                  <Copy className="w-4 h-4 text-gray-500" />
                  <span>{t("common.copyLink")}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

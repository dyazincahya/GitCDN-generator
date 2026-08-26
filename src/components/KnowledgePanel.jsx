import React, { useState, useRef, useEffect } from "react";
import {
  Zap,
  Shield,
  Globe,
  Share2,
  Check,
  MessageCircle,
  Copy,
  Box,
  Layers,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const GitlabIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="m23.6 9.6-1.5-4.6c-.2-.5-.8-.8-1.3-.8-.5 0-1 .3-1.2.8L17.8 9.6H6.2L4.4 5c-.2-.5-.7-.8-1.2-.8-.5 0-1 .3-1.2.8L.4 9.6c-.2.5 0 1.1.4 1.4L12 19.8l11.2-8.8c.4-.3.6-.9.4-1.4z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
  let icon = <GithubIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />;
  let typeLabel = t("knowledge.type");
  let typeIcon = <GithubIcon className="w-4 h-4" />;

  if (repoData.type === "github") {
    author = repoData.user;
    projectName = repoData.repo;
  } else if (repoData.type === "gitlab") {
    author = repoData.user;
    projectName = repoData.repo;
    icon = <GitlabIcon className="w-8 h-8 text-[#fc6d26]" />;
    typeLabel = "GitLab Repository";
    typeIcon = <GitlabIcon className="w-4 h-4" />;
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
      icon: <FacebookIcon className="w-4 h-4 text-[#1877F2]" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(fullCaption)}`,
    },
    {
      name: "X (Twitter)",
      icon: <TwitterIcon className="w-4 h-4 text-black dark:text-white" />,
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

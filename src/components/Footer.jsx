import React from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function Footer({ currentYear, onPrivacyClick }) {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <footer className="mt-auto py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-[#dfe1e5] dark:border-[#3c4043] bg-[#f8f9fa] dark:bg-[#171717]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-y-4">
        <div className="flex gap-6 items-center">
          <span>
            {currentYear} © GitCDN by{" "}
            <a
              href="https://www.kang-cahya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Kang Cahya
            </a>
          </span>
          <a
            href="https://github.com/dyazincahya/GitCDN-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            title="GitHub Repository"
          >
            <svg
              className="w-4 h-4"
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
            <span>GitHub</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-white dark:bg-[#303134] border border-[#dfe1e5] dark:border-[#3c4043] rounded-lg p-1">
            <button
              onClick={() => toggleLang("id")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-xs font-medium ${
                lang === "id"
                  ? "bg-[#1a73e8] text-white shadow-sm"
                  : "hover:bg-gray-100 dark:hover:bg-[#3c4043]"
              }`}
            >
              <svg className="w-4 h-3 shrink-0" viewBox="0 0 640 480">
                <rect width="640" height="480" fill="#fff" />
                <rect width="640" height="240" fill="#e70011" />
              </svg>
              Indonesia
            </button>
            <button
              onClick={() => toggleLang("en")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-xs font-medium ${
                lang === "en"
                  ? "bg-[#1a73e8] text-white shadow-sm"
                  : "hover:bg-gray-100 dark:hover:bg-[#3c4043]"
              }`}
            >
              <svg className="w-4 h-3 shrink-0" viewBox="0 0 640 480">
                <path fill="#012169" d="M0 0h640v480H0z" />
                <path
                  fill="#fff"
                  d="m75 0 245 180L565 0h75v56L395 240l245 184v56h-75L320 296 75 480H0v-56l245-184L0 56V0h75z"
                />
                <path
                  fill="#c8102e"
                  d="m424 281 216 159v40L369 281h55zM216 199 0 40V0l271 199h-55zm-55 82L0 440v40l216-159h-55zm318-82L640 40V0L369 199h55z"
                />
                <path fill="#fff" d="M256 0h128v480H256zM0 176h640v128H0z" />
                <path fill="#c8102e" d="M304 0h32v480h-32zM0 224h640v32H0z" />
              </svg>
              English
            </button>
          </div>
          <button
            onClick={onPrivacyClick}
            className="hover:underline whitespace-nowrap"
          >
            {t("common.privacy")}
          </button>
        </div>
      </div>
    </footer>
  );
}

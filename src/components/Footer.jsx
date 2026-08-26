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
            >
              Kang Cahya
            </a>
          </span>
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

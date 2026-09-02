import React from "react";
import {
  Sun,
  Moon,
  Search,
  X,
  Clock,
  Info,
  Home,
  BookOpen,
} from "lucide-react";
import { cn } from "../utils/helpers";
import { useLanguage } from "../hooks/useLanguage";

export default function Header({
  results,
  inputUrl,
  setInputUrl,
  handleGenerate,
  clearInput,
  toggleTheme,
  isDarkMode,
  onLogoClick,
  activeTab,
  setActiveTab,
}) {
  const { t } = useLanguage();

  return (
    <header
      className={cn(
        "w-full transition-all z-40 bg-white dark:bg-[#202124]",
        results
          ? "sticky top-0 border-b border-[#dfe1e5] dark:border-[#3c4043]"
          : "p-6",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center w-full",
          results ? "px-4 md:px-8 py-4 gap-4 md:gap-8" : "justify-end gap-6",
        )}
      >
        {results && (
          <div
            className="flex items-center cursor-pointer shrink-0"
            onClick={onLogoClick}
          >
            <h1 className="text-xl md:text-2xl font-bold tracking-tight select-none">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">i</span>
              <span className="text-[#FBBC05]">t</span>
              <span className="text-[#4285F4]">C</span>
              <span className="text-[#34A853]">D</span>
              <span className="text-[#EA4335]">N</span>
            </h1>
          </div>
        )}

        {results ? (
          <div className="flex-1 max-w-[692px] relative group">
            <form onSubmit={handleGenerate} className="w-full">
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => {
                  setInputUrl(e.target.value);
                  if (!e.target.value) clearInput();
                }}
                className="block w-full pl-6 pr-20 py-2.5 md:py-3 text-sm md:text-base bg-white dark:bg-[#303134] border border-[#dfe1e5] dark:border-transparent rounded-full shadow-[0_2px_5px_1px_rgba(64,60,67,.16)] dark:shadow-none focus:outline-none transition-all"
              />
              <div className="absolute right-4 inset-y-0 flex items-center gap-2 md:gap-3 border-l border-gray-200 dark:border-gray-600 pl-3">
                <X
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400 cursor-pointer hover:text-gray-600"
                  onClick={clearInput}
                />
                <Search
                  className="w-4 h-4 md:w-5 md:h-5 text-[#4285F4] cursor-pointer"
                  onClick={handleGenerate}
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("semua")}
              className={cn(
                "text-sm font-medium transition-colors",
                activeTab === "semua"
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-600 dark:hover:text-blue-400",
              )}
            >
              {t("common.home")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("docs")}
              className={cn(
                "text-sm font-medium transition-colors",
                activeTab === "docs"
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-600 dark:hover:text-blue-400",
              )}
            >
              {t("common.docs")}
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={cn(
                "text-sm font-medium transition-colors",
                activeTab === "about"
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-600 dark:hover:text-blue-400",
              )}
            >
              {t("common.about")}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#303134] transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        )}

        {results && (
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <button
              onClick={onLogoClick}
              className={cn(
                "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#303134] transition-colors",
                activeTab === "semua" && !results && "text-blue-600",
              )}
              title="Home"
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("docs")}
              className={cn(
                "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#303134] transition-colors",
                activeTab === "docs" && "text-blue-600 dark:text-blue-400",
              )}
              title={t("common.docs")}
            >
              <BookOpen className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#303134] transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        )}
      </div>

      {results && (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-6 overflow-x-auto text-sm text-gray-500 dark:text-[#9aa0a6] whitespace-nowrap">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "flex items-center gap-1 py-3 border-b-4 font-medium transition-all",
              activeTab === "all" || activeTab === "semua"
                ? "text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8]"
                : "border-transparent hover:text-black dark:hover:text-white",
            )}
          >
            <Search className="w-4 h-4" /> {t("common.all")}
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={cn(
              "flex items-center gap-1 py-3 border-b-4 font-medium transition-all",
              activeTab === "history"
                ? "text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8]"
                : "border-transparent hover:text-black dark:hover:text-white",
            )}
          >
            <Clock className="w-4 h-4" /> {t("common.history")}
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={cn(
              "flex items-center gap-1 py-3 border-b-4 font-medium transition-all",
              activeTab === "about"
                ? "text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8]"
                : "border-transparent hover:text-black dark:hover:text-white",
            )}
          >
            <Info className="w-4 h-4" /> {t("common.about")}
          </button>
        </div>
      )}
    </header>
  );
}

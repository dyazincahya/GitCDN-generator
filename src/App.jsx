import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingView from "./views/LandingView";
import ResultItem from "./components/ResultItem";
import KnowledgePanel from "./components/KnowledgePanel";
import HistoryView from "./views/HistoryView";
import AboutView from "./views/AboutView";
import PrivacyModal from "./components/PrivacyModal";
import GuideModal from "./components/GuideModal";
import { getProviders } from "./constants/providers";
import { parseUrl } from "./utils/helpers";
import { useUrlState } from "./hooks/useUrlState";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const [urlParams, setUrlParams] = useUrlState();
  const { t } = useLanguage();

  // State from URL
  const query = urlParams.get("q") || "";
  const activeTab = urlParams.get("tab") || "semua";

  // Local state
  const [inputUrl, setInputUrl] = useState(query);
  const [results, setResults] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [isLoading, setIsLoading] = useState(!!query);
  const [copiedId, setCopiedId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  // Initialize theme and history
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const savedHistory = JSON.parse(
      localStorage.getItem("cdn_history") || "[]",
    );
    setHistory(savedHistory);
  }, []);

  // Handle generation logic
  const handleGenerate = useCallback(
    (e, customUrl) => {
      e?.preventDefault();
      const targetUrl = customUrl || inputUrl;

      if (!targetUrl.trim()) {
        setResults(null);
        setRepoData(null);
        setIsLoading(false);
        setUrlParams({ q: "", tab: "semua" });
        return;
      }

      const data = parseUrl(targetUrl);
      if (data) {
        setIsLoading(true);
        const providers = getProviders(data);
        const generated = providers.map((provider) => ({
          ...provider,
          resultUrl: provider.url,
        }));
        setResults(generated);
        setRepoData(data);
        setIsLoading(false);

        // Update history
        const newHistory = [
          targetUrl,
          ...history.filter((h) => h !== targetUrl),
        ].slice(0, 50);
        setHistory(newHistory);
        localStorage.setItem("cdn_history", JSON.stringify(newHistory));

        // Update URL
        setUrlParams({
          q: targetUrl,
          tab: "all",
        });
        if (customUrl) setInputUrl(customUrl);
      } else {
        setIsLoading(false);
        alert("URL tidak valid. Gunakan format GitHub, NPM, atau WordPress.");
      }
    },
    [inputUrl, history, setUrlParams, activeTab],
  );

  // Handle initial search from URL
  useEffect(() => {
    if (query && !results) {
      // Small delay to ensure state is ready
      const timer = setTimeout(() => {
        handleGenerate(null, query);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [query, handleGenerate]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const clearInput = () => {
    setInputUrl("");
    setResults(null);
    setRepoData(null);
    setUrlParams({ q: "", tab: "semua" });
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center py-20 animate-pulse">
          <div className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">i</span>
            <span className="text-[#FBBC05]">t</span>
            <span className="text-[#4285F4]">C</span>
            <span className="text-[#34A853]">D</span>
            <span className="text-[#EA4335]">N</span>
          </div>
          <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="w-full h-full bg-[#4285F4] animate-[loading_1.5s_infinite_ease-in-out]" />
          </div>
        </div>
      );
    }

    if (!results && activeTab === "semua") {
      return (
        <LandingView
          inputUrl={inputUrl}
          setInputUrl={setInputUrl}
          handleGenerate={handleGenerate}
          history={history}
          onLogoClick={clearInput}
          onGuideClick={() => setShowGuide(true)}
          onViewMoreHistory={() => setUrlParams({ tab: "history" })}
        />
      );
    }

    switch (activeTab) {
      case "history":
        return (
          <HistoryView
            history={history}
            setHistory={setHistory}
            onSelect={(url) => handleGenerate(null, url)}
            onClear={() => {
              if (confirm(t("common.clearAll") + "?")) {
                setHistory([]);
                localStorage.removeItem("cdn_history");
              }
            }}
          />
        );
      case "about":
        return <AboutView />;
      case "all":
      default:
        return (
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            <div className="space-y-10 animate-in fade-in duration-500">
              <p className="text-sm text-gray-500 dark:text-[#9aa0a6] mb-4">
                {t("results.stats")}
              </p>
              {results?.map((item) => (
                <ResultItem
                  key={item.id}
                  item={item}
                  repoData={repoData}
                  copiedId={copiedId}
                  copyToClipboard={copyToClipboard}
                />
              ))}
            </div>
            <KnowledgePanel
              repoData={repoData}
              onAboutClick={() => setUrlParams({ tab: "about" })}
            />
          </div>
        );
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] text-[#202124] dark:text-[#e8eaed] font-sans transition-colors duration-300 flex flex-col">
      <Header
        results={results}
        inputUrl={inputUrl}
        setInputUrl={setInputUrl}
        handleGenerate={handleGenerate}
        clearInput={clearInput}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onLogoClick={clearInput}
        activeTab={activeTab}
        setActiveTab={(tab) => setUrlParams({ tab })}
      />

      <main className="flex-1 w-full">{renderContent()}</main>

      <Footer
        currentYear={currentYear}
        onPrivacyClick={() => setShowPrivacy(true)}
      />

      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />

      <GuideModal isOpen={showGuide} onClose={() => setShowGuide(false)} />
    </div>
  );
}

export default App;

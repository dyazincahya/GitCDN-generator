import React from "react";
import { Search, Clock, HelpCircle, Link as LinkIcon } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function LandingView({ 
  inputUrl, 
  setInputUrl, 
  handleGenerate, 
  history, 
  onLogoClick,
  onGuideClick,
  onViewMoreHistory
}) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center pt-[15vh] px-4 w-full">
      {/* Landing Page Logo */}
      <div className="flex flex-col items-center mb-8" onClick={onLogoClick}>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight select-none mb-4 cursor-pointer">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">i</span>
          <span className="text-[#FBBC05]">t</span>
          <span className="text-[#4285F4]">C</span>
          <span className="text-[#34A853]">D</span>
          <span className="text-[#EA4335]">N</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm md:text-base">
          {t('landing.title')}
        </p>
      </div>

      {/* Landing Search Box */}
      <div className="w-full max-w-[584px]">
        <form onSubmit={handleGenerate} className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder={t('landing.placeholder')}
            className="block w-full pl-12 pr-12 py-3.5 text-base bg-white dark:bg-[#202124] border border-[#dfe1e5] dark:border-[#5f6368] rounded-full hover:shadow-[0_1px_6px_0_rgba(32,33,36,0.28)] dark:hover:shadow-[0_1px_6px_0_rgba(0,0,0,0.5)] focus:shadow-[0_1px_6px_0_rgba(32,33,36,0.28)] focus:outline-none transition-all"
          />
        </form>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={onGuideClick}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#303134] rounded-full transition-all border border-transparent hover:border-[#dfe1e5] dark:hover:border-[#3c4043]"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{t('common.guide')}</span>
          </button>
        </div>

        {/* Recent History */}
        {history.length > 0 && (
          <div className="mt-12 w-full animate-in fade-in duration-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-3 h-3" /> {t('common.recentGenerated')}
              </h3>
              {history.length > 3 && (
                <button 
                  onClick={onViewMoreHistory}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {t('common.viewMore')}
                </button>
              )}
            </div>
            <div className="space-y-1">
              {history.slice(0, 3).map((url, idx) => (
                <button 
                  key={idx} 
                  onClick={(e) => handleGenerate(e, url)} 
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#303134] rounded-lg transition-colors truncate flex items-center gap-3"
                >
                  <LinkIcon className="w-4 h-4 opacity-50 shrink-0" />
                  <span className="truncate">{url}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

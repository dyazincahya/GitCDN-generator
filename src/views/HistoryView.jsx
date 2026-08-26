import React from "react";
import { Clock, X, Github } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function HistoryView({
  history,
  setHistory,
  onSelect,
  onClear,
}) {
  const { t } = useLanguage();
  const removeHistoryItem = (idx) => {
    const newHistory = history.filter((_, i) => i !== idx);
    setHistory(newHistory);
    localStorage.setItem("cdn_history", JSON.stringify(newHistory));
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 animate-in fade-in duration-500">
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Clock className="w-5 h-5" /> {t("common.history")}
        </h2>
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-red-500 font-bold hover:underline"
          >
            {t("common.clearAll")}
          </button>
        )}
      </header>

      {history.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          {t("common.noHistory")}
        </div>
      ) : (
        <div className="space-y-2">
          {history.map((url, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-[#303134] rounded-xl transition-all border border-[#dfe1e5] dark:border-[#3c4043]"
            >
              <button
                onClick={() => onSelect(url)}
                className="flex-1 text-left truncate text-sm text-[#1a0dab] dark:text-[#8ab4f8] hover:underline pr-4 flex items-center gap-3"
              >
                <Github className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="truncate">{url}</span>
              </button>
              <button
                onClick={() => removeHistoryItem(idx)}
                className="p-2 text-red-500 opacity-0 group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      <footer className="mt-8 text-xs text-gray-500 text-center">
        {history.length} {t("common.itemsFound")}
      </footer>
    </div>
  );
}

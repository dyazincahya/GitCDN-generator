import React from "react";
import { X, ShieldCheck, Database, EyeOff, Lock } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function PrivacyModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-[#202124] rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-[#dfe1e5] dark:border-[#3c4043]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#303134] rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-[#34A853]" />
          <h2 className="text-2xl font-bold dark:text-white">
            {t("privacy.title")}
          </h2>
        </div>

        <div className="space-y-6 text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
          <div className="flex gap-4">
            <Database className="w-6 h-6 text-[#4285F4] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-black dark:text-white mb-1">
                {t("privacy.storage.title")}
              </h3>
              <p className="text-sm">{t("privacy.storage.desc")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <EyeOff className="w-6 h-6 text-[#EA4335] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-black dark:text-white mb-1">
                {t("privacy.tracking.title")}
              </h3>
              <p className="text-sm">{t("privacy.tracking.desc")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Lock className="w-6 h-6 text-[#FBBC05] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-black dark:text-white mb-1">
                {t("privacy.security.title")}
              </h3>
              <p className="text-sm">{t("privacy.security.desc")}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full py-3 bg-[#1a73e8] hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30"
        >
          {t("common.understand")}
        </button>
      </div>
    </div>
  );
}

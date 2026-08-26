import React from "react";
import { X, HelpCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function GuideModal({ isOpen, onClose }) {
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
          <HelpCircle className="w-8 h-8 text-[#4285F4]" />
          <h2 className="text-2xl font-bold dark:text-white">{t('guide.title')}</h2>
        </div>

        <div className="space-y-6 text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
          <div>
            <h3 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px]">1</span>
              {t('guide.step1.title')}
            </h3>
            <p className="text-sm ml-7">{t('guide.step1.desc')}</p>
          </div>

          <div>
            <h3 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#34A853] text-white rounded-full flex items-center justify-center text-[10px]">2</span>
              {t('guide.step2.title')}
            </h3>
            <p className="text-sm ml-7 mb-2">{t('guide.step2.desc')}</p>
            <div className="space-y-2 ml-7">
              <div className="text-[10px] text-gray-400 uppercase font-bold">GitHub</div>
              <code className="block text-[11px] bg-gray-100 dark:bg-[#303134] p-3 rounded-lg border border-[#dfe1e5] dark:border-[#3c4043] break-all">
                https://github.com/user/repo/blob/main/file.json
              </code>
              <div className="text-[10px] text-gray-400 uppercase font-bold">NPM</div>
              <code className="block text-[11px] bg-gray-100 dark:bg-[#303134] p-3 rounded-lg border border-[#dfe1e5] dark:border-[#3c4043] break-all">
                https://www.npmjs.com/package/jquery
              </code>
              <div className="text-[10px] text-gray-400 uppercase font-bold">WordPress</div>
              <code className="block text-[11px] bg-gray-100 dark:bg-[#303134] p-3 rounded-lg border border-[#dfe1e5] dark:border-[#3c4043] break-all">
                https://wordpress.org/plugins/wp-slimstat/
              </code>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#FBBC05] text-white rounded-full flex items-center justify-center text-[10px]">3</span>
              {t('guide.step3.title')}
            </h3>
            <p className="text-sm ml-7">{t('guide.step3.desc')}</p>
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="mt-8 w-full py-3 bg-[#1a73e8] hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30"
        >
          {t('common.start')}
        </button>
      </div>
    </div>
  );
}

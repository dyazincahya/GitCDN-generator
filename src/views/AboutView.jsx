import React from "react";
import { Info } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function AboutView() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-8 text-[#1a73e8] dark:text-[#8ab4f8] flex items-center gap-3">
        <Info className="w-8 h-8" /> {t('about.title')}
      </h2>
      <div className="space-y-6 text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed text-lg">
        <p>
          {t('about.desc1')}
        </p>
        <p>
          {t('about.desc2')}
        </p>
        
        <div className="pt-8 border-t border-[#dfe1e5] dark:border-[#3c4043] space-y-4">
          <h3 className="text-xl font-bold text-black dark:text-white">{t('about.whyTitle')}</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>{t('about.feature1')}</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
              <span>{t('about.feature2')}</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
              <span>{t('about.feature3')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

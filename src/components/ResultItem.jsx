import React from "react";
import { ChevronRight, Copy, Check, Play } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function ResultItem({ item, repoData, copiedId, copyToClipboard }) {
  const { t } = useLanguage();

  return (
    <div className="group max-w-[652px]">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-7 h-7 bg-[#f1f3f4] dark:bg-[#3c4043] rounded-full flex items-center justify-center shrink-0">
          {item.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-[#202124] dark:text-[#e8eaed]">{item.name}</span>
          <div className="flex items-center gap-1 text-xs text-[#70757a] dark:text-[#bdc1c6] truncate">
            {item.displayName} <ChevronRight className="w-3 h-3" /> github <ChevronRight className="w-3 h-3" /> {repoData.user}
          </div>
        </div>
      </div>
      
      <h3 
        className="text-xl text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer mb-1 leading-tight font-medium" 
        onClick={() => window.open(item.resultUrl, '_blank')}
      >
        {item.name} CDN - {t('results.verify')} {repoData.repo}
      </h3>
      
      <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] mb-3 leading-normal">
        <span className="font-bold text-[#70757a] dark:text-[#9aa0a6] uppercase text-[10px] mr-2">{t('results.limit')}: {item.maxSize}</span>
        {t(`results.${item.id}_desc`) || item.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4 ml-2">
        <div className="flex flex-col gap-1">
          <button 
            className="flex items-center gap-2 text-[#1a0dab] dark:text-[#8ab4f8] hover:underline text-sm font-medium" 
            onClick={() => copyToClipboard(item.resultUrl, item.id)}
          >
            {copiedId === item.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            {copiedId === item.id ? t('common.copied') : t('common.copy')}
          </button>
          <p className="text-xs text-[#70757a] dark:text-[#9aa0a6]">{t('results.directLink')}</p>
        </div>
        <div className="flex flex-col gap-1">
          <button 
            className="flex items-center gap-2 text-[#1a0dab] dark:text-[#8ab4f8] hover:underline text-sm font-medium" 
            onClick={() => window.open(item.resultUrl, '_blank')}
          >
            <Play className="w-4 h-4 fill-current" /> {t('common.test')}
          </button>
          <p className="text-xs text-[#70757a] dark:text-[#9aa0a6]">{t('results.verify')}</p>
        </div>
      </div>
    </div>
  );
}

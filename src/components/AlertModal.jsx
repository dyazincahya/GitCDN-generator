import React from "react";
import { X, AlertCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function AlertModal({ isOpen, onClose, message }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#202124] rounded-2xl max-w-sm w-full p-6 shadow-2xl relative border border-[#dfe1e5] dark:border-[#3c4043] transform transition-all animate-in zoom-in-95 duration-200"
        role="alertdialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-6 h-6 text-red-500" />
          </div>
          
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {t('common.error')}
          </h2>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {message || t('common.invalidUrl')}
          </p>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#1a73e8] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm shadow-sm"
          >
            {t('common.understand')}
          </button>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-[#303134] rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

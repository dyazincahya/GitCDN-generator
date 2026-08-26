import React from "react";
import { X, HelpCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function GuideModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const comparisonData = [
    {
      name: "jsDelivr",
      source: "GitHub, NPM, WordPress",
      limit: "15MB",
      img: false,
    },
    {
      name: "Statically",
      source: "GitHub, GitLab, Bitbucket, NPM, WordPress",
      limit: "50MB",
      img: true,
    },
    { name: "unpkg", source: "NPM", limit: "100MB+", img: false },
    { name: "GitHub Raw", source: "GitHub", limit: "100MB+", img: false },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-[#202124] rounded-3xl max-w-4xl w-full p-6 md:p-8 shadow-2xl relative border border-[#dfe1e5] dark:border-[#3c4043] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#303134] rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-8 h-8 text-[#4285F4]" />
          <h2 className="text-2xl font-bold dark:text-white">
            {t("guide.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6 text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
            <div>
              <h3 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px]">
                  1
                </span>
                {t("guide.step1.title")}
              </h3>
              <p className="text-xs ml-7">{t("guide.step1.desc")}</p>
            </div>

            <div>
              <h3 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="w-5 h-5 bg-[#34A853] text-white rounded-full flex items-center justify-center text-[10px]">
                  2
                </span>
                {t("guide.step2.title")}
              </h3>
              <p className="text-xs ml-7 mb-2">{t("guide.step2.desc")}</p>
              <div className="space-y-2 ml-7">
                <div className="text-[9px] text-gray-400 uppercase font-bold">
                  GitHub / GitLab / Bitbucket
                </div>
                <code className="block text-[10px] bg-gray-100 dark:bg-[#303134] p-2 rounded-lg border border-[#dfe1e5] dark:border-[#3c4043] break-all">
                  https://github.com/user/repo/blob/main/file.json
                </code>
                <div className="text-[9px] text-gray-400 uppercase font-bold">
                  NPM / Gist
                </div>
                <code className="block text-[10px] bg-gray-100 dark:bg-[#303134] p-2 rounded-lg border border-[#dfe1e5] dark:border-[#3c4043] break-all">
                  https://www.npmjs.com/package/jquery
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="w-5 h-5 bg-[#FBBC05] text-white rounded-full flex items-center justify-center text-[10px]">
                  3
                </span>
                {t("guide.step3.title")}
              </h3>
              <p className="text-xs ml-7">{t("guide.step3.desc")}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-black dark:text-white flex items-center gap-2">
              <span className="w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center text-[10px]">
                4
              </span>
              {t("guide.comparison.title")}
            </h3>
            <div className="overflow-hidden rounded-xl border border-[#dfe1e5] dark:border-[#3c4043]">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#303134] text-gray-500 dark:text-gray-400 border-b border-[#dfe1e5] dark:border-[#3c4043]">
                    <th className="px-3 py-3 font-bold">
                      {t("guide.comparison.colProvider")}
                    </th>
                    <th className="px-3 py-3 font-bold">
                      {t("guide.comparison.colSource")}
                    </th>
                    <th className="px-3 py-3 font-bold">
                      {t("guide.comparison.colLimit")}
                    </th>
                    <th className="px-3 py-3 font-bold text-center">
                      {t("guide.comparison.colImage")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dfe1e5] dark:divide-[#3c4043]">
                  {comparisonData.map((row) => (
                    <tr
                      key={row.name}
                      className="hover:bg-gray-50/50 dark:hover:bg-[#303134]/50"
                    >
                      <td className="px-3 py-3 font-bold text-black dark:text-white whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-3 py-3 text-gray-600 dark:text-gray-400">
                        {row.source}
                      </td>
                      <td className="px-3 py-3 text-gray-600 dark:text-gray-400">
                        {row.limit}
                      </td>
                      <td className="px-3 py-3 text-center">
                        {row.img ? (
                          <span className="text-green-600 font-bold">
                            {t("guide.comparison.yes")}
                          </span>
                        ) : (
                          <span className="text-red-500">
                            {t("guide.comparison.no")}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#1a73e8] hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30"
        >
          {t("common.start")}
        </button>
      </div>
    </div>
  );
}

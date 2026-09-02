import { useState } from "react";
import {
  ArrowRight,
  Braces,
  Check,
  Code2,
  Copy,
  ExternalLink,
  FileJson,
  Link as LinkIcon,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { parseUrl } from "../utils/helpers";

const DEFAULT_GITHUB_URL =
  "https://github.com/dyazincahya/KBBI-SQL-database/blob/main/antonim/dictionary_antonim__JSON.json";
const GITCDN_URL = "https://gitcdn-generator.vercel.app";

function createSnippets(githubUrl, generatorUrl) {
  return {
    html: `<a
  href="${generatorUrl}"
  target="_blank"
  rel="noopener noreferrer"
>
  API
</a>`,
    react: [
      `const GITHUB_URL = "${githubUrl}";`,
      `const GITCDN_URL = "${GITCDN_URL}";`,
      "",
      "function ApiButton() {",
      "  const href = GITCDN_URL + '?q=' + encodeURIComponent(GITHUB_URL);",
      "",
      "  return (",
      '    <a href={href} target="_blank" rel="noopener noreferrer">',
      "      API",
      "    </a>",
      "  );",
      "}",
    ].join("\n"),
  };
}

function CodeBlock({ code, id, copiedId, onCopy }) {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-xl border border-[#dfe1e5] dark:border-[#3c4043] bg-[#202124]">
      <button
        type="button"
        onClick={() => onCopy(code, id)}
        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors"
      >
        {copiedId === id ? (
          <Check className="h-3.5 w-3.5 text-green-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        {copiedId === id ? t("common.copied") : t("docs.copyCode")}
      </button>
      <pre className="overflow-x-auto p-5 pt-14 text-sm leading-6 text-[#e8eaed]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DeveloperDocsView() {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState(null);
  const [githubUrl, setGithubUrl] = useState(DEFAULT_GITHUB_URL);

  const trimmedGithubUrl = githubUrl.trim();
  const parsedUrl = parseUrl(trimmedGithubUrl);
  const isValidGithubJson =
    parsedUrl?.type === "github" &&
    Boolean(parsedUrl.path) &&
    parsedUrl.path.toLowerCase().endsWith(".json");
  const validationError = isValidGithubJson
    ? ""
    : t(
        trimmedGithubUrl ? "docs.generator.invalid" : "docs.generator.required",
      );
  const generatorUrl = isValidGithubJson
    ? `${GITCDN_URL}?q=${encodeURIComponent(trimmedGithubUrl)}`
    : "";
  const snippets = isValidGithubJson
    ? createSnippets(trimmedGithubUrl, generatorUrl)
    : {
        html: t("docs.generator.codeEmpty"),
        react: t("docs.generator.codeEmpty"),
      };

  const copyCode = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 2000);
  };

  const steps = [
    {
      icon: FileJson,
      title: t("docs.steps.source.title"),
      desc: t("docs.steps.source.desc"),
    },
    {
      icon: LinkIcon,
      title: t("docs.steps.url.title"),
      desc: t("docs.steps.url.desc"),
    },
    {
      icon: ExternalLink,
      title: t("docs.steps.button.title"),
      desc: t("docs.steps.button.desc"),
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 animate-in fade-in duration-500">
      <section className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 mb-5">
          <Braces className="h-4 w-4" /> {t("docs.eyebrow")}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#202124] dark:text-[#e8eaed] mb-4">
          {t("docs.title")}
        </h2>
        <p className="text-lg leading-8 text-[#5f6368] dark:text-[#bdc1c6]">
          {t("docs.intro")}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {steps.map(({ icon: Icon, title, desc }, index) => (
          <article
            key={title}
            className="rounded-2xl border border-[#dfe1e5] dark:border-[#3c4043] p-5 bg-white dark:bg-[#292a2d]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8]">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-[#9aa0a6]">
                0{index + 1}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm leading-6 text-[#5f6368] dark:text-[#bdc1c6]">
              {desc}
            </p>
          </article>
        ))}
      </section>

      <section className="mb-14">
        <h3 className="text-2xl font-bold mb-2">{t("docs.example.title")}</h3>
        <p className="text-[#5f6368] dark:text-[#bdc1c6] mb-6">
          {t("docs.example.desc")}
        </p>

        <div className="rounded-2xl border border-[#dfe1e5] dark:border-[#3c4043] overflow-hidden">
          <div className="p-5 md:p-6 bg-[#f8f9fa] dark:bg-[#292a2d]">
            <label
              htmlFor="github-json-url"
              className="block text-xs font-bold uppercase tracking-wider text-[#70757a] dark:text-[#9aa0a6] mb-2"
            >
              {t("docs.generator.inputLabel")}
            </label>
            <textarea
              id="github-json-url"
              value={githubUrl}
              onChange={(event) => setGithubUrl(event.target.value)}
              rows={3}
              spellCheck="false"
              aria-invalid={Boolean(validationError)}
              aria-describedby={
                validationError ? "github-json-url-error" : undefined
              }
              placeholder={t("docs.generator.placeholder")}
              className={`block w-full resize-y rounded-xl border bg-white dark:bg-[#202124] px-4 py-3 text-sm leading-6 outline-none transition-colors ${
                validationError
                  ? "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900/30"
                  : "border-[#dfe1e5] dark:border-[#5f6368] focus:border-[#1a73e8] focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30"
              }`}
            />
            {validationError && (
              <p
                id="github-json-url-error"
                className="mt-2 text-xs text-red-600 dark:text-red-400"
              >
                {validationError}
              </p>
            )}
          </div>
          <div className="flex justify-center -my-3 relative z-10">
            <div className="rounded-full border border-[#dfe1e5] dark:border-[#3c4043] bg-white dark:bg-[#202124] p-2 text-[#1a73e8] dark:text-[#8ab4f8]">
              <ArrowRight className="h-4 w-4 rotate-90" />
            </div>
          </div>
          <div className="p-5 md:p-6 bg-white dark:bg-[#202124]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#70757a] dark:text-[#9aa0a6] mb-2">
              {t("docs.example.generatorLabel")}
            </p>
            {generatorUrl ? (
              <a
                href={generatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-[#1a73e8] dark:text-[#8ab4f8] hover:underline break-all"
              >
                {generatorUrl}
              </a>
            ) : (
              <p className="text-sm text-[#9aa0a6]">
                {t("docs.generator.outputEmpty")}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h3 className="text-2xl font-bold mb-2">{t("docs.pattern.title")}</h3>
        <p className="text-[#5f6368] dark:text-[#bdc1c6] mb-5">
          {t("docs.pattern.desc")}
        </p>
        <CodeBlock
          code={generatorUrl || t("docs.generator.outputEmpty")}
          id="pattern"
          copiedId={copiedId}
          onCopy={copyCode}
        />
        <div className="mt-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 px-4 py-3 text-sm leading-6 text-amber-900 dark:text-amber-200">
          <strong>{t("docs.pattern.noteTitle")}</strong>{" "}
          {t("docs.pattern.note")}
        </div>
      </section>

      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <Code2 className="h-6 w-6 text-[#1a73e8] dark:text-[#8ab4f8]" />
          <h3 className="text-2xl font-bold">
            {t("docs.implementation.title")}
          </h3>
        </div>
        <p className="text-[#5f6368] dark:text-[#bdc1c6] mb-7">
          {t("docs.implementation.desc")}
        </p>

        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-3">HTML</h4>
            <CodeBlock
              code={snippets.html}
              id="html"
              copiedId={copiedId}
              onCopy={copyCode}
            />
          </div>
          <div>
            <h4 className="font-semibold mb-3">React</h4>
            <CodeBlock
              code={snippets.react}
              id="react"
              copiedId={copiedId}
              onCopy={copyCode}
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 p-6 md:p-8">
        <h3 className="text-xl font-bold mb-3">{t("docs.checklist.title")}</h3>
        <ul className="space-y-3 text-[#4d5156] dark:text-[#bdc1c6]">
          {["public", "github", "encode", "everyItem", "newTab"].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="h-5 w-5 shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
              <span>{t(`docs.checklist.${item}`)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import { translations } from "./constants/translations.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider translations={translations}>
      <App />
      <Analytics />
    </LanguageProvider>
  </React.StrictMode>,
);

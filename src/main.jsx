import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import { translations } from "./constants/translations.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider translations={translations}>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);

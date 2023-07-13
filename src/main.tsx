import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const consoleWarn = console.warn;
const SUPPRESSED_WARNINGS = ["Warning: React does not recognize"];
console.warn = function filterWarnings(msg, ...args) {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
    consoleWarn(msg, ...args);
  }
};
console.warn("Warning: React does not recognize");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

//S.O.L.I.D - SRP - Single Responsibility Principle
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

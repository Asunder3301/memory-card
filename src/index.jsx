import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App.jsx";
import "./styles.css";
import "./modern-normalize.css";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find root element");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

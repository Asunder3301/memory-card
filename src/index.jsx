import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./modern-normalize.css";

function App() {
  return <h1>Webpack React Template!</h1>;
}

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find root element");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

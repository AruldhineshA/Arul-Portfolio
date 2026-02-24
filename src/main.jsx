/**
 * Client entry point.
 *
 * Uses hydrateRoot when pre-rendered HTML exists (production),
 * and createRoot when the root is empty (development).
 *
 * hydrate = "Attach React event listeners to existing HTML"
 *           (the HTML was already rendered by the pre-render script)
 * createRoot = "Render everything from scratch"
 *              (normal development mode, no pre-rendered HTML)
 */
import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// If root has pre-rendered content, hydrate it (attach events to existing HTML)
// If root is empty (dev mode), create from scratch
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

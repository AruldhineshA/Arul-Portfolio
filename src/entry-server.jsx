/**
 * Server-side entry point for pre-rendering (SSG).
 *
 * This file is used during the build process to render the React app
 * to a static HTML string. This HTML is then injected into index.html
 * so that search engines and `curl` see full content instead of an empty page.
 *
 * How it works:
 * 1. `renderToString()` converts React components → HTML string
 * 2. The pre-render script (prerender.mjs) calls this function
 * 3. The resulting HTML is injected into the built index.html
 * 4. On the client, React "hydrates" this HTML (adds interactivity)
 */
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render() {
  const html = renderToString(<App />);
  return html;
}

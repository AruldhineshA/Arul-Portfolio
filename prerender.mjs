/**
 * Pre-render Script (Static Site Generation)
 *
 * This script runs AFTER the Vite build and does the following:
 * 1. Loads the server-rendered React bundle (dist-ssr/entry-server.js)
 * 2. Calls render() to get the full HTML of all components
 * 3. Injects that HTML into dist/index.html (replacing empty <div id="root">)
 *
 * Result: When someone does `curl yoursite.com`, they see FULL HTML content
 * instead of just <div id="root"></div>
 *
 * Usage: node prerender.mjs (called automatically by `npm run build`)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  try {
    // Step 1: Load the server-side rendered bundle
    const { render } = await import("./dist-ssr/entry-server.js");

    // Step 2: Read the client-built HTML template
    const templatePath = path.resolve(__dirname, "dist/index.html");
    const template = fs.readFileSync(templatePath, "utf-8");

    // Step 3: Render the React app to an HTML string
    const appHtml = render();

    // Step 4: Inject the rendered HTML into the template
    // Replace the empty <div id="root"></div> with the pre-rendered content
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Step 5: Write the pre-rendered HTML back to dist/index.html
    fs.writeFileSync(templatePath, html);

    console.log("Pre-rendering complete! dist/index.html now contains full HTML content.");
    console.log(`HTML size: ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);
  } catch (error) {
    console.error("Pre-rendering failed:", error.message);
    console.error("The site will still work (client-side rendering), but curl/SEO won't see full content.");
    // Don't exit with error - the site still works without pre-rendering
  }
}

prerender();

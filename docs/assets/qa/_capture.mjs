/**
 * Captures desktop + mobile full-page screenshots of the running dev server.
 *
 *   npm run dev            # in one terminal
 *   node docs/assets/qa/_capture.mjs [port]
 *
 * Uses the puppeteer-core bundled with the Chrome DevTools MCP plugin and the
 * locally installed Edge binary, so it adds no project dependencies.
 */
import puppeteer from "file:///C:/Users/cmurray/.claude/plugins/cache/claude-plugins-official/chrome-devtools-mcp/1.6.0/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const port = process.argv[2] ?? "3000";
const target = `http://localhost:${port}/`;

// The boot loader runs for ~1.9s; wait past it so captures show the real page.
const LOADER_SETTLE_MS = 2600;

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();

const shoot = async (name, viewport) => {
  await page.setViewport(viewport);
  await page.goto(target, { waitUntil: "networkidle2" });
  await new Promise((resolve) => setTimeout(resolve, LOADER_SETTLE_MS));
  await page.screenshot({
    path: path.join(__dirname, `${name}.png`),
    fullPage: true,
  });
  console.log(`captured ${name}.png`);
};

await shoot("desktop-1440", { width: 1440, height: 900 });
await shoot("mobile-390", { width: 390, height: 844 });

await browser.close();
console.log("DONE");

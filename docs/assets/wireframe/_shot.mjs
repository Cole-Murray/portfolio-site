import puppeteer from "file:///C:/Users/cmurray/.claude/plugins/cache/claude-plugins-official/chrome-devtools-mcp/1.6.0/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const target = pathToFileURL(path.join(__dirname, "page-structure.html")).href;

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 1000 },
});

const page = await browser.newPage();
await page.goto(target, { waitUntil: "load" });
await page.screenshot({ path: path.join(__dirname, "wireframe-full.png"), fullPage: true });

await page.setViewport({ width: 390, height: 844 });
await page.reload({ waitUntil: "load" });
await page.screenshot({ path: path.join(__dirname, "wireframe-mobile.png"), fullPage: true });

await browser.close();
console.log("DONE");

import puppeteer from "file:///C:/Users/cmurray/.claude/plugins/cache/claude-plugins-official/chrome-devtools-mcp/1.6.0/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const sites = [
  { name: "3-calebkang", url: "https://www.calebkang.dev/" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

for (const s of sites) {
  const page = await browser.newPage();
  try {
    console.log(`Loading ${s.url}`);
    await page.goto(s.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    // let loaders/hero animations settle
    await sleep(8000);
    await page.screenshot({ path: path.join(__dirname, `${s.name}-hero.png`) });
    // scroll partway to catch the post-hero / featured sections
    await page.evaluate(() => window.scrollTo(0, Math.round(window.innerHeight * 1.2)));
    await sleep(2500);
    await page.screenshot({ path: path.join(__dirname, `${s.name}-mid.png`) });
    await page.evaluate(() => window.scrollTo(0, Math.round(window.innerHeight * 2.6)));
    await sleep(2500);
    await page.screenshot({ path: path.join(__dirname, `${s.name}-lower.png`) });
    console.log(`  captured ${s.name}`);
  } catch (e) {
    console.log(`  ERROR ${s.name}: ${e.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("DONE");

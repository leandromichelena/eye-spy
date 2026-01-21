import { afterAll, beforeAll, expect, test } from "vitest";
import { createServer } from "vite";
import path from "node:path";
import fs from "node:fs";
import getPort from "get-port";
import { chromium } from "playwright";

let vite;
let baseUrl;

const normalizePath = (urlString) => {
  const url = new URL(urlString);
  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  return pathname;
};

const isSkippableHref = (href) => {
  if (!href) return true;

  const trimmed = href.trim();
  if (!trimmed) return true;

  return (
    trimmed.startsWith("#") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("javascript:") ||
    /^(https?:)?\/\//i.test(trimmed)
  );
};

beforeAll(async () => {
  const port = await getPort();
  const cwdRoot = path.resolve(process.cwd());
  const fileRoot = path.resolve(__dirname, "../../..");

  const isClientRoot = (dir) =>
    fs.existsSync(path.join(dir, "index.html")) &&
    fs.existsSync(path.join(dir, "vite.config.js"));

  const root = isClientRoot(cwdRoot) ? cwdRoot : fileRoot;

  vite = await createServer({
    root,
    appType: "spa",
    configFile: path.join(root, "vite.config.js"),
    server: { port, strictPort: true },
    logLevel: "error",
  });

  await vite.listen();
  const address = vite.httpServer.address();
  baseUrl = `http://localhost:${address.port}`;
}, 60_000);

afterAll(async () => {
  if (vite) await vite.close();
}, 60_000);

test(
  "internal links resolve (no NotFound)",
  async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    const toVisit = ["/"];
    const visited = new Set();
    const broken = [];

    while (toVisit.length) {
      const pathname = toVisit.shift();
      if (!pathname || visited.has(pathname)) continue;
      visited.add(pathname);

      const url = `${baseUrl}${pathname}`;

      try {
        await page.goto(url, { waitUntil: "domcontentloaded" });
      } catch (err) {
        broken.push({ href: pathname, reason: `navigation error: ${err?.message || err}` });
        continue;
      }

      const hasRoot = await page.evaluate(() => Boolean(document.getElementById("root")));
      if (!hasRoot) {
        const contentType = await page.evaluate(() => document.contentType);
        broken.push({ href: pathname, reason: `missing #root (contentType=${contentType})` });
        continue;
      }

      try {
        await page.waitForFunction(
          () => (document.getElementById("root")?.children?.length || 0) > 0,
          { timeout: 10_000 }
        );
      } catch {
        broken.push({ href: pathname, reason: "empty page" });
        continue;
      }

      const notFound = await page.locator('[data-testid="not-found"]').count();
      if (notFound > 0) {
        broken.push({ href: pathname, reason: "rendered NotFound" });
        continue;
      }

      const hrefs = await page.$$eval("a[href]", (els) =>
        els
          .map((el) => el.getAttribute("href"))
          .filter(Boolean)
      );

      for (const href of hrefs) {
        if (isSkippableHref(href)) continue;

        const resolved = new URL(href, url);
        if (resolved.origin !== new URL(baseUrl).origin) continue;

        const nextPath = normalizePath(resolved.toString());
        if (!visited.has(nextPath)) toVisit.push(nextPath);
      }
    }

    await browser.close();

    if (broken.length) {
      const report = broken
        .map((b) => `- ${b.href} (${b.reason})`)
        .join("\n");
      expect.fail(`Broken internal links found:\n${report}`);
    }
  },
  { timeout: 120_000 }
);

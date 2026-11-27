import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "public");
const PORT = Number(process.env.PORT || 4173);
const HOST = "127.0.0.1";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const target = path.normalize(path.join(ROOT, clean));
  if (!target.startsWith(ROOT)) return null;

  const candidates = [];
  if (clean.endsWith("/")) candidates.push(path.join(target, "index.html"));
  else {
    candidates.push(target);
    candidates.push(target + ".html");
    candidates.push(path.join(target, "index.html"));
  }
  for (const c of candidates) {
    try {
      if (fs.statSync(c).isFile()) return c;
    } catch {}
  }
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(new URL(req.url, "http://localhost").pathname);
  if (!file) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("404 Not Found");
    return;
  }
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, {
    "content-type": MIME[ext] || "application/octet-stream",
    "cache-control": "no-store",
    "access-control-allow-origin": "*",
  });
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`Local preview: http://${HOST}:${PORT}/`);
});

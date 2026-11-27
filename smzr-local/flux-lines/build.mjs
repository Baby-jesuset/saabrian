import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const here = path.dirname(fileURLToPath(import.meta.url));
const outdir = path.resolve(here, '..', 'public', '_astro', 'flux-lines');

fs.mkdirSync(outdir, { recursive: true });

const started = Date.now();

const result = await build({
  entryPoints: [path.join(here, 'src', 'mount.jsx')],
  outdir,
  entryNames: 'flux-lines',
  assetNames: '[name]',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'none',
  logLevel: 'warning',
  metafile: true
});

const kb = bytes => `${(bytes / 1024).toFixed(1)} KB`;
const gzip = bytes => zlib.gzipSync(bytes, { level: 9 }).length;

for (const file of fs.readdirSync(outdir).sort()) {
  const full = path.join(outdir, file);
  const bytes = fs.readFileSync(full);
  console.log(
    `${file.padEnd(14)} ${kb(bytes.byteLength).padStart(10)}  (${kb(gzip(bytes)).padStart(9)} gzip)`
  );
}

const inputs = Object.keys(result.metafile.inputs).length;
console.log(`\nBundled ${inputs} modules in ${Date.now() - started} ms -> ${path.relative(here, outdir)}`);

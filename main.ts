import { copyFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const source = new URL("./entry.png", import.meta.url);
const image = readFileSync(source);

if (image.length < 1 || image.length > MAX_BYTES) {
  throw new Error(`entry.png is ${image.length} bytes, outside the 1..${MAX_BYTES} range`);
}
if (!image.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with PNG magic bytes");
}

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Confirm the copy landed intact before reporting success.
const written = readFileSync(target);
if (written.length !== image.length || !written.equals(image)) {
  throw new Error("copied entry.png does not match the source bytes");
}
console.log(`wrote ${target} (${image.length} bytes)`);

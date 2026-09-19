import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "../..");
const source = readFileSync(join(here, "municipalities.ts"), "utf8");

const stillSlugs = [
  "antas",
  "carboneras",
  "cuevas-del-almanzora",
  "garrucha",
  "huercal-overa",
  "los-gallardos",
  "lubrin",
  "mojacar",
  "pulpi",
  "turre",
  "vera",
];

describe("municipalities coverage media", () => {
  it("keeps a public geography map on every municipality", () => {
    assert.equal((source.match(/map: \{ lat:/g) ?? []).length, 12);
    assert.match(source, /image: MunicipalityImage \| null/);
    assert.match(source, /coverageStill\("vera"\)/);
  });

  it("publishes stills for every coverage illustration on disk", () => {
    for (const slug of stillSlugs) {
      assert.match(source, new RegExp(`image: coverageStill\\("${slug}"\\)`));
      const file = join(
        root,
        "public/images/cobertura",
        `mantenimiento-informatico-ia-${slug}-web.jpg`,
      );
      assert.equal(existsSync(file), true, file);
    }
    assert.equal((source.match(/image: coverageStill\(/g) ?? []).length, 11);
    assert.equal((source.match(/image: null/g) ?? []).length, 1);
    assert.match(source, /slug: "bedar"[\s\S]*?image: null/);
  });
});

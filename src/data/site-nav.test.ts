import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

const src = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("site navigation files", () => {
  it("keeps IA por sector as a first-level header destination", () => {
    const navbar = readFileSync(join(src, "components/layout/Navbar.tsx"), "utf8");
    const siteNav = readFileSync(join(src, "data/site-nav.ts"), "utf8");
    assert.match(siteNav, /iaPorSector: \{ href: "\/ia-por-sector"/);
    assert.match(navbar, /primaryNav\.iaPorSector/);
    assert.match(navbar, /aria-label="Principal"/);
    assert.match(navbar, /aria-label="Móvil"/);
  });

  it("does not send the services hub to a home hash", () => {
    const siteNav = readFileSync(join(src, "data/site-nav.ts"), "utf8");
    assert.match(siteNav, /href: "\/servicios"/);
    assert.match(siteNav, /href: "\/inteligencia-artificial"/);
    assert.match(siteNav, /href: "\/cobertura"/);
    assert.equal(siteNav.includes("/#servicios"), false);
    assert.equal(siteNav.includes("/#ia"), false);
  });
});

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  brandHoldSectors,
  footerPrioritySectors,
  getIaSector,
  getIaSectors,
  getRelatedSectors,
  iaContactHref,
  iaSectors,
  sectorFilterIds,
} from "./ia-sectors.ts";

describe("iaSectors", () => {
  it("defines 14 unique sector slugs", () => {
    const slugs = iaSectors.map((item) => item.slug);
    assert.equal(slugs.length, 14);
    assert.equal(new Set(slugs).size, 14);
  });

  it("exposes every sector in hub order without gaps", () => {
    const ordered = getIaSectors();
    assert.deepEqual(
      ordered.map((item) => item.hubOrder),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    );
  });

  it("keeps related slugs inside the catalogue", () => {
    for (const sector of iaSectors) {
      assert.equal(getRelatedSectors(sector).length, sector.related.length);
      assert.ok(sector.solutions.length >= 4);
      assert.ok(sector.solutions.length <= 8);
      assert.ok(sector.faqs.length >= 3);
      assert.ok(sector.tags.length === 3);
      assert.ok(sectorFilterIds.includes(sector.filter));
    }
  });

  it("does not publish branded illustrations", () => {
    const held = brandHoldSectors();
    assert.deepEqual(
      held.map((item) => item.slug).sort(),
      [
        "agroalimentacion",
        "banca-finanzas",
        "industria-ingenieria",
        "inmobiliario",
      ],
    );
    for (const sector of held) {
      assert.equal(sector.image.src, null);
      assert.equal(sector.image.brandHold?.flag, "NEEDS_BRAND_NEUTRAL_VERSION");
    }
  });

  it("builds contact URLs with sector and CTA context", () => {
    assert.equal(
      iaContactHref({
        sector: "logistica-transporte",
        cta: "sector-final",
        source: "/ia-por-sector/logistica-transporte",
      }),
      "/contacto?motivo=ia&sector=logistica-transporte&cta=sector-final&origen=%2Fia-por-sector%2Flogistica-transporte",
    );
    assert.equal(getIaSector("missing"), undefined);
    assert.equal(footerPrioritySectors.length, 4);
  });
});

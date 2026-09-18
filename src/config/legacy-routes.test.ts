import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isGonePath, normalizePath, redirectDestination } from "./legacy-routes.ts";

describe("legacy routes", () => {
  it("does not treat current municipal landings as gone", () => {
    assert.equal(isGonePath("/servicios-informaticos/vera"), false);
    assert.equal(isGonePath("/servicios-informaticos/mojacar"), false);
  });

  it("marks withdrawn agency URLs as gone", () => {
    assert.equal(isGonePath("/agencia"), true);
    assert.equal(isGonePath("/wordpress"), true);
    assert.equal(isGonePath("/servicios/wordpress"), true);
    assert.equal(isGonePath("/blog/una-entrada"), true);
  });

  it("keeps the live /servicios hub indexable and not redirected", () => {
    assert.equal(isGonePath("/servicios"), false);
    assert.equal(redirectDestination("/servicios"), undefined);
  });

  it("normalizes trailing slashes", () => {
    assert.equal(normalizePath("/agencia/"), "/agencia");
  });

  it("marks WordPress admin paths as gone", () => {
    assert.equal(isGonePath("/wp-admin"), true);
    assert.equal(isGonePath("/wp-content/themes/old"), true);
  });
});

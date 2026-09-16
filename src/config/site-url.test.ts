import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CANONICAL_SITE_URL, resolveSiteUrl } from "./site-url.ts";

describe("resolveSiteUrl", () => {
  it("falls back when the env var is missing", () => {
    assert.equal(resolveSiteUrl(undefined), CANONICAL_SITE_URL);
  });

  it("falls back when the env var is empty or whitespace", () => {
    assert.equal(resolveSiteUrl(""), CANONICAL_SITE_URL);
    assert.equal(resolveSiteUrl("   "), CANONICAL_SITE_URL);
  });

  it("accepts a valid absolute URL and strips a trailing slash", () => {
    assert.equal(resolveSiteUrl("https://laoveja.es/"), CANONICAL_SITE_URL);
  });

  it("adds https when the protocol is missing", () => {
    assert.equal(resolveSiteUrl("laoveja.es"), CANONICAL_SITE_URL);
  });

  it("falls back when the value is not a valid URL", () => {
    assert.equal(resolveSiteUrl("not a url"), CANONICAL_SITE_URL);
  });
});

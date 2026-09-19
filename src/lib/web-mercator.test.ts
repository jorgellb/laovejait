import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  esriDarkBaseUrl,
  formatGeoReadout,
  lonToTileX,
  latToTileY,
  osmMapUrl,
  tileWindow,
} from "./web-mercator.ts";

describe("web mercator dark tiles", () => {
  it("projects Vera into the expected tile at z14", () => {
    const x = lonToTileX(-1.8681, 14);
    const y = latToTileY(37.2472, 14);
    assert.ok(x > 8106 && x < 8108);
    assert.ok(y > 6362 && y < 6364);
  });

  it("builds key-free Esri Dark Gray URLs", () => {
    const url = esriDarkBaseUrl(14, 8106, 6363);
    assert.equal(
      url,
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/14/6363/8106",
    );
    assert.equal(url.includes("key="), false);
    assert.equal(url.includes("apikey"), false);
    assert.equal(url.includes("token="), false);
  });

  it("keeps the marker inside the tile window", () => {
    const window = tileWindow(37.2472, -1.8681, 14, 4, 3);
    assert.equal(window.tiles.length, 12);
    assert.ok(window.markerX > 0 && window.markerX < 1);
    assert.ok(window.markerY > 0 && window.markerY < 1);
    assert.match(window.tiles[0].baseUrl, /World_Dark_Gray_Base/);
    assert.match(window.tiles[0].labelUrl, /World_Dark_Gray_Reference/);
    assert.match(formatGeoReadout(37.2472, -1.8681), /N 37\.2472°\s+W 1\.8681°/);
    assert.equal(
      osmMapUrl(37.2472, -1.8681, 14),
      "https://www.openstreetmap.org/?mlat=37.2472&mlon=-1.8681#map=14/37.2472/-1.8681",
    );
  });
});

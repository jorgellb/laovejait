export function lonToTileX(lon: number, zoom: number): number {
  return ((lon + 180) / 360) * 2 ** zoom;
}

export function latToTileY(lat: number, zoom: number): number {
  const rad = (lat * Math.PI) / 180;
  return (
    ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) *
    2 ** zoom
  );
}

export function wrapTileX(x: number, zoom: number): number {
  const n = 2 ** zoom;
  return ((Math.floor(x) % n) + n) % n;
}

export function clampTileY(y: number, zoom: number): number {
  const max = 2 ** zoom - 1;
  return Math.min(Math.max(Math.floor(y), 0), max);
}

function esriCanvasUrl(
  layer: "World_Dark_Gray_Base" | "World_Dark_Gray_Reference",
  z: number,
  x: number,
  y: number,
): string {
  const zoom = Math.min(Math.max(Math.round(z), 0), 20);
  const wrappedX = wrapTileX(x, zoom);
  const clampedY = clampTileY(y, zoom);
  return `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/${layer}/MapServer/tile/${zoom}/${clampedY}/${wrappedX}`;
}

export function esriDarkBaseUrl(z: number, x: number, y: number): string {
  return esriCanvasUrl("World_Dark_Gray_Base", z, x, y);
}

export function esriDarkLabelUrl(z: number, x: number, y: number): string {
  return esriCanvasUrl("World_Dark_Gray_Reference", z, x, y);
}

export function osmMapUrl(lat: number, lon: number, zoom: number): string {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
}

export function formatGeoReadout(lat: number, lon: number): string {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lon >= 0 ? "E" : "W";
  return `${ns} ${Math.abs(lat).toFixed(4)}°  ${ew} ${Math.abs(lon).toFixed(4)}°`;
}

export type MercatorTile = {
  col: number;
  row: number;
  baseUrl: string;
  labelUrl: string;
};

export function tileWindow(
  lat: number,
  lon: number,
  zoom: number,
  cols: number,
  rows: number,
): {
  tiles: MercatorTile[];
  markerX: number;
  markerY: number;
} {
  const safeZoom = Math.min(Math.max(zoom, 1), 18);
  const x = lonToTileX(lon, safeZoom);
  const y = latToTileY(lat, safeZoom);
  const startX = Math.floor(x - cols / 2);
  const startY = Math.floor(y - rows / 2);
  const tiles: MercatorTile[] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const tileX = startX + col;
      const tileY = startY + row;
      tiles.push({
        col,
        row,
        baseUrl: esriDarkBaseUrl(safeZoom, tileX, tileY),
        labelUrl: esriDarkLabelUrl(safeZoom, tileX, tileY),
      });
    }
  }
  return {
    tiles,
    markerX: (x - startX) / cols,
    markerY: (y - startY) / rows,
  };
}

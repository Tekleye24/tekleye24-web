import fs from "node:fs";
import path from "node:path";

const HERO_PHOTOS_DIR = path.join(process.cwd(), "public", "hero");
const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp)$/i;

export function getHeroPhotos(): string[] {
  try {
    return fs
      .readdirSync(HERO_PHOTOS_DIR)
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort()
      .map((file) => `/hero/${file}`);
  } catch {
    return [];
  }
}

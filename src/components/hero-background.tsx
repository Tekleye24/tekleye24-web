"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroBackground({ photos }: { photos: string[] }) {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (photos.length === 0) return;
    // Randomized client-side, after mount, so the server-rendered HTML (and
    // every visitor's first paint) doesn't have to agree on one photo —
    // avoids a hydration mismatch while still giving a new photo per load.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhoto(photos[Math.floor(Math.random() * photos.length)]);
  }, [photos]);

  if (!photo) return null;

  return (
    <Image src={photo} alt="" fill priority sizes="100vw" className="object-cover" />
  );
}

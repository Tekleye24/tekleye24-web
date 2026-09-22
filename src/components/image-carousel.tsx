"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function ImageCarousel({
  photos,
  intervalMs = 4000,
  className,
}: {
  photos: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  if (photos.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

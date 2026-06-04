"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./FeatureBlock.module.css";

/** height / width — por encima de esto se considera imagen muy vertical */
const VERTICAL_ASPECT = 1.25;

type ImageMode = "default" | "vertical-fill" | "vertical-scroll";

type FeatureBlockImageProps = {
  src: string;
  alt: string;
};

export default function FeatureBlockImage({ src, alt }: FeatureBlockImageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [mode, setMode] = useState<ImageMode>("default");

  const updateMode = useCallback(() => {
    const img = imgRef.current;
    const scroll = scrollRef.current;
    if (!img || !scroll || !img.complete || img.naturalWidth === 0) return;

    const aspect = img.naturalHeight / img.naturalWidth;
    if (aspect < VERTICAL_ASPECT) {
      setMode("default");
      return;
    }

    const fitsInFrame =
      img.offsetHeight <= scroll.clientHeight &&
      img.offsetWidth <= scroll.clientWidth;

    setMode(fitsInFrame ? "vertical-fill" : "vertical-scroll");
  }, []);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const observer = new ResizeObserver(() => updateMode());
    observer.observe(scroll);
    return () => observer.disconnect();
  }, [updateMode]);

  return (
    <figure className={styles.imageWrap}>
      <div
        ref={scrollRef}
        className={styles.imageScroll}
        data-mode={mode}
      >
        <img
          ref={imgRef}
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => requestAnimationFrame(updateMode)}
        />
      </div>
    </figure>
  );
}

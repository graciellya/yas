"use client";

import { useEffect, useRef } from "react";

export type LocalVideoControls = {
  play: () => void;
  pause: () => void;
};

type LocalScrollVideoProps = {
  src: string;
  fallbackSrc?: string;
  onReady?: (controls: LocalVideoControls) => void;
};

export function LocalScrollVideo({
  src,
  fallbackSrc,
  onReady,
}: LocalScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => undefined);
    };

    const notify = () => {
      onReady?.({
        play,
        pause: () => video.pause(),
      });
      play();
    };

    video.addEventListener("loadeddata", notify);
    video.addEventListener("canplay", play);
    notify();

    return () => {
      video.removeEventListener("loadeddata", notify);
      video.removeEventListener("canplay", play);
    };
  }, [onReady, src]);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      {fallbackSrc ? (
        <source src={fallbackSrc} type="video/quicktime" />
      ) : null}
    </video>
  );
}

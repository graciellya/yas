"use client";

import { useEffect, useRef } from "react";

export type LocalVideoControls = {
  play: () => void;
  pause: () => void;
};

type LocalScrollVideoProps = {
  src: string;
  fallbackSrc?: string;
  startAt?: number;
  onReady?: (controls: LocalVideoControls) => void;
};

export function LocalScrollVideo({
  src,
  fallbackSrc,
  startAt,
  onReady,
}: LocalScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantsPlayRef = useRef(false);
  const startAtRef = useRef(startAt);
  const onReadyRef = useRef(onReady);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    startAtRef.current = startAt;
  }, [startAt]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.pause();

    const seekToStart = (force = false) => {
      const offset = startAtRef.current;
      if (offset == null || !Number.isFinite(video.duration)) return;
      if (
        force ||
        video.currentTime < offset ||
        video.currentTime >= video.duration - 0.05
      ) {
        video.currentTime = offset;
      }
    };

    const tryPlay = () => {
      if (!wantsPlayRef.current) return;
      void video.play().catch(() => undefined);
    };

    const controls: LocalVideoControls = {
      play: () => {
        wantsPlayRef.current = true;
        seekToStart(true);
        tryPlay();
      },
      pause: () => {
        wantsPlayRef.current = false;
        video.pause();
      },
    };

    const notify = () => {
      onReadyRef.current?.(controls);
      tryPlay();
    };

    const onEnded = () => {
      if (startAtRef.current == null) return;
      video.currentTime = startAtRef.current;
      if (wantsPlayRef.current) {
        void video.play().catch(() => undefined);
      }
    };

    const onLoadedMetadata = () => {
      seekToStart();
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("loadeddata", notify);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("canplaythrough", tryPlay);
    video.addEventListener("ended", onEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      notify();
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("loadeddata", notify);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("canplaythrough", tryPlay);
      video.removeEventListener("ended", onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      muted
      playsInline
      loop={startAt == null}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      {fallbackSrc ? (
        <source src={fallbackSrc} type="video/quicktime" />
      ) : null}
    </video>
  );
}

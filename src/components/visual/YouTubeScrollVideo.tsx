"use client";

import { useEffect, useRef, useState } from "react";
import { getYouTubeVideoId } from "@/lib/youtube";
import "./YouTubeScrollVideo.css";

type YouTubePlayer = {
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getDuration: () => number;
  mute: () => void;
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
};

export type YouTubeVideoControls = {
  play: () => void;
  pause: () => void;
};

type YouTubeScrollVideoProps = {
  url: string;
  onReady?: (controls: YouTubeVideoControls) => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YouTubePlayer }) => void;
          };
        },
      ) => YouTubePlayer;
      PlayerState?: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiLoading: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiLoading) return apiLoading;

  apiLoading = new Promise((resolve) => {
    const existing = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    );
    if (existing) {
      const check = setInterval(() => {
        if (window.YT?.Player) {
          clearInterval(check);
          resolve();
        }
      }, 50);
      return;
    }

    const prior = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prior?.();
      resolve();
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });

  return apiLoading;
}

export function YouTubeScrollVideo({ url, onReady }: YouTubeScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [failed, setFailed] = useState(false);

  const videoId = getYouTubeVideoId(url);

  useEffect(() => {
    if (!videoId || !containerRef.current) {
      setFailed(true);
      return;
    }

    let cancelled = false;

    loadYouTubeApi()
      .then(() => {
        if (cancelled || !containerRef.current || !window.YT?.Player) return;

        const player = new window.YT.Player(containerRef.current, {
          videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            playsinline: 1,
            loop: 1,
            playlist: videoId,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            disablekb: 1,
            iv_load_policy: 3,
            enablejsapi: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              playerRef.current = event.target;
              event.target.mute();
              event.target.playVideo();

              onReady?.({
                play: () => event.target.playVideo(),
                pause: () => event.target.pauseVideo(),
              });
            },
          },
        });

        void player;
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [videoId, onReady]);

  if (!videoId || failed) {
    return (
      <div className="hero-fallback flex h-full w-full items-center justify-center px-6 text-center text-sm text-white/60">
        Add your YouTube link in{" "}
        <code className="mx-1 text-white/80">src/data/media.ts</code>
      </div>
    );
  }

  return <div ref={containerRef} className="yt-scroll-video h-full w-full" />;
}

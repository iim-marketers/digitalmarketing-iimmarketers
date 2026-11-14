"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, type CSSProperties } from "react";
import { preload } from "react-dom";

import { cn } from "@/lib/utils";

/** Must match the key in the inline script in app/layout.tsx. */
export const HERO_INTRO_KEY = "iim-hero-intro";

const DEER_SRC = "/images/brand/logo-mark.webp";
/** Adapted from "animal" by Saheb on LottieFiles (Lottie Simple License). */
const RUN_SPRITE_SRC = "/images/brand/deer-run.webp";

const FINAL_ANIMATIONS = ["hero-deer-back-run", "hero-deer-glow"];

const SPARKS = [
  { x: 30, y: 74, dx: -55, dy: -18, delay: 0, size: 1 },
  { x: 38, y: 80, dx: -70, dy: -6, delay: 0.09, size: 0.7 },
  { x: 26, y: 66, dx: -48, dy: -30, delay: 0.18, size: 0.85 },
  { x: 55, y: 82, dx: -62, dy: -12, delay: 0.27, size: 0.6 },
  { x: 34, y: 70, dx: -80, dy: -22, delay: 0.36, size: 1.1 },
  { x: 60, y: 78, dx: -58, dy: -26, delay: 0.45, size: 0.75 },
  { x: 22, y: 60, dx: -66, dy: -8, delay: 0.54, size: 0.9 },
  { x: 46, y: 84, dx: -74, dy: -16, delay: 0.63, size: 0.65 },
];

const markIntroDone = () => {
  document.documentElement.dataset.heroIntro = "done";
};

function RunnerRig({ className }: { className?: string }) {
  return (
    <div className={cn("hero-deer-rig", className)}>
      <span className="hero-deer-trail" />
      <span className="hero-deer-aura" />
      <span className="hero-deer-sparks">
        {SPARKS.map((s, i) => (
          <i
            key={i}
            style={
              {
                "--x": `${s.x}%`,
                "--y": `${s.y}%`,
                "--dx": `${s.dx}%`,
                "--dy": `${s.dy}%`,
                "--spark-delay": `${s.delay}s`,
                "--spark-size": s.size,
              } as CSSProperties
            }
          />
        ))}
      </span>
      <span
        className="hero-deer-runner"
        style={{
          maskImage: `url(${RUN_SPRITE_SRC})`,
          WebkitMaskImage: `url(${RUN_SPRITE_SRC})`,
        }}
      />
    </div>
  );
}

function Pass({ side }: { side: "front" | "back" }) {
  return (
    <div className={`hero-deer-pass hero-deer-pass-${side} absolute`}>
      <div className="hero-deer-pass-run h-full">
        <div className="hero-deer-pass-y h-full">
          <div className="hero-deer-pass-tilt">
            <RunnerRig className={`hero-deer-rig-${side}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroLogo({ className }: { className?: string }) {
  const ended = useRef(new Set<string>());

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(HERO_INTRO_KEY)) markIntroDone();
    } catch {}
  }, []);

  preload(RUN_SPRITE_SRC, { as: "image", fetchPriority: "high" });

  return (
    <div
      aria-hidden
      className="hero-deer-scene pointer-events-none absolute inset-0 select-none"
      onAnimationEnd={(e) => {
        if (!FINAL_ANIMATIONS.includes(e.animationName)) return;
        ended.current.add(e.animationName);
        if (ended.current.size < FINAL_ANIMATIONS.length) return;
        try {
          sessionStorage.setItem(HERO_INTRO_KEY, "1");
        } catch {}
        markIntroDone();
      }}
    >
      <Pass side="front" />

      <div className={cn("hero-deer", className)}>
        <div className="hero-deer-float relative size-full">
          <span className="hero-deer-ambient" />
          <span className="hero-deer-glow" />
          <Image
            src={DEER_SRC}
            alt=""
            width={300}
            height={300}
            loading="eager"
            fetchPriority="high"
            className="hero-deer-mark relative size-full opacity-[0.12]"
          />
        </div>
      </div>

      <Pass side="back" />
    </div>
  );
}

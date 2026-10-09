import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({
  children,
  speed = 0.2,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);
  return (
    <motion.div ref={ref} style={reduce ? {} : { y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Organic blob divider that morphs its shape as it scrolls into view. */
export function MorphDivider({
  flip = false,
  color = "fill-[#EFE8DC]/50",
}: {
  flip?: boolean;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const d = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M0,40 C80,10 160,70 240,40 C320,10 400,60 400,40 L400,80 L0,80 Z",
      "M0,50 C90,70 170,10 250,45 C330,75 380,20 400,35 L400,80 L0,80 Z",
    ],
  );
  return (
    <div ref={ref} className={`h-10 w-full ${color} ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="h-full w-full">
        <motion.path d={d} />
      </svg>
    </div>
  );
}

export function JungleCanopyMorph() {
  return (
    <svg
      viewBox="0 0 400 48"
      preserveAspectRatio="none"
      className="block h-12 w-full fill-[#1E3F2B]"
      aria-hidden="true"
    >
      <path d="M0 48V24Q25 0 50 21T100 20T150 15T200 25T250 14T300 20T350 15T400 24V48Z" />
    </svg>
  );
}

export function LeafDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-olive" aria-hidden>
      <span className="h-px w-12 bg-current opacity-50" />
      <svg width="28" height="16" viewBox="0 0 28 16" fill="currentColor">
        <path d="M14 8 C8 0 2 2 0 8 C2 14 8 16 14 8 Z M14 8 C20 0 26 2 28 8 C26 14 20 16 14 8 Z" />
      </svg>
      <span className="h-px w-12 bg-current opacity-50" />
    </div>
  );
}

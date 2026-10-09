import { motion, useReducedMotion } from "framer-motion";
import { Compass } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import foliage from "@/assets/storybook/foliage.webp";
import lion from "@/assets/storybook/lion.webp";
import { invitation } from "@/config/invitation";

export function InvitationIntro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const started = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function open(skip = false) {
    if (started.current) return;
    started.current = true;
    setOpening(true);
    if (skip) onOpen();
    // Reduced motion keeps a brief opacity-only opening instead of skipping it.
    else timer.current = setTimeout(onOpen, reduce ? 650 : 2600);
  }

  return (
    <motion.section
      className="safari-intro"
      aria-label="Welcome to the safari invitation"
      data-opening={opening}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="intro-landscape" aria-hidden="true" />
      <motion.div
        className="intro-copy"
        animate={{ opacity: opening ? 0 : 1, y: opening && !reduce ? -15 : 0 }}
        transition={{ duration: reduce ? 0.3 : 0.45, delay: opening ? (reduce ? 0.35 : 2.15) : 0 }}
      >
        <Compass className="intro-compass" size={38} strokeWidth={1} aria-hidden="true" />
        <p className="safari-eyebrow">A very special adventure awaits</p>
        <h1>
          A little wild.
          <br />
          <em>A lot of wonder.</em>
        </h1>
        <p className="intro-dedication">Celebrating {invitation.childName}’s first birthday</p>
        <motion.button
          type="button"
          className="intro-envelope"
          aria-label="Open the invitation"
          onClick={() => open()}
          disabled={opening}
          whileHover={!opening && !reduce ? { y: -4 } : {}}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          <span className="envelope-back" aria-hidden="true" />
          <motion.span
            className="envelope-letter"
            aria-hidden="true"
            animate={{ y: opening && !reduce ? "-38%" : 0 }}
            transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : 1 }}
          >
            <span>You’re invited</span>
            <small>{invitation.dateLabel}</small>
          </motion.span>
          <span className="envelope-pocket" aria-hidden="true" />
          <span className="envelope-front" aria-hidden="true" />
          <motion.span
            className="envelope-flap"
            aria-hidden="true"
            animate={{ rotateX: opening && !reduce ? 180 : 0, opacity: opening && reduce ? 0 : 1 }}
            transition={{ duration: reduce ? 0.2 : 0.9, delay: reduce ? 0.15 : 0.3 }}
          />
          <span className="envelope-seal-position" aria-hidden="true">
            <motion.span
              className="envelope-seal seal-wax"
              animate={{
                scale: opening && !reduce ? 0 : 1,
                rotate: opening && !reduce ? -15 : 0,
                opacity: opening ? 0 : 1,
              }}
              transition={{ duration: reduce ? 0.2 : 0.4 }}
            >
              {invitation.childName[0]}
            </motion.span>
          </span>
        </motion.button>
        <p className="intro-envelope-hint">Tap the seal to open</p>
        <button className="intro-skip" onClick={() => open(true)} disabled={opening}>
          Skip to the invitation
        </button>
      </motion.div>
      {["left", "right"].map((side) => (
        <motion.div
          key={side}
          className={`intro-curtain intro-curtain--${side}`}
          aria-hidden="true"
          animate={
            opening && !reduce
              ? { x: side === "left" ? "-105%" : "105%", rotate: side === "left" ? -12 : 12 }
              : { x: 0, rotate: 0 }
          }
          transition={{
            duration: reduce ? 0 : 1.1,
            delay: opening && !reduce ? 1.5 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img src={foliage} alt="" />
          <img src={foliage} alt="" />
        </motion.div>
      ))}
      <img className="intro-lion" src={lion} alt="" aria-hidden="true" />
      <p className="intro-date">
        {invitation.dateLabel} <span>✦</span> {invitation.venue}
      </p>
    </motion.section>
  );
}

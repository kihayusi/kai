import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import elephant from "@/assets/storybook/elephant.webp";
import foliage from "@/assets/storybook/foliage.webp";
import lion from "@/assets/storybook/lion.webp";

export function Foliage({ className = "" }: { className?: string }) {
  return (
    <img
      src={foliage}
      className={`safari-foliage ${className}`}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
}

export function AnimalFriend({
  animal,
  motionEnabled,
}: {
  animal: "lion" | "elephant";
  motionEnabled: boolean;
}) {
  const [greeted, setGreeted] = useState(false);
  const reduce = useReducedMotion();
  const canMove = motionEnabled && !reduce;
  return (
    <motion.button
      type="button"
      className={`animal-friend animal-friend--${animal}`}
      aria-label={`Say hello to the ${animal}`}
      aria-pressed={greeted}
      onClick={() => setGreeted(!greeted)}
      animate={greeted && canMove ? { y: [0, -14, 0], rotate: [0, -4, 4, 0] } : { y: 0, rotate: 0 }}
      transition={{ duration: canMove ? 0.6 : 0 }}
      whileHover={canMove ? { scale: 1.04 } : {}}
      whileTap={canMove ? { scale: 0.97 } : {}}
    >
      <span className="animal-greeting" data-visible={greeted} role="status">
        {greeted
          ? animal === "lion"
            ? "A little roar, a lot of love!"
            : "So happy you’re coming!"
          : ""}
      </span>
      <img src={animal === "lion" ? lion : elephant} alt="" draggable={false} />
    </motion.button>
  );
}

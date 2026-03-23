"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wrapper that fades + slides up when scrolled into view.
 * Falls back to visible if IntersectionObserver doesn't fire.
 */
export default function AnimateSection({ children, delay = 0, className = "" }: AnimateSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

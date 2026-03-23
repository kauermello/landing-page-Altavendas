"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("visible");

    // Use IntersectionObserver with generous rootMargin
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "200px 0px 200px 0px" }
      );
      observer.observe(el);

      // Fallback: make visible after 800ms regardless
      const fallback = setTimeout(show, 800);

      return () => {
        observer.disconnect();
        clearTimeout(fallback);
      };
    } else {
      // No IntersectionObserver support — show immediately
      show();
    }
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

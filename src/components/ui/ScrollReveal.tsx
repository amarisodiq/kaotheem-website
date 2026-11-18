
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenPosition = {
    left: "-translate-x-16",
    right: "translate-x-16",
    up: "translate-y-10",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-800 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenPosition} opacity-0`
      }`}
    >
      {children}
    </div>
  );
}

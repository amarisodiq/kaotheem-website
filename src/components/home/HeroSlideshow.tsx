
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/offshore-platform.jpeg",
    alt: "Offshore industrial platform",
    title: "Inspection. Integrity. Reliability.",
    subtitle: "Supporting critical industrial operations.",
  },
  {
    src: "/images/ndt-field-inspection.jpeg",
    alt: "Non-destructive testing field inspection",
    title: "Precision in Every Inspection.",
    subtitle: "Reliable non-destructive testing solutions.",
  },
  {
    src: "/images/pipeline-field-testing.jpeg",
    alt: "Industrial pipeline field testing",
    title: "Protecting Critical Assets.",
    subtitle: "Supporting safety and asset integrity.",
  },
  {
    src: "/images/rope-access-inspection.jpeg",
    alt: "Industrial rope access inspection",
    title: "Expertise Without Limits.",
    subtitle: "Specialized access and inspection services.",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-4 bg-blue-500/10 blur-3xl" />

      <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/20 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            Engineering Excellence
          </p>

          <h2 className="mt-3 max-w-sm text-3xl font-bold text-white">
            {slides[active].title}
          </h2>

          <p className="mt-3 text-sm text-slate-300">
            {slides[active].subtitle}
          </p>
        </div>

        <div className="absolute right-5 top-5 z-10 border border-white/20 bg-[#071321]/70 px-4 py-3 backdrop-blur-sm">
          <p className="text-xs tracking-wider text-blue-300">KAOTHEEM</p>
          <p className="mt-1 text-xs text-white">Energy Services</p>
        </div>

        <div className="absolute bottom-5 right-6 z-10 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={active === index}
              className={`h-1.5 rounded-full transition-all ${
                active === index
                  ? "w-8 bg-blue-400"
                  : "w-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

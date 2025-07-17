"use client";

import { useEffect, useState, useRef } from "react";

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Sample logo data
  const logos = [
    { name: "noona", id: 1 },
    { name: "Meo", id: 2 },
    { name: "passionroot", id: 3 },
    { name: "Beacons", id: 4 },
    { name: "trovatrip", id: 5 },
    { name: "TrustLayer", id: 6 },
    { name: "Zipline", id: 7 },
  ];

  // Calculate container width on mount and resize
  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  // Smooth continuous scrolling animation
  useEffect(() => {
    const speed = 0.5; // pixels per frame
    const logoRowWidth = logos.length * 160; // estimate of total width

    let animationFrameId: number;
    let position = scrollPosition;

    const animate = () => {
      position = (position + speed) % logoRowWidth;
      setScrollPosition(position);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [logos.length]);

  return (
    <section className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo carousel */}
        <div className="relative overflow-hidden py-8" ref={containerRef}>
          <div
            className="flex space-x-16 items-center whitespace-nowrap"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 h-16 w-40 flex items-center justify-center"
              >
                <LogoPlaceholder name={logo.name} />
              </div>
            ))}

            {/* Duplicate logos for continuous scrolling */}
            {logos.map((logo) => (
              <div
                key={`dup-${logo.id}`}
                className="flex-shrink-0 h-16 w-40 flex items-center justify-center"
              >
                <LogoPlaceholder name={logo.name} />
              </div>
            ))}

            {/* Add a third set to ensure continuous flow */}
            {logos.map((logo) => (
              <div
                key={`dup2-${logo.id}`}
                className="flex-shrink-0 h-16 w-40 flex items-center justify-center"
              >
                <LogoPlaceholder name={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Logo placeholder component with simplified SVG representations
function LogoPlaceholder({ name }: { name: string }) {
  switch (name.toLowerCase()) {
    case "noona":
      return (
        <div className="flex items-center justify-center">
          <div className="h-10 w-24 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">noona</span>
          </div>
        </div>
      );

    case "meo":
      return (
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">Meo</span>
          </div>
        </div>
      );

    case "passionroot":
      return (
        <div className="flex items-center justify-center">
          <div className="h-8 w-28 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white text-sm font-medium">passionroot</span>
          </div>
        </div>
      );

    case "beacons":
      return (
        <div className="flex items-center justify-center">
          <div className="h-9 w-24 bg-gray-800 rounded flex items-center justify-center px-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 mr-1 text-white"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="8" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" strokeWidth="2" />
            </svg>
            <span className="text-white font-medium text-sm">Beacons</span>
          </div>
        </div>
      );

    case "trovatrip":
      return (
        <div className="flex items-center justify-center">
          <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center px-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 mr-1 text-white"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 2L2 12 12 22 22 12 12 2z" strokeWidth="2" />
            </svg>
            <span className="text-white text-sm">trovatrip</span>
          </div>
        </div>
      );

    case "trustlayer":
      return (
        <div className="flex items-center justify-center">
          <div className="h-9 w-26 bg-gray-800 rounded flex items-center justify-center px-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 mr-1 text-white"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-white font-medium text-sm">TrustLayer</span>
          </div>
        </div>
      );

    case "zipline":
      return (
        <div className="flex items-center justify-center">
          <div className="h-9 w-24 bg-gray-800 rounded flex items-center justify-center px-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 mr-1 text-white"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2 12h20M7 5l-5 7 5 7M17 5l5 7-5 7" strokeWidth="2" />
            </svg>
            <span className="text-white font-bold text-sm">Zipline</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center">
          <div className="h-9 w-20 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white text-sm">{name}</span>
          </div>
        </div>
      );
  }
}

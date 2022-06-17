import React, { useEffect, useRef, useState } from "react";

function MyCarousel({ children, buttonLeft, buttonRight, gapInpx }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrayRef = useRef([]);
  const translation = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );

    const containerRef = arrayRef.current[children.length - 1];

    if (containerRef) observer.observe(containerRef);

    return () => {
      if (containerRef) observer.unobserve(containerRef);
    };
  }, [currentIndex, children.length]);

  const scroll = (direction) => {
    if (direction === "right") {
      translation.current =
        translation.current +
        arrayRef.current[currentIndex].offsetWidth +
        gapInpx;
      setCurrentIndex((prev) => prev + 1);
    } else {
      translation.current =
        translation.current -
        arrayRef.current[currentIndex - 1].offsetWidth -
        gapInpx;
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="min-w-fit"
        disabled={currentIndex <= 0}
        onClick={() => scroll("left")}
      >
        {buttonLeft}
      </button>
      <div className="flex overflow-hidden" style={{ gap: gapInpx }}>
        {children.map((child, i) => (
          <div
            key={i}
            className=" min-w-fit transition-transform duration-500"
            ref={(el) => (arrayRef.current[i] = el)}
            style={{ transform: `translateX(-${translation.current}px)` }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className="min-w-fit"
        disabled={isVisible}
        onClick={() => scroll("right")}
      >
        {buttonRight}
      </button>
    </div>
  );
}

export default MyCarousel;

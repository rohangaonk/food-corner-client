import React, { useState, useEffect } from "react";

const Carousel = (props) => {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else setCurrentIndex(0);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  console.log(currentIndex);
  console.log(children);
  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full relative">
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <div className="overflow-hidden w-full h-full">
          <div
            className="flex transition-all"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {children}
          </div>
        </div>
        <button onClick={next} className="right-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

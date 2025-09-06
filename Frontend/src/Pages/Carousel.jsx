import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = () => {
  const images = [
    "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/14ae6b3d-298d-445c-b562-6717b31fee04.png?updatedAt=1755716733798",
    "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/54260a75-a278-4b04-874a-425fce4d1ca7.png?updatedAt=1755716733867",
    "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/30a1705d-c34c-4376-9533-0737f2776803.png?updatedAt=1755716733877",
    "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/af3baf3f-f5a5-4f89-8b4d-e2c25ad5a88b.png?updatedAt=1755716733903",
    "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/c2868b7d-1900-45d6-bf1b-1cd0d9d2cd1d.png?updatedAt=1755716733912",
  ];

  const [current, setCurrent] = useState(0);

  const goToSlide = (direction) => {
    if (direction === "left") {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide("right"); // move right-to-left
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [current]); // re-run when current changes

  return (
    <div className="relative w-full mx-auto overflow-hidden group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-full h-150 flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 text-black rounded-full p-4 text-4xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => goToSlide("left")}
        aria-label="Previous Slide"
      >
        <FaArrowAltCircleLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 text-black rounded-full p-4 text-4xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => goToSlide("right")}
        aria-label="Next Slide"
      >
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default Carousel;

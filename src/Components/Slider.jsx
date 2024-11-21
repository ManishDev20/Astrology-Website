import { MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = ["./img/cor1.png", "./img/cor2.png"];

  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalImages = images.length;

  // Create an extended array for seamless looping
  const extendedImages = [
    images[totalImages - 1], // Clone last image to the start
    ...images,
    images[0], // Clone first image to the end
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Handle infinite loop effect
  useEffect(() => {
    let timeout;

    if (currentIndex === 0) {
      // Transitioning from the cloned first slide
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalImages); // Jump to the real last slide
      }, 500); // Matches CSS transition duration
    } else if (currentIndex === totalImages + 1) {
      // Transitioning from the cloned last slide
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Jump to the real first slide
      }, 500);
    } else {
      setIsTransitioning(false);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, totalImages]);

  // Automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto overflow-hidden ">
      {/* Slider */}
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isTransitioning ? "" : "duration-0"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white hover:text-yellow  p-2 rounded-full "
      >
        <MdArrowForwardIos className="text-lg sm:text-2xl rotate-180" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white hover:text-yellow  p-2 rounded-full "
      >
        <MdArrowForwardIos className="text-lg sm:text-2xl " />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index + 1 === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

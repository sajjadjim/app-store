import React, { useState, useEffect } from 'react';

const images = [
  "https://play-lh.googleusercontent.com/O7sq9D_ejKby_pkZMdlKDkx7IJDF1JPIh8oupRI7VbkbRBZcNuVSUQtpYAc6sCw9Os0IExUumsw=w7680-h4320-rw",
  "https://play-lh.googleusercontent.com/OwfAQsEbP7_7ySpg_4zw37oNl3o6i2t5OBlbg4cfC6kp3wLQ7l4L7w0CldLWLJn6JuvXuuAMx_wf=w2592-h4320-rw",
  "https://play-lh.googleusercontent.com/iuQuYu2JS067QU5BRZjpVjQ_U3DFYA5ajA6FuOWzUU2B7wxWUH8ZwpnyNwSyjp0HMF4=w1702-h4320-rw",
];

function CarouselAppPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel w-full h-[250px]">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img src={img} className="w-full object-cover" alt={`slide-${index}`} />
        </div>
      ))}
    </div>
  );
}

export default CarouselAppPage;

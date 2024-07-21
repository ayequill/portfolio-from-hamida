import React, { useState, useEffect } from "react";
import me from "../assets/thumbnails/hamida.jpg";
import mee from "../assets/thumbnails/hamida2.jpg";
import meee from "../assets/thumbnails/hamida3.jpg";
import meeee from "../assets/thumbnails/hamida5.jpg";

export default function About() {
  const images = [me, mee, meee, meeee];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about"
      className="text-portfolioTextDark w-screen pt-16 pb-24 xl:py-20 px-4"
    >
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold">About Me 😉</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <div className="border border-gray-400 sticker-shadow rounded-3xl bg-white w-full h-auto max-h-72 overflow-hidden flex justify-center items-center -rotate-3">
            <img
              src={images[currentImage]}
              className="object-contain"
              alt="About me"
            />
          </div>
          <div className="max-w-sm text-left w-full mb-4">
            <p className="inline-paragraph">
              Whoa, you got this far?! Your interest means a lot to me
            </p>
            <p>Hamida Mahama is my name. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

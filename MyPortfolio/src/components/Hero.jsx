/*Hero Section*/
import React from "react";
import "../index.css";
import stickerOne from "../assets/stickers/sticker-1.webp";
import stickerTwo from "../assets/stickers/sticker-2.webp";

export default function HeroSection() {
  return (
    <section className="text-portfolioTextDark w-screen py-32">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-3xl xl:text-[40px] font-bold">
              I Create Seamless
            </p>
            <span className="bg-gray-300 border border-gray-400 rounded-lg w-16 h-16 sticker-shadow">
              <img src={stickerOne} />
            </span>
            <p className="text-3xl xl:text-[40px] font-bold">
              User Experiences{" "}
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-3xl xl:text-[40px] font-bold">Through</p>
            <p
              className="text-3xl xl:text-[40px] font-bold leading-loose"
              style={{
                background: "var(--text-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline",
              }}
            >
              Design & Code
            </p>
            <span className="bg-gray-300 border border-gray-400 rounded-lg w-16 h-16 sticker-shadow">
              <img src={stickerTwo} />
            </span>
          </div>
        </div>
        <p className="text-portfolioTextLight text-left">
          That&apos;s right! I don&apos;t only design..I code as well! I have
          been doing this for 2 years and i make sure to create fresh and
          polished solutions. I am constantly learning and immersing myself into
          spaces that would help me grow as an individual, hence, you will
          mostly find me:
        </p>
      </div>
    </section>
  );
}

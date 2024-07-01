/*Nav Bar component*/
import React, { useState } from "react";
import "../index.css";
import waveGif from "../assets/handwave.gif";

const buttonGradient = {
  background: "var(--gradient)",
};


export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="w-screen backdrop-blur-sm  sticky z-20 top-0 px-4 bg-portfolioWhite backdrop-filter bg-opacity-50 pt-8">
      <nav className="bg-gray-900 backdrop-filter backdrop-blur-sm nav-shadow bg-opacity-50 border-b border-gray-600 mx-0 md:mx-auto px-4 py-2 max-w-3xl rounded-full">
        <div className="flex items-center justify-between">
          <img src="/favicon.svg" />
          <div className="flex gap-2 lg:gap-8 items-center text-sm">
            <ul className="text-portfolioWhite flex gap-2 lg:gap-4">
              <li className="border-b-2 border-portfolioWhite py-1 ">
                <a href="#" aria-current className="font-semibold">Home</a>
              </li>
              <li className="py-1 xl:px-3 hover:bg-gray-400 hover:rounded-full">
                <a className="text-gray-300 " href="#">Work</a>
              </li>
              <li className="py-1 xl:px-3 hover:bg-gray-400 hover:rounded-full">
                <a className="text-gray-300" href="#">About</a>
              </li>
            </ul>
          <button
            className="button-shadow bg-portfolioSecondary text-sm font-semibold leading-6 border border-[#00428C] text-white py-2 px-4 rounded-full"
            // style={buttonGradient}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            Say hi{" "}
            {isHovered ? (
              <img
              style={{ display: "inline", verticalAlign: "middle" }}
                width="14px"
                height="14px"
                src={waveGif}
                alt="waving hand gif"
                />
              ) : (
                "👋"
              )}
          </button>
              </div>
        </div>
      </nav>
    </header>
  );
}

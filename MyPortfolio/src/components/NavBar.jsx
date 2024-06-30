/*Nav Bar component*/
import React, { useState } from "react";
import logo from "/logo.svg";
import "../index.css";
import waveGif from "../assets/handwave.gif";

const buttonGradient = {
  background: "var(--gradient)",
};

// const navWidth = {
//   maxWidth: "90vw",
//   margin: "2vw auto",
//   borderRadius: "50px",
//   borderBottom: "1px solid #E7EAEB",
//   background: "rgba(208, 208, 208, 0.70)",
//   backdropFilter: "blur(15px)",
// };

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="w-full fixed">
      <nav className="bg-gray-900 backdrop-filter backdrop-blur-sm nav-shadow bg-opacity-50 border-b border-gray-600 mx-auto px-4 py-2 max-w-xl rounded-full">
        <div className="flex items-center justify-between">
          <img src="/favicon.svg" />
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
      </nav>
    </header>
  );
}

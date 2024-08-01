import React, { useState } from "react";
import "../index.css";
import waveGif from "../assets/handwave.gif";
import Modal from "./CalendarModal";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-screen backdrop-blur-sm xl:sticky z-20 bottom-0 fixed xl:top-0 px-4 bg-portfolioWhite backdrop-filter bg-opacity-50 pb-8 xl:pb-0 xl:pt-8">
        <nav className="bg-gray-900 backdrop-filter backdrop-blur-sm nav-shadow bg-opacity-50 border-b border-gray-600 mx-0 md:mx-auto px-2 py-2 max-w-3xl rounded-full">
          <div className="flex items-center justify-between">
            <img src="/favicon.svg" alt="favicon" />
            <ul className="text-portfolioWhite flex gap-4">
              <li className="border-b-2 border-portfolioWhite py-1">
                <a href="/" aria-current className="font-semibold">
                  Home
                </a>
              </li>
              <li className="py-1 xl:px-3 hover:bg-gray-400 hover:rounded-full">
                <a className="text-gray-300" href="#work">
                  Work
                </a>
              </li>
              <li className="py-1 xl:px-3 hover:bg-gray-400 hover:rounded-full">
                <a className="text-gray-300" href="#about">
                  About
                </a>
              </li>
            </ul>
            <div className="flex gap-2 lg:gap-8 items-center text-sm">
              <button
                className="button-shadow bg-portfolioSecondary text-sm font-semibold leading-6 border border-[#00428C] text-white py-2 px-4 rounded-full"
                onClick={handleButtonClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="say-hi-text">Say hi </span>
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3YpGo952D33Z2kyqkNX5WF5hiJRRsUE5f5W_SrXFzSulxri4Ea4KXa9kh7YziL5yXZv3ig6ZZc?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </Modal>
    </>
  );
}

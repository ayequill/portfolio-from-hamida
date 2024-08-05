import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import waveGif from "../assets/handwave.gif";
import Modal from "./CalendarModal";
import { CallCalling,Messages2 } from "iconsax-react";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const[isModalOpen, setIsModalOpen] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setPopupOpen((prev) => !prev);
  };
  const handleClosePopup = (event) => {
    setPopupOpen(false)
  }

  const handleModal = () => {
    setIsModalOpen(true)
  }

  
useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-screen backdrop-blur-sm xl:sticky z-20 bottom-0 fixed xl:top-0 px-4 bg-portfolioWhite backdrop-filter bg-opacity-50 pb-8 xl:pb-0 xl:pt-8">
        <nav className="bg-gray-900 backdrop-filter backdrop-blur-sm nav-shadow bg-opacity-50 border-b border-gray-600 mx-0 md:mx-auto px-2 py-2 max-w-3xl rounded-full">
          <div className="flex items-center justify-between">
            <a href="/">
              <img src="/favicon.svg" alt="favicon" />
              </a>
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
              ref={buttonRef}
                className="relative button-shadow bg-portfolioSecondary text-sm font-semibold leading-6 border border-[#00428C] text-white py-2 px-4 rounded-full"
                // onClick={handleButtonClick}
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
            {isPopupOpen &&(
              <div ref={popupRef} className="absolute z-30 popup xl:top-14 right-0 bg-portfolioWhite shadow-lg w-full max-w-36 py-3 rounded-md">
              <ul className="text-sm text-left">
                <li className="p-2 hover:bg-blue-100 hover:mx-1 hover:rounded-md cursor-pointer flex gap-2" onClick={handleModal}><CallCalling size="16" color="#2a2a2a"/>Book a call</li>
                <li className="p-2 hover:bg-blue-100 hover:mx-1 hover:rounded-md "><a className="flex gap-2 " href="mailto:mahamahamida@gmail.com">
                <Messages2 size="16" color="#2a2a2a"/>
                  Send email</a>
                  </li>
                  <hr className="mt-4" />
                  <p className="mt-4 p-2 text-[12px] text-portfolioTextLight">or connect with me:</p>
                <li className="p-2 flex justify-between ">
                <a  target="_blank" rel="noopener noreferrer" href="https://github.com/AngryDuchess/">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#656560" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>          
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hamidamahama/">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#656560" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://x.com/hamida_mahama">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#656560" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>          
                </a>
                </li>
              </ul>
            </div>
              )
            }
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

import React from "react";
import { CloseCircle } from "iconsax-react";
import test from "../assets/thumbnails/test.png";

export default function ProductModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite max-w-5xl h-[500px] w-full border border-gray-700 rounded-2xl  overflow-hidden">
        {/* <div className="flex flex-row-reverse justify-between items-center p">
          <span className="sr-only">Modal title</span>
          <CloseCircle
            onClick={onClose}
            className="cursor-pointer"
            size="32"
            color="#656560"
          />
        </div> */}
        <div className="absolute grid grid-cols-1 xl:grid-cols-2">
            <img src={test} className="w-full h-auto" />
            <div className="pb-4 pt-12">
            <CloseCircle
            onClick={onClose}
            className="cursor-pointer absolute top-5 right-5"
            size="32"
            color="#656560"
          />
            <p>PROJECT CURIOSITY</p>
            </div>
        </div>
      </div>
    </div>
  );
}

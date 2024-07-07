import React from "react";
import { CloseCircle } from "iconsax-react";
import curiosity from "../assets/thumbnails/curiosityThumb.gif";

export default function ProductModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite max-w-5xl h-[500px] w-full rounded-3xl  overflow-hidden">
        {/* <div className="flex flex-row-reverse justify-between items-center p">
          <span className="sr-only">Modal title</span>
          <CloseCircle
            onClick={onClose}
            className="cursor-pointer"
            size="32"
            color="#656560"
          />
        </div> */}
        <div className="absolute grid grid-cols-1 xl:grid-cols-2 h-full max-h-full">
          <div className="h-full ">
            <img src={curiosity} className=" w-full h-full object-cover" />
          </div>
          <div className="pb-4 pt-20 px-8 text-left text-portfolioTextLight">
            <CloseCircle
              onClick={onClose}
              className="cursor-pointer absolute top-5 right-5 icon-hover"
              size="32"
              color="#656560"
            />
            <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">

            <p className="font-bold text-left text-portfolioTextDark">
              App for a Remote water quality monitoring systems
            </p>
            <p>
              This is different from my other projects as it was an app for an
              IoT system we built for a remote water quality assessment for fish
              farmers.
            </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">Internet of Things</p>
              <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">product design</p>
              <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">fish</p>
              <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">fish farmers</p>
              <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">water</p>
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { CloseCircle } from "iconsax-react";
import curiosity from "../assets/thumbnails/curiosityThumb.gif";
import PropTypes from "prop-types";


export default function ProductModal({ isOpen, onClose, thumbnailGif, projectTitle, projectDescription }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite max-w-5xl h-3/4 w-full rounded-3xl  overflow-hidden">
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
            <img 
            src={thumbnailGif}
            // src={`http://localhost:1337${project.thumbnailGif.url}`}
            className=" w-full h-full object-cover" />
          </div>
          <div className="pb-4 pt-8 lg:pt-20 px-8 text-left text-portfolioTextLight">
            <CloseCircle
              onClick={onClose}
              className="cursor-pointer absolute top-5 right-5 icon-hover"
              size="32"
              color="#656560"
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-left text-portfolioTextDark">
                  {/* App for a Remote water quality monitoring systems */}
                  {projectTitle}
                </p>
                <p>
                  {projectDescription}
                  {/* This project stands out from my previous work because it
                  involved developing an app for an IoT system designed to
                  remotely assess water quality for fish farmers. */}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">
                  Internet of Things
                </p>
                <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">
                  product design
                </p>
                <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">
                  fish
                </p>
                <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">
                  fish farmers
                </p>
                <p className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">
                  water
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  thumbnailGif: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
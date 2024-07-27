import React, { useState } from "react";
import curiosity from "../assets/thumbnails/test.png";
import ProductModal from "./productModal";
import PropTypes from "prop-types";

// export default function Card({ thumbnail, altText, id }) {
  export default function Card({ project }) {
    
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const baseUrl = "https://hamida-mahama.onrender.com";
  // const baseUrl = "http://localhost:1337";

    const { title, description, id, tags,thumbnailUrl,thumbnailGifUrl } = project;
    // console.log(project.description[0]?.children[0].text);
    console.log(project.title);
  return (
    <>
      <div
        key={id}
        className="bg-gray-600 max-w-sm w-full max-h-64 h-auto rounded-3xl overflow-hidden mb-4"
        onClick={openModal}
      >
        {thumbnailUrl ? (
          <img
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            src={project.thumbnailUrl}
            // alt={baseUrl + project.thumbnail.altText || 'Thumbnail'}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No Thumbnail Available
          </div>
        )}
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} projectTitle={project.title} projectDescription={project.description[0]?.children[0].text} projectTags={project.tags?.projectTags} thumbnailGifUrl={project.thumbnailGifUrl}  />
    </>
  );
}

Card.propTypes = {
  project: PropTypes.object.isRequired,
};
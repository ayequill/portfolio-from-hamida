import React, { useState } from "react";
import curiosity from "../assets/thumbnails/test.png";
import ProductModal from "./productModal";
import PropTypes from "prop-types";

// export default function Card({ thumbnail, altText, id }) {
  export default function Card({ project }) {

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const { title, thumbnail, thumbnailGif, description, id } = project;

  return (
    <>
      <div
        key={id}
        className="bg-gray-600 max-w-sm w-full max-h-64 h-auto rounded-3xl overflow-hidden mb-4"
        onClick={openModal}
      >
        {thumbnail ? (
          <img
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            src={`http://localhost:1337${project.thumbnail.url}`}
            alt={`http://localhost:1337${project.thumbnail.altText}` || 'Thumbnail'}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No Thumbnail Available
          </div>
        )}
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} projectTitle={project.title} projectDescription={project.description} thumbnailGif={`http://localhost:1337${project.thumbnailGif.url}`} />
    </>
  );
}

// Card.propTypes = {
//   thumbnail: PropTypes.string,
//   altText: PropTypes.string,
//   id: PropTypes.number,
// };

Card.propTypes = {
  project: PropTypes.object.isRequired,
};
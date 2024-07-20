import React, { useState } from "react";
import curiosity from "../assets/thumbnails/test.png";
import ProductModal from "./productModal";
import PropTypes from "prop-types";

// export default function Card({ thumbnail, altText, id }) {
  export default function Card({ project }) {
    
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    // const baseUrl = "https://hamida-mahama.onrender.com";
  const baseUrl = "http://localhost:1337";

    const { title, thumbnail, projectVideo, description, id, tags } = project;
    // console.log(project.description[0]?.children[0].text);
    console.log(project.tags?.projectTags);
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
            src={baseUrl + project.thumbnail.url}
            alt={baseUrl + project.thumbnail.altText || 'Thumbnail'}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No Thumbnail Available
          </div>
        )}
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} projectTitle={project.title} projectDescription={project.description[0]?.children[0].text} projectVideo={baseUrl + project.projectVideo.url} projectTags={project.tags?.projectTags}  />
    </>
  );
}

Card.propTypes = {
  project: PropTypes.object.isRequired,
};
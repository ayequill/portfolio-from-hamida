import React, { useEffect, useState } from "react";
import curiosity from "../assets/thumbnails/test.png";
import ProductModal from "./productModal";
import {fetchProjects} from "../lib/api";

export default function Card() {
  const [projects, setProject] = useState([]);
  
  useEffect(() => {
    const getProjects = async () => {
        const fetchedProjects = await fetchProjects();
        if (fetchedProjects) {
          setProject(fetchedProjects.data);
        }
    }
    getProjects();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-600 max-w-sm w-full max-h-64 h-auto rounded-3xl overflow-hidden mb-4"
            onClick={openModal}
          >
            <img
              className="w-full h-full object-contain transition-transform duration-200 hover:scale-105"
              src={`http://localhost:1337${project.attributes.thumbnail.data.attributes.url}`}
              alt={project.attributes.thumbnail.data.attributes.alternativeText || 'Thumbnail'}
            />
            {/* <p className="text-white text-center mt-2">{project.attributes.title}</p> */}
          </div>
        ))}
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

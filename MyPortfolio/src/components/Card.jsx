import React, { useEffect, useState } from "react";
import curiosity from "../assets/thumbnails/test.png";
import ProductModal from "./productModal";
import {getStrapiData, fetchWork} from "../lib/api";

export default function Card() {
  const [data, setData] = useState(null);
  const [work, setWork] = useState([]);
  
  useEffect(() => {
    const getWorks = async () => {
        const fetchedWorks = await fetchWork();
        setData(fetchedWorks.data);
        console.log(fetchedWorks.data);
    }
    getWorks
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      const fetchedProjects = await getStrapiData();
      setData(fetchedProjects.data);
    //   console.log(fetchedProjects.data.attributes);
    };
    getProjects();
  }, []);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div>
        <div
          className="bg-gray-600 max-w-sm w-full h-auto rounded-3xl overflow-hidden"
          onClick={openModal}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            src={curiosity}
          />
        </div>
        {data && (
          <p>{data.attributes.title}</p>
        )}
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

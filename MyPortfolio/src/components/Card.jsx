import React, { useState } from "react";
import curiosity from "../assets/thumbnails/test.png"
import ProductModal from "./productModal";

export default function Card() {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return(
        <>
        <div className="bg-gray-600 max-w-sm w-full h-auto rounded-2xl overflow-hidden"
        onClick={openModal}>
            <img className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" src={curiosity} />
        </div>
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
            </>

    )
}
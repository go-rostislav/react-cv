// import React, { useState } from "react";
// import Modal from "./Gallery";
// import "./Gallery.css";
//
// const Gallery = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [currentImage, setCurrentImage] = useState(null);
//
//     const images = [
//
//     ];
//
//     const openModal = (imageSrc) => {
//         setCurrentImage(imageSrc);
//         setModalOpen(true);
//     };
//
//     const closeModal = () => {
//         setModalOpen(false);
//         setCurrentImage(null);
//     };
//
//     return (
//         <div className="gallery">
//             {images.map((imageSrc, index) => (
//                 <img
//                     key={index}
//                     src={imageSrc}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="gallery-image"
//                     onClick={() => openModal(imageSrc)}
//                 />
//             ))}
//
//             <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
//         </div>
//     );
// };
//
// export default Gallery;

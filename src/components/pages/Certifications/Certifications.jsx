import React, { useState } from "react";
import Modal from "./Modal";
import "./Certifications.css";
import certVersionControl from "./assets/Coursera-Version-Control.jpg"
import certReactBasic from "./assets/Coursera-React-Basic.jpg"
import certProgrammingJs from "./assets/Coursera-Programming-with-JavaScript.jpg"
import certPrinciplesUXUI from "./assets/Coursera-Principles-of-UX-UI-Design.jpg"
import certMainMetaProfessionalCertificate from "./assets/Coursera-Main-Meta-Professional-Sertificate.jpg"
import certIntroduceFEDev from "./assets/Coursera-Introduce-to-Front-End-Development.jpg"
import certHTMLCSSDepth from "./assets/Coursera-HTML-and-CSS-in-depth.jpg"
import certCodingInterview from "./assets/Coursera-Coding-Interview-Preparation.jpg"
import certAdvancedReact from "./assets/Coursera-Advanced-React.jpg"
import certDevCapstone from "./assets/Coursera-Developer-Capstone.jpg"


const Certifications = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const certifications = [
        {
            title: "Meta Front-End Developer Professional Certificate",
            imageSrc: certMainMetaProfessionalCertificate,
            url : "https://coursera.org/share/5e2eb84b13c5310930aa883e2a6ed726",
        },
        {
            title: "Meta Advanced React",
            imageSrc: certAdvancedReact,
            url: "https://coursera.org/share/d3da70e9b96535fbb466da7bc0d126b4",
        },
        {
            title: "Meta React Frontend Developer",
            imageSrc: certReactBasic,
            url: "https://coursera.org/share/cf170eab61b9e5329ab3ae7c09a1a7c0",
        },
        {
            title: "Meta Frontend Developer Capstone",
            imageSrc: certDevCapstone,
            url: "https://coursera.org/share/27e6bc1705604d04ce23149d318d9c5b"
        },
        {
            title: "Meta Programming with JavaScript",
            imageSrc: certProgrammingJs,
            url: "https://coursera.org/share/717ccc972c132e043cb64306699ec29a",
        },
        {
            title: "Meta Coding Interview Preparation",
            imageSrc: certCodingInterview,
            url: "https://coursera.org/share/b9498d87e136fbf5969fb405e41a34ee",
        },
        {
            title: "Meta Version Control",
            imageSrc: certVersionControl,
            url: "https://coursera.org/share/c21a83f169207e748e981d05999af2bf",
        },
        {
            title: "Meta HTML and CSS in depth",
            imageSrc: certHTMLCSSDepth,
            url: "https://coursera.org/share/343bd758c6413efbf8619c281a425166",
        },
        {
            title: "Meta Principles of UX/UI Design",
            imageSrc: certPrinciplesUXUI,
            url: "https://coursera.org/share/c0c3d3a602d218eaa0b5bd0c7c447eb7",
        },
        {
            title: "Meta Introduction to Front-End Development",
            imageSrc: certIntroduceFEDev,
            url: "https://coursera.org/share/5e2eb84b13c5310930aa883e2a6ed726"
        },
    ];

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className={"container mt-30 mb-30"}>
            <h1>Certifications</h1>
            <div className="certifications-gallery grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                        <img
                            src={cert.imageSrc}
                            alt={cert.title}
                            className="certification-thumbnail"
                            onClick={() => openModal(cert.imageSrc)}
                        />
                        <p><a href={cert.url}>{cert.title}</a></p>
                    </div>
                ))}
            </div>

            {/* Modal component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
        </div>
    );
};

export default Certifications;

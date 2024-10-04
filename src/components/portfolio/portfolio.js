import React, { useState } from "react";
import Modal from "react-modal";
import "./portfolio.css";
import { categories } from "./data";

Modal.setAppElement("#root"); 

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setImageModalOpen(true);
  };

  const handleModalClose = () => {
    setImageModalOpen(false);
  };

  const selectedCategoryObj = categories.find(
    (category) => category.label === selectedCategory
  );
  const imagesToShow = selectedCategoryObj ? selectedCategoryObj.images : [];

  return (
    <div className="qw animate-on-scroll-top" id="portfolio">
      <h3 className="port">Our Portfolio</h3>
      <div className="buttn">
        {categories.map((category, index) => (
          <button
            key={index}
            className={
              selectedCategory === category.label ? "active act" : "act"
            }
            onClick={() => handleCategoryClick(category.label)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="portfol">
        {imagesToShow.map((image, index) => (
          <div key={index} className="item animated wow fadeIn">
            <div className="image-container">
              <img
                className="img40 grayscale"
                src={image.link}
                alt={`appdevelopment-${index}`}
                height={400}
                width={400}
              />
              <div className="overlay12 title-overlay">
                <div className="text221">
                  <h2>{image.name}</h2>
                  {image.name1}
                  <div className="icon-container1" onClick={() => handleImageClick(index)}>
                    <a className="icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="0.6em"
                        viewBox="0 0 576 512"
                        fill="#ffffff"
                        
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Image Modal"
        className="image-modal" 
        overlayClassName="image-modal-overlay" 
      >
        <img
          src={imagesToShow[selectedImageIndex]?.link}
          alt={`appdevelopment-${selectedImageIndex}`}
          className="full-page-image"
        />
        <button className="close-button" onClick={handleModalClose}>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" fill="#ffffff"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
      </Modal>
    </div>
  );
}

export default Portfolio;
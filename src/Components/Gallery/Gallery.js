import React from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
const images = [
  "/images/nankana.jpeg",
  "/images/church.jpeg",
  "/images/shri.jpeg",
  "/images/sind.jpeg",
   "/images/nankana.jpeg",
  "/images/badshahi.jpeg",
  "/images/green.jpeg",
  "/images/Church_Sacred_Heart.jpg",
  "/images/nuskha.jpeg",
  "/images/white.jpeg",
  "/images/beeauty.jpeg",
  "/images/butt.jpeg",
  "/images/barga.jpeg",
  "/images/night.jpeg",
   "/images/morti.webp",
  
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <motion.img 
            key={index} 
            src={src} 
            alt="spiritual site"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

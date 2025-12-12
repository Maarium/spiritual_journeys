import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
const scrollToTours = () => {
    const toursSection = document.getElementById("tours");
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Discover Spiritual Destinations in Pakistan</h1>
        <p>
          We Arrange Peaceful Journeys to Masjids, Mandirs, Gurdwaras, and Churches — 
          Promoting Unity, Peace, and Cultural Harmony.
        </p>
        <button className="hero-btn" onClick={scrollToTours}>Explore Tours</button>
      </motion.div>
    </section>
  );
};

export default Hero;

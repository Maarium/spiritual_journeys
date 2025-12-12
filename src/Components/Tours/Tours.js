import React from "react";
import "./Tours.css";
import { motion } from "framer-motion";
const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

const tours = [
  { 
    id: 1, 
    title: "Faisal Mosque - Islamabad", 
    date: "25 Feb 2025",
    img: "images/faisal.jpeg"
  },
  { 
    id: 2, 
    title: "Katas Raj Mandir - Chakwal", 
    date: "10 March 2025",
    img: "images/kata.jpg"
  },
  { 
    id: 3, 
    title: "Gurdwara Kartarpur Sahib", 
    date: "15 April 2025",
    img: "/images/karta.jpeg"
  },
  { 
    id: 4, 
    title: "Sacred Heart Cathedral - Lahore", 
    date: "20 April 2025",
    img: "images/morti.webp"
  }
];

const Tours = () => {
  return (
    <section id="tours" className="tours">
      <h2>Upcoming Tours</h2>

      <div className="tour-cards">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            className="tour-card"
            style={{ backgroundImage: `url(${tour.img})` }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="overlay">
              <h3>{tour.title}</h3>
              <p>Date: {tour.date}</p>
              <button className="book-btn" onClick={scrollToBooking}> Book Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tours;

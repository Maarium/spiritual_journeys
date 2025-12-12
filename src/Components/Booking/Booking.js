import React from "react";
import "./Booking.css";
import { motion } from "framer-motion";

const Booking = () => {
  return (
    <section id="booking" className="booking">
      <motion.div 
        className="booking-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Book Your Tour</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Departure City" required />
          <select>
            <option>Select Tour</option>
            <option>Faisal Mosque</option>
            <option>Katas Raj Mandir</option>
            <option>Nankana Sahib</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Booking;

import React from "react";
import "./WhyUs.css";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section id="whyus" className="whyus">
      <h2>Why Choose Us?</h2>

      <div className="why-grid">
        <motion.div className="why-card" whileHover={{ scale: 1.05 }}>
          <h3>Professional Guides</h3>
          <p>Trained and certified tour guides for all religions.</p>
        </motion.div>

        <motion.div className="why-card" whileHover={{ scale: 1.05 }}>
          <h3>Safe & Comfortable</h3>
          <p>Luxury transport and safe travel environment.</p>
        </motion.div>

        <motion.div className="why-card" whileHover={{ scale: 1.05 }}>
          <h3>Cultural Harmony</h3>
          <p>Promoting peace, unity, and interfaith respect.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;

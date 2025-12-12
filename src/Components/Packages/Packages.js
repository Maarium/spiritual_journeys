import React, { useState } from "react";
import "./Packages.css";
import { motion } from "framer-motion";

const packagesData = [
  {
    id: 1,
    title: "From Lahore to KartartPur",
    features: [
      { type: "price", value: "PKR 5000" },
      {
        type: "text",
        value:
          "Experience the sacred place where Baba Guru Nanak Dev Ji, Founder of Sikhism, spent his final years.",
      },
    ],
    description: "PKR 5000",
  },

  {
    id: 2,
    title: "From Narowal to KartartPur",
    features: [
      { type: "price-old", value: "PKR 2000" },
      { type: "price", value: "PKR 1500" },
      {
        type: "text",
        value:
          "Experience the sacred place where Baba Guru Nanak Dev Ji spent his final years.the sacred place where Baba Guru Nanak Dev Ji spent his final years.",
      },
    ],
    description: "PKR 1500 (Discounted from PKR 2000)",
  },

  {
    id: 3,
    title: "From Faisalabad to KartartPur",
    features: [
      { type: "price", value: "PKR 7000" },
      {
        type: "text",
        value:
          "Experience the sacred place where Baba Guru Nanak Dev Ji spent his final years.",
      },
    ],
    description: "PKR 7000",
  },
];

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="packages" className="packages">
      <h2>Our Packages</h2>

      <div className="package-grid">
        {packagesData.map((pkg) => (
          <motion.div
            key={pkg.id}
            className="pkg-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{pkg.title}</h3>

            <ul>
              {pkg.features.map((item, index) => (
                <li
                  key={index}
                  className={
                    item.type === "price" || item.type === "price-old"
                      ? "no-bullet"
                      : ""
                  }
                >
                  {item.type === "price" && (
                    <span className="price new-price">{item.value}</span>
                  )}

                  {item.type === "price-old" && (
                    <span className="price old-price">{item.value}</span>
                  )}

                  {item.type === "text" && item.value}
                </li>
              ))}
            </ul>

            <button onClick={() => setSelectedPackage(pkg)}>View Details</button>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPackage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close"
              onClick={() => setSelectedPackage(null)}
            >
              &times;
            </span>

            <h2>{selectedPackage.title}</h2>

            {/* STATIC FACILITY LIST */}
            <h3>Facilities Included:</h3>
            <ul className="facilities-list">
              <li>Luxury Transport (AC Bus/Coaster)</li>
              <li>Professional Tour Guide</li>
              <li>Entry Tickets</li>
              <li>Meal & Refreshment</li>
              <li>Photography Support</li>
              <li>Monday to Sunday</li>
              <li>Departure : 7:00 am</li>
              
            </ul>

            <p className="modal-price">{selectedPackage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;

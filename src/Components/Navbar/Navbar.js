import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect scroll to change navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "tours", label: "Upcoming Tours" },
    { id: "gallery", label: "Gallery" },
    { id: "booking", label: "Booking" },
    { id: "packages", label: "Packages" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">
        Spiritual<span>Journeys</span>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
          >
            <a href={`#${item.id}`} onClick={() => handleClick(item.id)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
    </motion.nav>
  );
};

export default Navbar;

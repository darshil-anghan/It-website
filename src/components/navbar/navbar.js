import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTodown = () => {
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    });
  };

  // Adding a scroll event listener to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      // Get the elements you want to animate
      const elementsToAnimate = document.querySelectorAll(
        ".animate-on-scroll,.animate-on-scroll1,.animate-on-scroll2"
      );

      elementsToAnimate.forEach((element) => {
        const bounding = element.getBoundingClientRect();

        // Check if element is in viewport
        if (
          bounding.top <= window.innerHeight &&
          bounding.bottom >= 0 &&
          bounding.left <= window.innerWidth &&
          bounding.right >= 0
        ) {
          // Add animation class when element is in viewport
          element.classList.add("animate");
        }
      });
    };
    handleScroll();

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <nav className="responsive_nav ">
        <div className="imgo animate-on-scroll">
          <ScrollLink onClick={scrollToTop} className="qwqw">
            <h3 className="brand">Valora Infotech</h3>
          </ScrollLink>
        </div>
        <div className="navia animate-on-scroll">
          <ScrollLink onClick={scrollToTop} className="Homenav">
            Home
          </ScrollLink>
          <ScrollLink to="about" className="Aboutnav">
            About
          </ScrollLink>
          <ScrollLink to="service" className="servicenav">
            Service
          </ScrollLink>
          <ScrollLink to="portfolio" className="teamnav">
            Portfolio
          </ScrollLink>
          {/* <RouterLink onClick={scrollToTop} to="/privacy-policy" className="Blognav">
            Blog
          </RouterLink> */}
          <ScrollLink onClick={scrollTodown} className="contectusnav">
            Contact Us
          </ScrollLink>
        </div>
        <nav className={`navbar ${expanded ? "expanded" : ""}`}>
          <div className="navbar-brand animate-on-scroll">
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span className="navbar-toggle-icon">&#9776;</span>
            </button>
          </div>
          <ul className={`navbar-nav ${expanded ? "expanded" : ""}`}>
            <li className="nav-item">
              <ScrollLink
                className="qwqw"
                onClick={() => {
                  toggleNavbar();
                  scrollToTop();
                }}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="about" className="qwqw" onClick={toggleNavbar}>
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="service" className="qwqw" onClick={toggleNavbar}>
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="portfolio"
                className="qwqw"
                onClick={toggleNavbar}
              >
                Portfolio
              </ScrollLink>
            </li>
            {/* <li className="nav-item">
              <RouterLink to="/Blog" className="qwqw" onClick={toggleNavbar}>
                Blog
              </RouterLink>
            </li> */}
            <li className="nav-item">
              <ScrollLink
                className="qwqw"
                onClick={() => {
                  toggleNavbar();
                  scrollTodown();
                }}
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;

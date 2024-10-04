import React, { useState, useEffect } from 'react';
import "../../navbar/navbar.css"
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Teamnav() {  // Updated component name to start with an uppercase letter
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      // Get the elements you want to animate
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll,.animate-on-scroll1,.animate-on-scroll2');

      elementsToAnimate.forEach(element => {
        const bounding = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (
          bounding.top <= window.innerHeight &&
          bounding.bottom >= 0 &&
          bounding.left <= window.innerWidth &&
          bounding.right >= 0
        ) {
          // Add animation class when element is in viewport
          element.classList.add('animate');
        }
      });
    };
    handleScroll()

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className='responsive_nav '>
        <div className='imgo animate-on-scroll'>
          <ScrollLink className="qwqw">
            <h3 className="brand">Valora Infotech</h3>
          </ScrollLink>
        </div>
        <div className="navia animate-on-scroll">
        <RouterLink onClick={scrollToTop} to="/" className="Homenav" >
            Home
            </RouterLink>
        </div>
        <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
          <div className="navbar-brand animate-on-scroll">
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span className="navbar-toggle-icon">&#9776;</span>
            </button>
          </div>
          <ul className={`navbar-nav ${expanded ? 'expanded' : ''}`}>
            <li className="nav-item">
              <RouterLink to="/" className='qwqw' onClick={() => { toggleNavbar(); scrollToTop(); }}>Home</RouterLink>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  )
}

export default Teamnav;

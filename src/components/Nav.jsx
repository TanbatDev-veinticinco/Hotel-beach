import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 350); // Change color after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${
        scrolled ? "scrolled" : "animate__animated animate__fadeInDown"
      }`}
    >
      <Link to="/" className="hotel-name">
        HotelBeach
      </Link>
      {/* <a href="#home" className="hotel-name">
        HotelBeach
      </a> */}
      <nav className="nav">
        <Link to="/OurHotel">Our Hotel</Link>
        <Link to="/RoomsPage">Rooms</Link>
        <Link to="/ContactPage">Contact</Link>
      </nav>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className="hotel-name"
            onClick={() => setMenuOpen(false)}
          >
            HotelBeach
          </Link>
          <Link to="/OurHotel" onClick={() => setMenuOpen(false)}>
            Our Hotel
          </Link>
          <Link to="/RoomsPage" onClick={() => setMenuOpen(false)}>
            Rooms
          </Link>
          <Link to="/ContactPage" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Nav;

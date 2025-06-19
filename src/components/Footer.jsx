import "./Footer.css";

function Footer() {
  return (
    <section className="footer-sec">
      <div className="footer-grid">
        {/* Left: Navigation */}
        <div className="footer-nav-col">
          <div className="footer-nav-group">
            <div className="footer-label">Pages</div>
            <ul className="footer-nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Rooms</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-group">
            <div className="footer-label">Pages</div>
            <ul className="footer-nav-list">
              <li>
                <a href="#">Our Hotel</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Restaurant</a>
              </li>
            </ul>
          </div>
          <div className="footer-brand">HotelBeach.</div>
        </div>
        {/* Right: Contact & Social */}
        <div className="footer-info-col">
          <div className="footer-info-group">
            <div className="footer-label">Email</div>
            <div className="footer-info-main">info@hotelbeach.com</div>
          </div>
          <div className="footer-info-group">
            <div className="footer-label">Phone</div>
            <div className="footer-info-main">(603) 555-0123</div>
          </div>
          <div className="footer-info-group">
            <div className="footer-label">Address</div>
            <div className="footer-info-main">
              3891 Ranchview Dr. Richardson,
              <br />
              California 62639
            </div>
            <div className="footer-copy">
              <p>© 2025 TanbatDev. All rights reserved.</p>
            </div>
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social">
              X
            </a>
            <a href="#" className="footer-social">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="footer-social">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="footer-social">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

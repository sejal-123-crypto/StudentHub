function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="logo">
            <div className="logo-icon">S</div>

            <div className="logo-text">
              Student<span>Hub</span>
            </div>
          </div>

          <p>
            Discover the right opportunity at the right time.
          </p>

        </div>

        <div className="footer-links">

          <div>
            <h4>Platform</h4>
            <a href="#opportunities">Opportunities</a>
            <a href="#foryou">For You</a>
            <a href="#resources">Resources</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 StudentHub. Built for students.</p>
      </div>

    </footer>
  )
}

export default Footer
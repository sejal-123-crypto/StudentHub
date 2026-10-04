function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-content">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Have a question?
            <span> We'd love to hear from you.</span>
          </h2>

          <p className="contact-description">
            Have feedback, suggestions, or questions about StudentHub?
            Send us a message and our team will get back to you.
          </p>

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email us</span>
                <strong>support@studenthub.com</strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Our location</span>
                <strong>Pune, Maharashtra</strong>
              </div>
            </div>

          </div>

          {/* LOCATION BOX */}
          <div className="location-box">

            <div className="location-header">

              <div>
                <span>📍</span>

                <div>
                  <strong>Find us</strong>
                  <p>StudentHub • Pune, Maharashtra</p>
                </div>
              </div>

              <button
                type="button"
                className="map-btn"
              >
                Select on map
              </button>

            </div>

            {/* GOOGLE MAP */}
            <div className="map-container">

              <iframe
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="StudentHub Location"
              ></iframe>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="contact-form">

          <div className="form-header">
            <h3>Send us a message</h3>

            <p>
              Fill in the details below and we'll get back to you.
            </p>
          </div>

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Tell us how we can help..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            Send Message
            <span>→</span>
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;
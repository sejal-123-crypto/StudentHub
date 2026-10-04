function ForYou() {
  function goToProfile() {
    document.getElementById("profile")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="foryou-section" id="foryou">

      <div className="foryou-container">

        <div className="foryou-content">

          <span className="section-label">
            PERSONALIZED FOR YOU
          </span>

          <h2>
            Opportunities that
            <span> match your goals.</span>
          </h2>

          <p>
            Tell StudentHub about your branch, year, interests
            and location. We will suggest scholarships,
            internships, hackathons and other opportunities
            that match your profile.
          </p>

          <div className="preference-list">
            <div><span>✓</span>Based on your branch</div>
            <div><span>✓</span>Based on your interests</div>
            <div><span>✓</span>Based on your year of study</div>
            <div><span>✓</span>Based on your location</div>
          </div>

          <button
            className="primary-btn"
            onClick={goToProfile}
          >
            Create My Profile →
          </button>

        </div>

        <div className="profile-preview">

          <div className="preview-header">
            <span>✨ Your Profile</span>
            <span>Personalized</span>
          </div>

          <div className="student-avatar">
            👩‍💻
          </div>

          <h3>Engineering Student</h3>
          <p>ENTC • 2nd Year • Pune</p>

          <div className="interest-tags">
            <span>Technology</span>
            <span>Hackathons</span>
            <span>Internships</span>
            <span>Electronics</span>
          </div>

          <div className="recommendation-box">
            <span>🎯</span>
            <div>
              <strong>Personalized opportunities</strong>
              <small>Based on your profile</small>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ForYou
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="about-content">

          <span className="section-label">
            ABOUT STUDENTHUB
          </span>

          <h2>
            One platform.
            <br />
            <span>More opportunities.</span>
          </h2>

          <p className="about-description">
            StudentHub is a personalized opportunity discovery platform
            designed to help college students find scholarships,
            internships, hackathons, competitions and workshops in one
            convenient place.
          </p>

          <p className="about-description secondary">
            Instead of searching across multiple websites, social media
            platforms and college groups, students can discover relevant
            opportunities based on their interests, branch and career goals.
          </p>


          {/* ================= FEATURE POINTS ================= */}

          <div className="about-points">

            <div className="about-point">

              <div className="about-point-number">
                01
              </div>

              <div>
                <strong>
                  Discover
                </strong>

                <span>
                  Find opportunities from multiple categories in one place.
                </span>
              </div>

            </div>


            <div className="about-point">

              <div className="about-point-number">
                02
              </div>

              <div>
                <strong>
                  Personalize
                </strong>

                <span>
                  Get recommendations based on your interests and goals.
                </span>
              </div>

            </div>


            <div className="about-point">

              <div className="about-point-number">
                03
              </div>

              <div>
                <strong>
                  Take Action
                </strong>

                <span>
                  Save, apply and never miss important deadlines.
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}

        <div className="about-visual">

          {/* Main Card */}

          <div className="about-dashboard">

            <div className="about-dashboard-header">

              <div>

                <span>
                  STUDENTHUB
                </span>

                <h3>
                  Your Opportunity Hub
                </h3>

              </div>

              <div className="about-dashboard-icon">
                ✨
              </div>

            </div>


            {/* Profile */}

            <div className="about-profile-card">

              <div className="about-avatar">
                👩‍💻
              </div>

              <div>

                <strong>
                  Personalized for you
                </strong>

                <span>
                  Based on your interests & goals
                </span>

              </div>

              <div className="about-match">
                95%
              </div>

            </div>


            {/* Opportunity Cards */}

            <div className="about-opportunities">

              <div className="about-mini-card">

                <div className="about-mini-icon scholarship">
                  🎓
                </div>

                <div>

                  <strong>
                    Scholarships
                  </strong>

                  <span>
                    Financial support
                  </span>

                </div>

                <span className="about-arrow">
                  →
                </span>

              </div>


              <div className="about-mini-card">

                <div className="about-mini-icon hackathon">
                  🚀
                </div>

                <div>

                  <strong>
                    Hackathons
                  </strong>

                  <span>
                    Build & compete
                  </span>

                </div>

                <span className="about-arrow">
                  →
                </span>

              </div>


              <div className="about-mini-card">

                <div className="about-mini-icon internship">
                  💼
                </div>

                <div>

                  <strong>
                    Internships
                  </strong>

                  <span>
                    Grow your career
                  </span>

                </div>

                <span className="about-arrow">
                  →
                </span>

              </div>

            </div>


            {/* Bottom */}

            <div className="about-dashboard-footer">

              <span>
                🎯 Smart recommendations
              </span>

              <span>
                Active
              </span>

            </div>

          </div>


          {/* Floating notification */}

          <div className="about-floating-card">

            <div className="about-floating-icon">
              🔔
            </div>

            <div>

              <strong>
                Smart Alerts
              </strong>

              <span>
                Never miss a deadline
              </span>

            </div>

            <div className="about-floating-check">
              ✓
            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM VALUE CARDS ================= */}

      <div className="about-values">

        <div className="about-value">

          <div className="about-value-icon">
            🔎
          </div>

          <div>

            <strong>
              Easy Discovery
            </strong>

            <span>
              Opportunities in one place
            </span>

          </div>

        </div>


        <div className="about-value">

          <div className="about-value-icon">
            🎯
          </div>

          <div>

            <strong>
              Personalized
            </strong>

            <span>
              Recommendations for students
            </span>

          </div>

        </div>


        <div className="about-value">

          <div className="about-value-icon">
            🔔
          </div>

          <div>

            <strong>
              Smart Alerts
            </strong>

            <span>
              Timely reminders & updates
            </span>

          </div>

        </div>


        <div className="about-value">

          <div className="about-value-icon">
            📈
          </div>

          <div>

            <strong>
              Student Growth
            </strong>

            <span>
              Discover, apply & grow
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
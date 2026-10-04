import { useState } from "react";
import stats from "../../data/stats";

function Home() {

  // =====================================================
  // PROFILE
  // =====================================================

  const savedProfile = JSON.parse(
    localStorage.getItem("studentProfile") || "null"
  );

  const [profile, setProfile] = useState(
    savedProfile || {
      name: "",
      email: "",
      branch: "",
      interests: [],
      goal: ""
    }
  );

  const [showProfile, setShowProfile] = useState(false);

  const [profileSaved, setProfileSaved] = useState(
    !!savedProfile
  );


  // =====================================================
  // SEARCH
  // =====================================================

  const [searchTerm, setSearchTerm] = useState("");


  // =====================================================
  // OPPORTUNITIES
  // =====================================================

  const opportunities = [

    {
      id: 1,
      title: "Merit Scholarship",
      category: "Financial Support",
      location: "India",
      amount: "₹50,000",
      deadline: "15 Nov",
      match: "95%",
      icon: "🎓",
      type: "scholarship",

      interests: [
        "Scholarships",
        "Academics"
      ],

      branches: [
        "All Branches"
      ],

      goals: [
        "Scholarship",
        "Higher Studies"
      ]
    },

    {
      id: 2,
      title: "Tech Innovation Hackathon",
      category: "Hackathon",
      location: "Online",
      amount: "Students",
      deadline: "5 Nov",
      match: "92%",
      icon: "🚀",
      type: "hackathon",

      interests: [
        "Hackathons",
        "Technology",
        "Innovation"
      ],

      branches: [
        "All Branches",
        "CSE",
        "IT",
        "ENTC",
        "ECE"
      ],

      goals: [
        "Hackathons",
        "Internship",
        "Job"
      ]
    },

    {
      id: 3,
      title: "Technology Internship",
      category: "Internship",
      location: "Online",
      amount: "Career",
      deadline: "30 Oct",
      match: "89%",
      icon: "💼",
      type: "internship",

      interests: [
        "Internships",
        "Technology"
      ],

      branches: [
        "All Branches",
        "CSE",
        "IT",
        "ENTC",
        "ECE"
      ],

      goals: [
        "Internship",
        "Job"
      ]
    }

  ];


  // =====================================================
  // PROFILE MATCHING
  // =====================================================

  function calculateMatch(item) {

    if (
      !profileSaved ||
      !profile.interests ||
      profile.interests.length === 0
    ) {
      return item.match;
    }

    let score = 70;

    // Interest matching
    const interestMatch =
      item.interests?.some((interest) =>
        profile.interests.includes(interest)
      );

    if (interestMatch) {
      score += 15;
    }

    // Branch matching
    if (
      profile.branch &&
      item.branches?.includes(profile.branch)
    ) {
      score += 10;
    }

    // Goal matching
    if (
      profile.goal &&
      item.goals?.includes(profile.goal)
    ) {
      score += 5;
    }

    return `${Math.min(score, 99)}%`;
  }


  // =====================================================
  // SEARCH + PERSONALIZED OPPORTUNITIES
  // =====================================================

  const filteredOpportunities =
    opportunities
      .filter((item) =>
        `${item.title} ${item.category} ${item.location}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .map((item) => ({
        ...item,
        personalizedMatch: calculateMatch(item)
      }))
      .sort((a, b) => {

        const scoreA =
          parseInt(a.personalizedMatch);

        const scoreB =
          parseInt(b.personalizedMatch);

        return scoreB - scoreA;

      });


  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = () => {

    const section =
      document.getElementById("opportunities");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }

  };


  // =====================================================
  // VIEW ALL
  // =====================================================

  const handleViewAll = () => {

    const section =
      document.getElementById("opportunities");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }

  };


  // =====================================================
  // OPEN PROFILE
  // =====================================================

  const openProfile = () => {
    setShowProfile(true);
  };


  // =====================================================
  // PROFILE INPUT
  // =====================================================

  const handleProfileChange = (field, value) => {

    setProfile((current) => ({
      ...current,
      [field]: value
    }));

  };


  // =====================================================
  // INTEREST CHECKBOX
  // =====================================================

  const handleInterestChange = (interest) => {

    setProfile((current) => {

      const currentInterests =
        current.interests || [];

      const alreadySelected =
        currentInterests.includes(interest);

      return {
        ...current,

        interests: alreadySelected
          ? currentInterests.filter(
              (item) => item !== interest
            )
          : [
              ...currentInterests,
              interest
            ]
      };

    });

  };


  // =====================================================
  // SAVE PROFILE
  // =====================================================

  const saveProfile = () => {

    localStorage.setItem(
      "studentProfile",
      JSON.stringify(profile)
    );

    // These are useful later for EmailJS
    localStorage.setItem(
      "userEmail",
      profile.email
    );

    localStorage.setItem(
      "userName",
      profile.name
    );

    setProfileSaved(true);

    setShowProfile(false);

  };


  // =====================================================
  // PROFILE COMPLETION
  // =====================================================

  const profileComplete =
    profile.name &&
    profile.email &&
    profile.branch &&
    profile.interests?.length > 0 &&
    profile.goal;


  return (

    <section
      className="home-page"
      id="home"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="home-glow glow-one"></div>

      <div className="home-glow glow-two"></div>


      <div className="home-container">


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="home-content">


          <div className="home-badge">

            <span>✨</span>

            Your opportunities, personalized

          </div>


          <h1>

            Discover the right

            <br />

            <span>
              opportunities.
            </span>

          </h1>


          <p className="home-description">

            Find scholarships, internships,
            hackathons, competitions and workshops
            — personalized according to your interests,
            branch and goals.

          </p>


          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="home-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  handleSearch();
                }

              }}
              placeholder="Search scholarships, internships, hackathons..."
            />

            <button
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>

          </div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="home-buttons">

            <a
              href="#opportunities"
              className="primary-btn home-primary-btn"
            >

              Explore Opportunities

              <span>
                →
              </span>

            </a>


            <button
              type="button"
              className="home-secondary-btn"
              onClick={openProfile}
            >

              <span>
                ✨
              </span>

              {profileComplete
                ? "Edit My Profile"
                : "Find Opportunities For Me"}

            </button>

          </div>


          {/* =================================================
              PROFILE STATUS
          ================================================= */}

          {profileSaved && (

            <div className="profile-status">

              ✓ Profile saved — opportunities
              are personalized for you.

            </div>

          )}


          {/* =================================================
              TRUST
          ================================================= */}

          <div className="home-trust">

            <div className="trust-avatars">

              <span>👩🏻</span>
              <span>👨🏻</span>
              <span>👩🏽</span>
              <span>👨🏽</span>

            </div>


            <div className="trust-content">

              <strong>
                Built for students
              </strong>

              <p>
                Discover opportunities in one place
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="home-visual">


          <div className="dashboard-card">


            {/* =================================================
                DASHBOARD HEADER
            ================================================= */}

            <div className="dashboard-top">

              <div>

                <span className="dashboard-label">
                  STUDENTHUB
                </span>

                <h3>
                  Your Opportunities
                </h3>

              </div>


              {/* PROFILE BUTTON */}

              <button
                type="button"
                className="dashboard-profile"
                onClick={openProfile}
                title="Create / Edit Profile"
              >

                👩‍💻

              </button>

            </div>


            {/* =================================================
                RECOMMENDATION HEADER
            ================================================= */}

            <div className="recommendation-header">

              <span>

                ✨ Recommended for you

              </span>


              <button
                type="button"
                className="view-more"
                onClick={handleViewAll}
              >

                View all

              </button>

            </div>


            {/* =================================================
                PERSONALIZATION MESSAGE
            ================================================= */}

            {profileSaved && (

              <div className="personalization-message">

                🎯 Recommendations based on your
                profile

              </div>

            )}


            {/* =================================================
                SEARCH RESULT
            ================================================= */}

            {searchTerm && (

              <div className="dashboard-search-result">

                {filteredOpportunities.length > 0 ? (

                  <span>

                    {filteredOpportunities.length}
                    {" "}
                    result
                    {filteredOpportunities.length > 1
                      ? "s"
                      : ""}
                    {" "}
                    found

                  </span>

                ) : (

                  <span>
                    No matching opportunity found
                  </span>

                )}

              </div>

            )}


            {/* =================================================
                OPPORTUNITIES
            ================================================= */}

            {filteredOpportunities.map(
              (item) => (

                <div
                  className="mini-opportunity"
                  key={item.id}
                  onClick={handleViewAll}
                  style={{
                    cursor: "pointer"
                  }}
                >

                  <div
                    className={`mini-icon ${item.type}`}
                  >

                    {item.icon}

                  </div>


                  <div className="mini-content">


                    <div className="mini-title-row">

                      <h4>
                        {item.title}
                      </h4>


                      <span className="match-badge">

                        {item.personalizedMatch}

                      </span>

                    </div>


                    <p>

                      {item.category}
                      {" • "}
                      {item.location}

                    </p>


                    <div className="mini-bottom">

                      <span>
                        {item.amount}
                      </span>

                      <span>
                        Deadline:
                        {" "}
                        {item.deadline}
                      </span>

                    </div>

                  </div>

                </div>

              )
            )}


            {/* =================================================
                NO RESULTS
            ================================================= */}

            {searchTerm &&
              filteredOpportunities.length === 0 && (

                <div className="no-dashboard-results">

                  🔍 Try searching for:

                  <br />

                  scholarships, internships
                  or hackathons

                </div>

              )}


            {/* =================================================
                FOOTER
            ================================================= */}

            <button
              type="button"
              className="dashboard-footer"
              onClick={openProfile}
            >

              <span>

                🎯

                {profileSaved
                  ? " Personalized for your profile"
                  : " Create your profile for personalized opportunities"}

              </span>


              <span>
                →
              </span>

            </button>

          </div>


          {/* =================================================
              FLOATING CARD 1
          ================================================= */}

          <div className="floating-home-card floating-top">

            <div className="floating-icon">
              🎓
            </div>


            <div className="floating-content">

              <strong>
                Scholarship
              </strong>

              <small>
                ₹50,000 available
              </small>

            </div>


            <span className="floating-check">
              ✓
            </span>

          </div>


          {/* =================================================
              FLOATING CARD 2
          ================================================= */}

          <div className="floating-home-card floating-bottom">

            <div className="floating-icon">
              🚀
            </div>


            <div className="floating-content">

              <strong>
                Hackathon
              </strong>

              <small>
                92% match for you
              </small>

            </div>


            <span className="match-dot">
              92%
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="home-stats">


        <div className="home-stat">

          <div className="stat-image">

            <img
              src="/imagess/opportunities-ai.png"
              alt="Opportunities"
            />

          </div>


          <div className="stat-text">

            <strong>
              {stats.opportunities}+
            </strong>

            <span>
              Opportunities
            </span>

          </div>

        </div>


        <div className="home-stat-divider"></div>


        <div className="home-stat">

          <div className="stat-image">

            <img
              src="/imagess/categories-ai.png"
              alt="Opportunity Categories"
            />

          </div>


          <div className="stat-text">

            <strong>
              {stats.categories}+
            </strong>

            <span>
              Opportunity Categories
            </span>

          </div>

        </div>


        <div className="home-stat-divider"></div>


        <div className="home-stat">

          <div className="stat-image">

            <img
              src="/imagess/students-ai.png"
              alt="Students Reached"
            />

          </div>


          <div className="stat-text">

            <strong>
              {stats.studentsReached.toLocaleString()}+
            </strong>

            <span>
              Students Reached
            </span>

          </div>

        </div>


        <div className="home-stat-divider"></div>


        <div className="home-stat">

          <div className="stat-image">

            <img
              src="/imagess/discovery-ai.png"
              alt="Opportunity Discovery"
            />

          </div>


          <div className="stat-text">

            <strong>
              {stats.availability}
            </strong>

            <span>
              Opportunity Discovery
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          PROFILE MODAL
      ===================================================== */}

      {showProfile && (

        <div
          className="profile-modal-overlay"
          onClick={(e) => {

            if (
              e.target.className ===
              "profile-modal-overlay"
            ) {
              setShowProfile(false);
            }

          }}
        >

          <div className="profile-modal">


            {/* HEADER */}

            <div className="profile-modal-header">

              <div>

                <span className="section-label">
                  STUDENTHUB
                </span>

                <h2>
                  {profileSaved
                    ? "Edit Your Profile"
                    : "Create Your Profile"}
                </h2>

                <p>
                  Tell us about yourself to get
                  personalized opportunities.
                </p>

              </div>


              <button
                type="button"
                className="profile-close"
                onClick={() =>
                  setShowProfile(false)
                }
              >

                ✕

              </button>

            </div>


            {/* NAME */}

            <div className="profile-field">

              <label>
                Full Name
              </label>

              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  handleProfileChange(
                    "name",
                    e.target.value
                  )
                }
                placeholder="Enter your name"
              />

            </div>


            {/* EMAIL */}

            <div className="profile-field">

              <label>
                Email
              </label>

              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  handleProfileChange(
                    "email",
                    e.target.value
                  )
                }
                placeholder="Enter your email"
              />

            </div>


            {/* BRANCH */}

            <div className="profile-field">

              <label>
                Branch
              </label>

              <select
                value={profile.branch}
                onChange={(e) =>
                  handleProfileChange(
                    "branch",
                    e.target.value
                  )
                }
              >

                <option value="">
                  Select your branch
                </option>

                <option value="CSE">
                  Computer Science
                </option>

                <option value="IT">
                  Information Technology
                </option>

                <option value="ENTC">
                  Electronics & Telecommunication
                </option>

                <option value="ECE">
                  Electronics & Communication
                </option>

                <option value="Mechanical">
                  Mechanical
                </option>

                <option value="Civil">
                  Civil
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* INTERESTS */}

            <div className="profile-field">

              <label>
                Your Interests
              </label>


              <div className="interest-options">

                {[
                  "Hackathons",
                  "Scholarships",
                  "Internships",
                  "Technology",
                  "Innovation",
                  "Academics"
                ].map((interest) => (

                  <label
                    className={`interest-option ${
                      profile.interests?.includes(
                        interest
                      )
                        ? "selected"
                        : ""
                    }`}
                    key={interest}
                  >

                    <input
                      type="checkbox"
                      checked={
                        profile.interests?.includes(
                          interest
                        ) || false
                      }
                      onChange={() =>
                        handleInterestChange(
                          interest
                        )
                      }
                    />

                    <span>
                      {interest}
                    </span>

                  </label>

                ))}

              </div>

            </div>


            {/* GOAL */}

            <div className="profile-field">

              <label>
                Career Goal
              </label>

              <select
                value={profile.goal}
                onChange={(e) =>
                  handleProfileChange(
                    "goal",
                    e.target.value
                  )
                }
              >

                <option value="">
                  Select your goal
                </option>

                <option value="Internship">
                  Get an Internship
                </option>

                <option value="Job">
                  Get a Job
                </option>

                <option value="Scholarship">
                  Find Scholarships
                </option>

                <option value="Hackathons">
                  Participate in Hackathons
                </option>

                <option value="Higher Studies">
                  Higher Studies
                </option>

              </select>

            </div>


            {/* SAVE */}

            <button
              type="button"
              className="primary-btn profile-save-btn"
              onClick={saveProfile}
              disabled={!profileComplete}
            >

              {profileComplete
                ? "Save Profile & Get Recommendations →"
                : "Complete Your Profile"}

            </button>


            {!profileComplete && (

              <p className="profile-required">

                Please complete all profile fields
                to get personalized recommendations.

              </p>

            )}

          </div>

        </div>

      )}

    </section>

  );

}

export default Home;
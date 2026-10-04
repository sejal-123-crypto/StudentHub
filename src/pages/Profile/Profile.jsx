// import { useState } from "react"
// import opportunities from "../../data/opportunities"

// function Profile() {

//   const [profile, setProfile] = useState(() => {
//     const savedProfile = localStorage.getItem("studentProfile")

//     return savedProfile
//       ? JSON.parse(savedProfile)
//       : {
//           name: "",
//           email: "",
//           branch: "",
//           year: "",
//           location: "",
//           interests: "",
//         }
//   })

//   const [showToast, setShowToast] = useState(false)
//   const [recommendations, setRecommendations] = useState([])

//   function handleChange(e) {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value,
//     })
//   }

//   function getRecommendations() {

//     const interests = profile.interests.toLowerCase()
//     const branch = profile.branch.toLowerCase()

//     const recommended = opportunities.filter((opportunity) => {

//       const category = opportunity.category.toLowerCase()
//       const title = opportunity.title.toLowerCase()
//       const description = opportunity.description.toLowerCase()

//       return (
//         interests.includes(category) ||
//         interests.includes("technology") && description.includes("technology") ||
//         interests.includes("electronics") && (
//           description.includes("technology") ||
//           title.includes("tech")
//         ) ||
//         branch.includes("entc") && (
//           category === "hackathon" ||
//           category === "workshop" ||
//           category === "competition" ||
//           category === "internship"
//         )
//       )
//     })

//     return recommended.slice(0, 4)
//   }

//   function handleSave(e) {
//     e.preventDefault()

//     localStorage.setItem(
//       "studentProfile",
//       JSON.stringify(profile)
//     )

//     const recommended = getRecommendations()

//     setRecommendations(recommended)
//     setShowToast(true)

//     setTimeout(() => {
//       setShowToast(false)
//     }, 3000)
//   }

//   return (
//     <section className="profile-section" id="profile">

//       <div className="profile-container">

//         <div className="profile-header">

//           <div className="profile-avatar">
//             👩‍💻
//           </div>

//           <div>
//             <span className="section-label">
//               MY PROFILE
//             </span>

//             <h2>Student Profile</h2>

//             <p>
//               Complete your profile to get personalized opportunities.
//             </p>
//           </div>

//         </div>

//         <form
//           className="profile-form"
//           onSubmit={handleSave}
//         >

//           <div className="form-group">
//             <label>Full Name</label>

//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>

//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Branch</label>

//             <select
//               name="branch"
//               value={profile.branch}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Branch</option>
//               <option value="Computer Engineering">
//                 Computer Engineering
//               </option>
//               <option value="Information Technology">
//                 Information Technology
//               </option>
//               <option value="ENTC">
//                 ENTC
//               </option>
//               <option value="AI & ML">
//                 AI & ML
//               </option>
//               <option value="Other">
//                 Other
//               </option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Year of Study</label>

//             <select
//               name="year"
//               value={profile.year}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Year</option>
//               <option value="1st Year">1st Year</option>
//               <option value="2nd Year">2nd Year</option>
//               <option value="3rd Year">3rd Year</option>
//               <option value="4th Year">4th Year</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Location</label>

//             <input
//               type="text"
//               name="location"
//               value={profile.location}
//               onChange={handleChange}
//               placeholder="Enter your city"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Interests</label>

//             <input
//               type="text"
//               name="interests"
//               value={profile.interests}
//               onChange={handleChange}
//               placeholder="Hackathons, Scholarships, Internships..."
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="primary-btn profile-save-btn"
//           >
//             Save Profile & Get Recommendations →
//           </button>

//         </form>

//         {recommendations.length > 0 && (

//           <div className="recommendations-section">

//             <div className="recommendations-heading">
//               <span className="section-label">
//                 RECOMMENDED FOR YOU
//               </span>

//               <h2>
//                 Opportunities matching your profile
//               </h2>

//               <p>
//                 Based on your branch and interests.
//               </p>
//             </div>

//             <div className="recommendation-grid">

//               {recommendations.map((opportunity) => (

//                 <div
//                   className="recommendation-card"
//                   key={opportunity.id}
//                 >

//                   <div className="recommendation-icon">
//                     {opportunity.icon}
//                   </div>

//                   <span className="category-tag">
//                     {opportunity.category}
//                   </span>

//                   <h3>
//                     {opportunity.title}
//                   </h3>

//                   <p>
//                     {opportunity.organization}
//                   </p>

//                   <div className="recommendation-info">
//                     📍 {opportunity.location}
//                   </div>

//                   <div className="recommendation-match">
//                     🎯 {opportunity.match}% Match
//                   </div>

//                   <a
//                     href={opportunity.applyUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="primary-btn"
//                   >
//                     View Opportunity →
//                   </a>

//                 </div>

//               ))}

//             </div>

//           </div>

//         )}

//         {showToast && (
//           <div className="profile-toast">
//             ✓ Profile saved! Personalized opportunities generated.
//           </div>
//         )}

//       </div>

//     </section>
//   )
// }

// export default Profile
import { useState } from "react"
import opportunities from "../../data/opportunities"

function Profile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    location: "",
    interests: "",
  })

  const [showToast, setShowToast] = useState(false)
  const [recommendations, setRecommendations] = useState([])


  // =========================================================
  // HANDLE FORM CHANGES
  // =========================================================

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }


  // =========================================================
  // CALCULATE MATCH
  // =========================================================

  function calculateMatch(opportunity) {

    const userInterests = profile.interests
      .toLowerCase()
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)

    const userBranch = profile.branch.toLowerCase()

    const category =
      opportunity.category?.toLowerCase() || ""

    const title =
      opportunity.title?.toLowerCase() || ""

    const description =
      opportunity.description?.toLowerCase() || ""

    let score = 0


    // =======================================================
    // INTEREST MATCH
    // =======================================================

    const interestMatch = userInterests.some((interest) => {

      if (
        category.includes(interest) ||
        interest.includes(category)
      ) {
        return true
      }

      if (
        interest.includes("scholar") &&
        (
          category.includes("scholar") ||
          title.includes("scholar") ||
          description.includes("scholarship")
        )
      ) {
        return true
      }

      if (
        interest.includes("intern") &&
        (
          category.includes("intern") ||
          title.includes("intern") ||
          description.includes("intern")
        )
      ) {
        return true
      }

      if (
        interest.includes("hackathon") &&
        (
          category.includes("hackathon") ||
          title.includes("hackathon") ||
          description.includes("hackathon")
        )
      ) {
        return true
      }

      if (
        interest.includes("technology") &&
        (
          title.includes("technology") ||
          title.includes("tech") ||
          description.includes("technology") ||
          description.includes("tech")
        )
      ) {
        return true
      }

      if (
        interest.includes("electronics") &&
        (
          title.includes("electronics") ||
          description.includes("electronics") ||
          description.includes("embedded") ||
          description.includes("iot")
        )
      ) {
        return true
      }

      return false
    })


    // If interest does not match, don't recommend
    if (!interestMatch) {
      return 0
    }


    score = 80


    // =======================================================
    // BRANCH BONUS
    // =======================================================

    if (
      userBranch === "entc" &&
      (
        description.includes("electronics") ||
        description.includes("embedded") ||
        description.includes("iot") ||
        description.includes("communication") ||
        title.includes("electronics")
      )
    ) {
      score += 10
    }


    if (
      userBranch.includes("computer") &&
      (
        description.includes("computer") ||
        description.includes("software") ||
        description.includes("coding") ||
        title.includes("software")
      )
    ) {
      score += 10
    }


    if (
      userBranch.includes("information technology") &&
      (
        description.includes("technology") ||
        description.includes("software") ||
        description.includes("coding")
      )
    ) {
      score += 10
    }


    // =======================================================
    // LOCATION BONUS
    // =======================================================

    if (
      profile.location &&
      opportunity.location &&
      opportunity.location
        .toLowerCase()
        .includes(profile.location.toLowerCase())
    ) {
      score += 5
    }


    return Math.min(score, 99)
  }


  // =========================================================
  // GET RECOMMENDATIONS
  // =========================================================

  function getRecommendations() {

    return opportunities

      .map((opportunity) => ({
        ...opportunity,
        match: calculateMatch(opportunity),
      }))

      .filter(
        (opportunity) => opportunity.match > 0
      )

      .sort(
        (a, b) => b.match - a.match
      )

      .slice(0, 4)
  }


  // =========================================================
  // SAVE PROFILE
  // =========================================================

  function handleSave(e) {

    e.preventDefault()

    // Save only for the current browser session
    sessionStorage.setItem(
      "studentProfile",
      JSON.stringify(profile)
    )

    sessionStorage.setItem(
      "userName",
      profile.name
    )

    sessionStorage.setItem(
      "userEmail",
      profile.email
    )

    const recommended = getRecommendations()

    setRecommendations(recommended)

    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }


  return (
    <section
      className="profile-section"
      id="profile"
    >

      <div className="profile-layout">


        {/* =================================================
            LEFT SIDE - PROFILE FORM
        ================================================= */}

        <div className="profile-container">

          <div className="profile-header">

            <div className="profile-avatar">
              👩‍💻
            </div>

            <div>

              <span className="section-label">
                MY PROFILE
              </span>

              <h2>
                Student Profile
              </h2>

              <p>
                Complete your profile to get personalized opportunities.
              </p>

            </div>

          </div>


          <form
            className="profile-form"
            onSubmit={handleSave}
          >


            {/* NAME */}

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            {/* BRANCH */}

            <div className="form-group">

              <label>
                Branch
              </label>

              <select
                name="branch"
                value={profile.branch}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Branch
                </option>

                <option value="Computer Engineering">
                  Computer Engineering
                </option>

                <option value="Information Technology">
                  Information Technology
                </option>

                <option value="ENTC">
                  ENTC
                </option>

                <option value="AI & ML">
                  AI & ML
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* YEAR */}

            <div className="form-group">

              <label>
                Year of Study
              </label>

              <select
                name="year"
                value={profile.year}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Year
                </option>

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="4th Year">
                  4th Year
                </option>

              </select>

            </div>


            {/* LOCATION */}

            <div className="form-group">

              <label>
                Location
              </label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                placeholder="Enter your city"
                required
              />

            </div>


            {/* INTERESTS */}

            <div className="form-group">

              <label>
                Interests
              </label>

              <input
                type="text"
                name="interests"
                value={profile.interests}
                onChange={handleChange}
                placeholder="Scholarships, Hackathons, Internships..."
                required
              />

              <small>
                You can enter multiple interests separated by commas.
              </small>

            </div>


            {/* SAVE BUTTON */}

            <button
              type="submit"
              className="primary-btn profile-save-btn"
            >
              Save Profile & Get Recommendations →
            </button>

          </form>

        </div>


        {/* =================================================
            RIGHT SIDE - RECOMMENDATIONS
        ================================================= */}

        <div className="recommendations-section">

          <div className="recommendations-heading">

            <span className="section-label">
              RECOMMENDED FOR YOU
            </span>

            <h2>
              Opportunities matching your profile
            </h2>

            <p>
              Based on your selected interests and branch.
            </p>

          </div>


          {recommendations.length > 0 ? (

            <div className="recommendation-grid">

              {recommendations.map((opportunity) => (

                <div
                  className="recommendation-card"
                  key={opportunity.id}
                >

                  <div className="recommendation-icon">
                    {opportunity.icon || "🎯"}
                  </div>

                  <span className="category-tag">
                    {opportunity.category}
                  </span>

                  <h3>
                    {opportunity.title}
                  </h3>

                  <p>
                    {opportunity.organization}
                  </p>

                  <div className="recommendation-info">
                    📍 {opportunity.location}
                  </div>

                  <div className="recommendation-match">
                    🎯 {opportunity.match}% Match
                  </div>

                  <a
                    href={opportunity.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                  >
                    View Opportunity →
                  </a>

                </div>

              ))}

            </div>

          ) : (

            <div className="recommendation-empty">

              <div className="empty-icon">
                🎯
              </div>

              <h3>
                Your recommendations will appear here
              </h3>

              <p>
                Fill in your profile and click
                <strong>
                  {" "}“Save Profile & Get Recommendations”
                </strong>
                {" "}to see opportunities selected for you.
              </p>

            </div>

          )}

        </div>

      </div>


      {/* =================================================
          TOAST
      ================================================= */}

      {showToast && (

        <div className="profile-toast">
          ✓ Profile saved!
          Personalized opportunities generated.
        </div>

      )}

    </section>
  )
}

export default Profile
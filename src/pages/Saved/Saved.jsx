// function Saved({ savedOpportunities = [] }) {
//   return (
//     <section className="saved-section" id="saved">

//       <div className="saved-container">

//         {/* Header */}
//         <div className="saved-header">

//           <div>
//             <span className="section-label">
//               MY SAVED OPPORTUNITIES
//             </span>

//             <h2>
//               Opportunities you've
//               <span> saved.</span>
//             </h2>

//             <p>
//               Keep track of opportunities you want to explore later.
//             </p>
//           </div>

//           {savedOpportunities.length > 0 && (
//             <div className="saved-count">
//               <strong>{savedOpportunities.length}</strong>
//               <span>Saved</span>
//             </div>
//           )}

//         </div>


//         {/* Empty State */}
//         {savedOpportunities.length === 0 ? (

//           <div className="empty-saved">

//             <div className="empty-saved-icon">
//               ♡
//             </div>

//             <h3>
//               No saved opportunities yet
//             </h3>

//             <p>
//               Save opportunities that interest you and
//               they will appear here.
//             </p>

//             <a
//               href="#opportunities"
//               className="primary-btn"
//             >
//               Explore Opportunities →
//             </a>

//           </div>

//         ) : (

//           /* Saved Opportunities */
//           <div className="saved-grid">

//             {savedOpportunities.map((opportunity) => (

//               <div
//                 className="saved-card"
//                 key={opportunity.id}
//               >

//                 {/* Image / Icon */}
//                 <div className="saved-card-top">

//                   <div className="saved-opportunity-icon">
//                     {opportunity.icon}
//                   </div>

//                   <button
//                     className="saved-heart-btn"
//                     title="Saved"
//                   >
//                     ♥
//                   </button>

//                 </div>


//                 {/* Category */}
//                 <span className="saved-category">
//                   {opportunity.category}
//                 </span>


//                 {/* Title */}
//                 <h3>
//                   {opportunity.title}
//                 </h3>


//                 {/* Organization */}
//                 <p className="saved-organization">
//                   {opportunity.organization}
//                 </p>


//                 {/* Details */}
//                 <div className="saved-info">

//                   <div>
//                     <span>📍</span>
//                     <p>{opportunity.location}</p>
//                   </div>

//                   <div>
//                     <span>⏳</span>
//                     <p>{opportunity.deadline}</p>
//                   </div>

//                 </div>


//                 {/* Footer */}
//                 <div className="saved-card-footer">

//                   <button className="saved-details-btn">
//                     View Details
//                     <span>→</span>
//                   </button>

//                 </div>

//               </div>

//             ))}

//           </div>

//         )}

//       </div>

//     </section>
//   )
// }

// export default Saved
import { useEffect, useState } from "react";

function Saved({ savedOpportunities = [], onRemove }) {

  // Load saved opportunities from localStorage first
  const [saved, setSaved] = useState(() => {
    try {
      const stored = localStorage.getItem("savedOpportunities");

      if (stored) {
        return JSON.parse(stored);
      }

      return savedOpportunities;
    } catch (error) {
      console.error("Error loading saved opportunities:", error);
      return savedOpportunities;
    }
  });


  // =========================================================
  // SYNC WITH PARENT + LOCAL STORAGE
  // =========================================================

  useEffect(() => {
    const stored = localStorage.getItem("savedOpportunities");

    if (stored) {
      try {
        setSaved(JSON.parse(stored));
      } catch (error) {
        console.error("Invalid saved opportunities data:", error);
      }
    } else {
      setSaved(savedOpportunities);
    }
  }, [savedOpportunities]);


  // =========================================================
  // LISTEN FOR CHANGES FROM OTHER COMPONENTS
  // =========================================================

  useEffect(() => {

    const updateSavedOpportunities = () => {

      try {

        const stored =
          localStorage.getItem("savedOpportunities");

        if (stored) {
          setSaved(JSON.parse(stored));
        } else {
          setSaved([]);
        }

      } catch (error) {

        console.error(
          "Error updating saved opportunities:",
          error
        );

      }
    };


    window.addEventListener(
      "savedOpportunitiesUpdated",
      updateSavedOpportunities
    );


    // Also listen for localStorage changes
    window.addEventListener(
      "storage",
      updateSavedOpportunities
    );


    return () => {

      window.removeEventListener(
        "savedOpportunitiesUpdated",
        updateSavedOpportunities
      );

      window.removeEventListener(
        "storage",
        updateSavedOpportunities
      );

    };

  }, []);


  // =========================================================
  // REMOVE SAVED OPPORTUNITY
  // =========================================================

  const removeSaved = (id) => {

    const updatedSaved = saved.filter(
      (opportunity) => opportunity.id !== id
    );


    // Update screen immediately
    setSaved(updatedSaved);


    // Update localStorage
    localStorage.setItem(
      "savedOpportunities",
      JSON.stringify(updatedSaved)
    );


    // Tell parent component
    if (onRemove) {
      onRemove(id);
    }


    // Tell other components
    window.dispatchEvent(
      new Event("savedOpportunitiesUpdated")
    );

  };


  // =========================================================
  // VIEW DETAILS
  // =========================================================

  const viewDetails = (opportunity) => {

    if (opportunity.applyUrl) {

      window.open(
        opportunity.applyUrl,
        "_blank",
        "noopener,noreferrer"
      );

    } else if (opportunity.joinUrl) {

      window.open(
        opportunity.joinUrl,
        "_blank",
        "noopener,noreferrer"
      );

    } else if (opportunity.url) {

      window.open(
        opportunity.url,
        "_blank",
        "noopener,noreferrer"
      );

    } else {

      alert(
        `More details about "${opportunity.title}" will be available soon.`
      );

    }

  };


  // =========================================================
  // RENDER
  // =========================================================

  return (

    <section
      className="saved-section"
      id="saved"
    >

      <div className="saved-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="saved-header">

          <div>

            <span className="section-label">
              MY SAVED OPPORTUNITIES
            </span>


            <h2>
              Opportunities you've
              <span> saved.</span>
            </h2>


            <p>
              Keep track of opportunities you want to explore later.
            </p>

          </div>


          {/* Saved Count */}

          {saved.length > 0 && (

            <div className="saved-count">

              <strong>
                {saved.length}
              </strong>

              <span>
                {saved.length === 1
                  ? "Saved"
                  : "Saved"}
              </span>

            </div>

          )}

        </div>


        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {saved.length === 0 ? (

          <div className="empty-saved">

            <div className="empty-saved-icon">
              ♡
            </div>


            <h3>
              No saved opportunities yet
            </h3>


            <p>
              Save opportunities that interest you
              and they will appear here.
            </p>


            <a
              href="#opportunities"
              className="primary-btn"
            >
              Explore Opportunities →
            </a>

          </div>

        ) : (


          /* =================================================
             SAVED OPPORTUNITIES
          ================================================= */

          <div className="saved-grid">

            {saved.map((opportunity) => (

              <div
                className="saved-card"
                key={opportunity.id}
              >


                {/* =========================================
                    CARD TOP
                ========================================= */}

                <div className="saved-card-top">

                  <div className="saved-opportunity-icon">

                    {opportunity.icon || "📌"}

                  </div>


                  {/* Remove Button */}

                  <button
                    type="button"
                    className="saved-heart-btn"
                    title="Remove from saved"
                    aria-label={`Remove ${opportunity.title} from saved`}
                    onClick={() =>
                      removeSaved(opportunity.id)
                    }
                  >

                    ♥

                  </button>

                </div>


                {/* =========================================
                    CATEGORY
                ========================================= */}

                <span className="saved-category">

                  {opportunity.category ||
                    "Opportunity"}

                </span>


                {/* =========================================
                    TITLE
                ========================================= */}

                <h3>

                  {opportunity.title}

                </h3>


                {/* =========================================
                    ORGANIZATION
                ========================================= */}

                <p className="saved-organization">

                  {opportunity.organization ||
                    "StudentHub Opportunity"}

                </p>


                {/* =========================================
                    DETAILS
                ========================================= */}

                <div className="saved-info">


                  {/* Location */}

                  <div>

                    <span>
                      📍
                    </span>

                    <p>
                      {opportunity.location ||
                        "Online"}
                    </p>

                  </div>


                  {/* Deadline */}

                  <div>

                    <span>
                      ⏳
                    </span>

                    <p>
                      {opportunity.deadline ||
                        "Check deadline"}
                    </p>

                  </div>


                </div>


                {/* =========================================
                    FOOTER
                ========================================= */}

                <div className="saved-card-footer">


                  <button
                    type="button"
                    className="saved-details-btn"
                    onClick={() =>
                      viewDetails(opportunity)
                    }
                  >

                    View Details

                    <span>
                      →
                    </span>

                  </button>


                </div>


              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );

}

export default Saved;
import { useState } from "react"

function OpportunityCard({ opportunity }) {

  const [isSaved, setIsSaved] = useState(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    )

    return saved.some(
      (item) => item.id === opportunity.id
    )
  })

  const [showDetails, setShowDetails] = useState(false)

  function toggleSave() {

    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    )

    if (isSaved) {

      const updatedSaved = saved.filter(
        (item) => item.id !== opportunity.id
      )

      localStorage.setItem(
        "savedOpportunities",
        JSON.stringify(updatedSaved)
      )

      setIsSaved(false)

    } else {

      saved.push(opportunity)

      localStorage.setItem(
        "savedOpportunities",
        JSON.stringify(saved)
      )

      setIsSaved(true)
    }
  }

  return (
    <>
      <div className="opportunity-card">

        <div className="opportunity-card-top">

          <div className="opportunity-image">
            <img
                src={opportunity.image}
                alt={opportunity.title}
            />
            </div>
          <button
            className={`save-btn ${isSaved ? "saved" : ""}`}
            onClick={toggleSave}
          >
            {isSaved ? "♥" : "♡"}
          </button>

        </div>

        <span className="category-tag">
          {opportunity.category}
        </span>

        <h3>{opportunity.title}</h3>

        <p className="organization">
          {opportunity.organization}
        </p>

        <div className="opportunity-info">
          <span>📍 {opportunity.location}</span>
          <span>⏳ {opportunity.deadline}</span>
        </div>

        <div className="card-footer">

          <div className="match-small">
            <strong>{opportunity.match}%</strong>
            <span>Match</span>
          </div>

          <button
            className="details-btn"
            onClick={() => setShowDetails(true)}
          >
            View Details →
          </button>

        </div>

      </div>

      {showDetails && (

        <div className="opportunity-modal-overlay">

          <div className="opportunity-modal">

            <button
              className="modal-close"
              onClick={() => setShowDetails(false)}
            >
              ✕
            </button>

            <div className="modal-opportunity-icon">
              {opportunity.icon}
            </div>

            <span className="category-tag">
              {opportunity.category}
            </span>

            <h2>{opportunity.title}</h2>

            <p className="modal-organization">
              {opportunity.organization}
            </p>

            <div className="modal-info">

              <div>
                <span>📍</span>
                <strong>Location</strong>
                <p>{opportunity.location}</p>
              </div>

              <div>
                <span>⏳</span>
                <strong>Deadline</strong>
                <p>{opportunity.deadline}</p>
              </div>

              <div>
                <span>🎯</span>
                <strong>Match</strong>
                <p>{opportunity.match}%</p>
              </div>

            </div>

            <div className="modal-description">

              <h3>About this Opportunity</h3>

              <p>
                {opportunity.description}
              </p>

            </div>

            <div className="modal-actions">

              <a
                    href={opportunity.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn apply-btn"
                    >
                    Apply Now →
                    </a>

              <button
                className="secondary-btn"
                onClick={toggleSave}
              >
                {isSaved
                  ? "♥ Saved"
                  : "♡ Save Opportunity"}
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  )
}

export default OpportunityCard
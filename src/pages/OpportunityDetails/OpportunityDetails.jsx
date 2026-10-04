function OpportunityDetails({ opportunity }) {

  if (!opportunity) {
    return (
      <section className="details-section">
        <div className="details-container">
          <h2>Opportunity Not Found</h2>
          <p>
            The opportunity you are looking for is not available.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="details-section">

      <div className="details-container">

        <button
          className="back-btn"
          onClick={() => window.history.back()}
        >
          ← Back to Opportunities
        </button>

        <div className="details-card">

          <div className="details-top">

            <div className="details-icon">
              {opportunity.icon}
            </div>

            <div>
              <span className="category-tag">
                {opportunity.category}
              </span>

              <h1>{opportunity.title}</h1>

              <p className="organization">
                {opportunity.organization}
              </p>
            </div>

          </div>

          <div className="details-info">

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
              <p>{opportunity.match}% Match</p>
            </div>

          </div>

          <div className="details-description">

            <h2>About this Opportunity</h2>

            <p>
              {opportunity.description}
            </p>

          </div>

          <div className="details-actions">

            <button className="primary-btn">
              Apply Now →
            </button>

            <button className="save-details-btn">
              ♡ Save Opportunity
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default OpportunityDetails
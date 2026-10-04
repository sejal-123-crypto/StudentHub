import OpportunityCard from "../../components/OpportunityCard/OpportunityCard"
import opportunities from "../../data/opportunities"

function Opportunities() {
  return (
    <section className="opportunities-section" id="opportunities">

      <div className="section-heading">
        <div>
          <span className="section-label">EXPLORE</span>

          <h2>
            Opportunities waiting
            <span> for you.</span>
          </h2>

          <p>
            Discover opportunities that can help you learn,
            grow and build your career.
          </p>
        </div>

        <button className="view-all-btn">
          View All →
        </button>
      </div>

      <div className="opportunity-grid">

        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}

      </div>

    </section>
  )
}

export default Opportunities
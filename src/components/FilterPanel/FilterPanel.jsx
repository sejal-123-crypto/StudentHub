function FilterPanel({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
}) {
  return (
    <div className="filter-panel">

      <h3>Filter Opportunities</h3>

      <div className="filter-group">

        <label>Category</label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Internship">Internship</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Competition">Competition</option>
          <option value="Workshop">Workshop</option>
          <option value="Event">Event</option>
        </select>

      </div>

      <div className="filter-group">

        <label>Location</label>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Online">Online</option>
          <option value="Pune">Pune</option>
          <option value="India">India</option>
        </select>

      </div>

      <button
        className="clear-filter-btn"
        onClick={() => {
          setSelectedCategory("All")
          setSelectedLocation("All")
        }}
      >
        Clear Filters
      </button>

    </div>
  )
}

export default FilterPanel
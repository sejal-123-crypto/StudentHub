function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search scholarships, internships, hackathons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <button
          className="clear-search"
          onClick={() => setSearchTerm("")}
        >
          ✕
        </button>
      )}

    </div>
  )
}

export default SearchBar
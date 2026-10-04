import { useState } from "react"

function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState("")

  function handleSearch(e) {
    e.preventDefault()

    if (!searchText.trim()) return

    const searchSection = document.getElementById("opportunities")

    if (searchSection) {
      searchSection.scrollIntoView({
        behavior: "smooth",
      })
    }

    setShowSearch(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          <div className="logo-icon">S</div>

          <div className="logo-text">
            Student<span>Hub</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#foryou">For You</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">

          <button
            className="search-btn"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            ⌕
          </button>

          <a href="#profile" className="profile-btn">
            <span>◯</span>
            Profile
          </a>

        </div>

      </div>

      {showSearch && (
        <div className="navbar-search">
          <form onSubmit={handleSearch}>

            <span className="navbar-search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />

            <button type="submit">
              Search
            </button>

          </form>
        </div>
      )}

    </nav>
  )
}

export default Navbar
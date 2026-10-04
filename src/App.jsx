import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import SmartAlerts from "./components/SmartAlerts/SmartAlerts"

import Home from "./pages/Home/Home"
import Opportunities from "./pages/Opportunities/Opportunities"
import ForYou from "./pages/ForYou/ForYou"
import Profile from "./pages/Profile/Profile"
import Saved from "./pages/Saved/Saved"
import Resources from "./pages/Resources/Resources"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

import "./components/SmartAlerts/SmartAlerts.css"

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Home />

        <Opportunities />

        <ForYou />

        <Profile />

        <Saved />

        <Resources />

        <About />

        <Contact />

      </main>

      <Footer />

      {/* StudentHub Smart Alert System */}

      <SmartAlerts />

    </div>
  )
}

export default App
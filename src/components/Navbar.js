import React, {useState} from 'react'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-links">
            <li className="navbar-item slideInDown-1">
                <a href="/" className="navbar-link">A propos</a>
            </li>
            <li className="navbar-item slideInDown-2">
                <a href="/" className="navbar-link">Compétences</a>
            </li>
            <li className="navbar-item slideInDown-3">
                <a href="/" className="navbar-link">Portfolio</a>
            </li>
            <li className="navbar-item slideInDown-4">
                <a href="/" className="navbar-link">Contact</a>
            </li>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
            <span className="burger-bar"> </span>
        </button>
    </nav>
  )
}

export default Navbar

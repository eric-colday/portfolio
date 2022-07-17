import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <NavLink 
                to="/"
        >
            <img className="navbar-logo"  src="./media/logo-ericcoldaynoubissi.png" alt="logo de Eric"/>
        </NavLink>
        <ul className="navbar-links">
            <NavLink 
                to="/a-propos"
            >
                <li className="navbar-item slideInDown-1">
                    <span className="navbar-link">A propos</span>
                </li>
            </NavLink>
            <NavLink 
                to="/competences"
            >
                <li className="navbar-item slideInDown-2">
                    <span className="navbar-link">Compétences</span>
                </li>
            </NavLink>
            <NavLink to="/portfolio">
                <li className="navbar-item slideInDown-3">
                    <span className="navbar-link">Portfolio</span>
                </li>
            </NavLink>
            <NavLink to="/contact">
                <li className="navbar-item slideInDown-4">
                    <span className="navbar-link">Contact</span>
                </li>
            </NavLink>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
            <span className="burger-bar"> </span>
        </button>
    </nav>
  )
}

export default Navbar

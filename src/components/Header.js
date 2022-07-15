import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <div>
          <img className="logo" src="./media/logo-ericcoldaynoubissi.png" alt="logo de Eric" />
        </div>
      </NavLink>
      <nav >
        <ul className="navigation">
          <NavLink to="/a-propos" activeclassname="navActive">
            <li className="content">A propos</li>
          </NavLink>
          <NavLink to="/competences" activeclassname="navActive">
            <li className="content">Compétences</li>
          </NavLink>  
          <NavLink to="/portfolio" activeclassname="navActive">
            <li className="content">Portfolio</li>
          </NavLink> 
          <NavLink to="/contact" activeclassname="navActive">
            <li className="content">Contact</li>
          </NavLink> 
        </ul>
      </nav>
    </div>
  )
}

export default Header


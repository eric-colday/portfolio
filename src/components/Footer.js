import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerList">
        <span> © Copyright 2022, Eric Colday Noubissi</span>
        <ul className="footerListItems">
            <li>
                <a href="https://www.linkedin.com/in/ecnoubissi/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/eric-colday" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

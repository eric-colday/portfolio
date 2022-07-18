import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerList">
        <span> ericcoldaynoubissi - 2022</span>
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
            <li>
                <a href="https://twitter.com/EricColday" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="https://codepen.io/eric-colday-noubissi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-codepen"></i>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

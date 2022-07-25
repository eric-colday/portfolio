import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ContactForm = () => {

  return (
    <div className="contact">
      <div className="left">
        <img src="media/shake.svg" alt="" />
      </div>
      <div className="right">
        <div className="contactBox">
          <h2>Contactez-moi</h2>
          <ul className="ul">
              <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>3 rue Oberlin, <br /> 
                        67000 Strasbourg</span>
              </li>
              <li>
                  <i className="fas fa-mobile-alt"></i>
                  <CopyToClipboard text="0698342060">
                      <span 
                          className="clickInput"
                          onClick={() => {alert ('Téléphone copié!');}}>
                              06 98 34 20 60
                      </span>
                  </CopyToClipboard>
              </li>
              <li>
                  <i className="fas fa-envelope"></i>
                  <CopyToClipboard text="rcnoubissi@gmail.com">
                      <span 
                          className="clickInput"
                          onClick={() => {alert ('E-mail copié!');}}>
                              rcnoubissi@gmail.com
                      </span>
                  </CopyToClipboard>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

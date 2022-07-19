import React from 'react'

const Hobbies = () => {
  return (
    <div className="hobbies">
        <h3 className="progressbar-title">Intérêts</h3>
        <ul>
            <li className="hobby">
                <i className="fas fa-gamepad"></i> 
                <span>Gaming</span>
            </li>
            <li className="hobby">
                <i className="fas fa-music"></i>
                <span>Musique</span>
            </li>
            <li className="hobby">
                <i className="fas fa-marker"></i>
                <span>Dessin</span>
            </li>
            <li className="hobby">
                <i className="fas fa-plane"></i>
                <span>Voyage</span>
            </li>
        </ul>
    </div>
  )
}

export default Hobbies

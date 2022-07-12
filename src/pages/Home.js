import React from 'react'
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main className="container">
      <div className="box-container">
        <h2 className="text-style">Eric Colday Noubissi</h2>
        <p className="text-style-2">Développeur Web</p>
        <div className="btn-container">
          <a href="./media/cv-eric_colday-noubissi.pdf" target="_blank">
            <button className="btn"> 
              <span>Télécharger</span>
            </button>
          </a>
          <Link to="/a-propos">
            <button className="btn-2"> <span>A propos</span></button>
          </Link>
        </div>
      </div>
    </main>
  )
}

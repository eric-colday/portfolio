import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';


export default function NotFound() {
  return (
    <div>
      <header className="header">
        <Navbar/>
      </header>
      <main className="notFound404">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retouner à la page d'accueil</Link>
      </main>
    </div>
  )
}

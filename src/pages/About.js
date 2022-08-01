import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
// import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <div className="about">
          <img src="./media/nec.jpeg" alt="visuel de nec" className="img"/>
          <div className="exp-1">
            <h2>A propos</h2>
            <p className="about-text">
              Je suis Eric Colday Noubissi, développeur web. 
              Plus motivé pour développer constamment mes compétences et évoluer professionnellement. 
              Je suis confiant dans ma capacité à proposer des idées intéressantes pour la création des projets web inoubliables.
            </p>
            <h3>Expériences</h3>
            <h4>Front-end Dev ReactJS- Projet personnel</h4>
            <h4>2021 jusqu'à présent</h4>
            <p className="about-text-2">
              Contexte : Développement de la boutique "Nec-store" et de son admin dashboard pour permettre aux utilisateurs de se connecter et gérer leurs achats et transactions.
            </p>
            <p className="about-text-2">
              Réalisations :
              • Recueil des besoins
              • Développement du site E-commerce en ReactJS
              • Développement d’une API nodeJS
              • Développement d’un admin dashboard en ReactJS
            </p>
            <p className="about-text-2">
              Environnement technique : React JS, NodeJS, Express, MongoDB, Git, Postman.
            </p>
            <h4>Consultant Webmarketing - FreeLance</h4>
            <h4>2017 jusqu'à présent</h4>
            <p className="about-text-2">
              Création et refonte de sites Internet WordPress,
              <br />
              Mission SEO (Audit, recommandations et solutions SEO), Traffic management.
            </p>
            </div>
        </div>
      </main>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

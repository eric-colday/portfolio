import React from 'react'
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
            <h4>Consultant Web/Mobile - FreeLance</h4>
            <h4>2021 jusqu'à présent</h4>
            <p className="about-text-2">
              Création de l'interface utilisateur d'un site web ou d'une application web avec HTML5/CSS3 et ReactJS.
              <br />
              Gestion backend avec mongoDB, Express, NodeJS et PHP
            </p>
            <h4>Consultant Webmarketing - FreeLance</h4>
            <h4>2017 jusqu'à présent</h4>
            <p className="about-text-2">
              Création et refonte de sites Internet WordPress,
              <br />
              Mission SEO (Audit, recommandations et solutions SEO), Traffic management.
              <br />
              Publicité en ligne (création et gestion des comptes Google Ads, Facebook Ads et Bing Ads)
              <br />
              Gestion des réseaux sociaux
            </p>
            </div>
        </div>
      </main>
    </div>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import ProjectList from '../components/portfolio/ProjectList'

const Portfolio = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <div className="portfolio">
        <ProjectList />
      </div>
    </div>
  )
}

export default Portfolio

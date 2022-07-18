import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Langages from '../components/Langages'
import OthersSkills from '../components/OthersSkills'


const Skills = () => {
  return (
    <div>
      <header className="header">
        <Navbar/>
      </header>
      <main className="skills">
        <Langages/>
        <OthersSkills/>
      </main>
      <Footer />
    </div>
  )
}

export default Skills

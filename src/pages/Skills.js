import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Langages from '../components/Langages'
import OthersSkills from '../components/OthersSkills'
import Hobbies from '../components/Hobbies'


const Skills = () => {
  return (
    <div>
      <header className="header">
        <Navbar/>
      </header>
      <main className="skills">
        <Langages/>
        <div className="skills-2">
          <OthersSkills/>
          <Hobbies/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Skills

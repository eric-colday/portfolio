import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default Contact

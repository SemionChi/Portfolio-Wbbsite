import React from 'react'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Exp from './components/experience/Exp'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import Nav from './components/nav/Nav'
import Port from './components/portfolio/Port'
import Services from './components/services/Services'
import Test from './components/Testimonials/Test'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Exp/>
    <Port/>
    <Services/>
    <Test/>
    <Contacts/>
    <Footer/>
    </>
   
  )
}

export default App
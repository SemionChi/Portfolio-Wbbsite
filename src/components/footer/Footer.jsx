import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import LOGO from '../../assets/bettercallsemion-logo1.png'


const Footer = () => {
  return (
    <section id='footer'>
    <footer>
    <a id="logo"  href="#"><img src={LOGO} alt="" />   </a>
      <a href="#" className='footer__logo' > Semion T.</a>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/semiont/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SemionChi" target="_blank"><BsGithub/></a>
    </div>
    <br />
      <ul className='permalinks'>
      
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      

   

    </footer>
    </section>
  )
}

export default Footer
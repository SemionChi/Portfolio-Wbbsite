import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pngfind.com-puppy-png-506015.png'
import LOGO from '../../assets/bettercallsemion-logo1.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    
    <header>
      
      <div className='container header__container'>
        
        <h5><a id="logo" href="#"><img src={LOGO} alt="" /> </a>Hello I`m</h5>
        
        <h1>Semion T. </h1>
        
        <h5 className="text-light">Software Developer</h5>
        
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>

      </div>
      
      
    </header>
    
  )
}

export default Header
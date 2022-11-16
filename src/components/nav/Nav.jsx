import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {ImDisplay} from 'react-icons/im'
import {AiOutlineContacts} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}  ><AiOutlineUser/></a>
      <a href="#exp" onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''}><ImDisplay/></a>
      <a href="#port" onClick={() => setActiveNav('#port')} className={activeNav === '#port' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav
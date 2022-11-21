import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { useState } from 'react'

const About = () => {
  const[activeTalk,setActiveTalk]=useState('#')
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      
      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>


      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h2>Experience</h2>
            <small>0.5 Years Experience</small>

          </article>
          
          

          <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h2>Projects</h2>
            <small>1+ Completed</small>

          </article>
        </div>

        <p>
        Starting as a fresh graduate never has been as difficult as it is right now, knowing this, I knew I`m going to be required to do extra effort to prove my capabilities, I had to stay consistent and code everyday while working full time in construction, so as warren buffet said, "Buy the dip", i know that these hard times will produce the most capable and dedicated engineers.
        </p>
        <div className="menu">
          <div className='toggle'>Lets talk</div>

            <li >
            <a href="https://www.linkedin.com/in/semiont/" onClick={() => setActiveTalk('#')} className={activeTalk === '#' ? 'active' : ''} target="_blank"><BsLinkedin/></a>
    
            </li>

            <li >
            <a href="https://github.com/SemionChi" target="_blank"><BsGithub/></a>
            </li>
            

          


        </div>

    
        

        </div>
        
        
        

      </div>
      
      
    </section>
  )
}

export default About
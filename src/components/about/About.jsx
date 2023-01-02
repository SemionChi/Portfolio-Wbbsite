import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi'
import {FiX} from 'react-icons/fi'

import { useState } from 'react'


const About = () => {
  const handleClick=()=>{
    document.getElementsByClassName("share-menu")[0].classList.toggle("active");
  }
  
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
            <small>0 Years Experience</small>

          </article>
          
          

          <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h2>Projects</h2>
            <small>5+ Completed</small>

          </article>
        </div>

        <p>
        Starting as a fresh graduate never has been as difficult as it is right now, I knew it`s going to take extra effort to prove my capabilities and demonstrate value to the organization, I code everyday(solving algorithms and working on projects) while working full time in video production, I know that these hard times will makeme as capable and dedicated engineer as possible. Can`t wait to be part of a professional team, developing an interesting product and just surround myself by it, and in return you will receive a stubborn super hard working, friendly and loyal employee that is IN it for the long run.
        </p>
           <div class="center">
          
          <div class="share-menu">
            <div class="share-btn" onClick={handleClick}>
              <i class="fa fa-share-alt">Lets talk</i>
              <i class="fa fa-close"><FiX/></i>
            </div>
            <div class="social-btn">
            
              <i class="fa fa-twitter"><a href="https://www.linkedin.com/in/semiont/" target="_blank"><BsLinkedin/></a></i>
              
            </div>
            <div class="social-btn">
              <i class="fa fa-instagram"><a href = "mailto: semionchi@gmail.com"><BiMailSend/></a></i>
            </div>
            
          </div>
        </div>


    
        

        </div>
        
        
     
      </div>
      
      
    </section>
  )
}

export default About
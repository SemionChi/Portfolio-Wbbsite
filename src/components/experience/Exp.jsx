import React from 'react'
import{BsFillPatchCheckFill} from 'react-icons/bs'
import './Exp.css'
const Exp = () => {
  
  return (
    <section id='exp'> 
      
      <h2>Skills</h2>
        <div className="container experience__container">
          <div className="experience__fe">
            <h3>Development & Test</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML, CSS, JS</h4>
                  <small className='text-light'>Hands on experience</small>
                </div>
                
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python/Bash scripting</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python Selenium</h4>
                  <small className='text-light'>Hands on experience</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Windows/Linux-centos/ubuntu</h4>
                  <small className='text-light'>Experienced</small>    
                </div>
                </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Basic Familiarity</small>
                </div>
              </article>
            </div>

          </div>


       
          <div className="experience__devops">
          <h3>DevOps</h3>
            <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Networking</h4>
                  <small className='text-light'>Experienced - CCNA Certificate</small>  
                </div>
              </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>Experienced</small>  
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Ansible</h4>
                  <small className='text-light'>Basic Familiarity</small>  
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Jenkins</h4>
                  <small className='text-light'>Hands on experience</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>K8`s</h4>
                  <small className='text-light'>Basic Familiarity</small>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CI/CD Methodologies</h4>
                  
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Docker</h4>
                  <small className='text-light'>Basic Familiarity</small>
                  
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Hands on experience</small>
                </div>
              </article>

              
            </div>
            
          </div>


        </div>
        
      
    </section>
  )
}

export default Exp
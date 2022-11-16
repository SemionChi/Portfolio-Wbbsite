import React from 'react'
import './Exp.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'
const Exp = () => {
  return (
    <section id='exp'> 
      
      <h2>Skills</h2>
        <div className="container experience__container">
          <div className="experience__fe">
            <h2>Frontend Development</h2>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
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
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>

          </div>


          <div className="experience__be">
          <h2>Backend Development</h2>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>  
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>  
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            
            </div>
            
          </div>

        </div>
        
      
    </section>
  )
}

export default Exp
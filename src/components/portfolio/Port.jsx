import React from 'react'
import './Port.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Port = () => {
  return (
    <section id='port'> 
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="img1" />
        </div>
        <h3>This is a portfolio item title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab tenetur voluptatibus hic adipisci fugit praesentium accusantium nostrum sit, vero sapiente odit ullam atque incidunt doloribus consectetur! Quasi, amet non.</p>
        <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>git hub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>live demo</a>


        </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
        </div>
        <h3>This is a portfolio item title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab tenetur voluptatibus hic adipisci fugit praesentium accusantium nostrum sit, vero sapiente odit ullam atque incidunt doloribus consectetur! Quasi, amet non.</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>git hub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>live demo</a>


        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="img1" />
        </div>
        <h3>This is a portfolio item title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab tenetur voluptatibus hic adipisci fugit praesentium accusantium nostrum sit, vero sapiente odit ullam atque incidunt doloribus consectetur! Quasi, amet non.</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>git hub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>live demo</a>


        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG4} alt="img1" />
        </div>
        <h3>This is a portfolio item title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab tenetur voluptatibus hic adipisci fugit praesentium accusantium nostrum sit, vero sapiente odit ullam atque incidunt doloribus consectetur! Quasi, amet non.</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>git hub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>live demo</a>


        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG5} alt="img1" />
        </div>
        <h3>This is a portfolio item title</h3>
        <p>dipisci fugit praesentium accusantium nostrum sit, vero sapiente odit ullam atque incidunt doloribus consectetur! Quasi, amet non.</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>git hub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>live demo</a>


        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG6} alt="img1" />
        </div>
        <h3>This is a portfolio item title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab tenetur voluptatibus hic adipisci fugit praesentium accusantium nostrum sit, vero sapiente odit ullam atque incidunt doloribus consectetur! Quasi, amet non.</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>git hub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>live demo</a>


        </div>
      </article>

      


      
    </div>
    
    </section>
  )
}

export default Port
import React from 'react'
import './Port.css'
import IMG1 from '../../assets/Webclient.gif'
import IMG2 from '../../assets/Web-Crawlers.png'
import IMG3 from '../../assets/vprofile-architecture.png'
import IMG4 from '../../assets/1_cG6U1qstYDijh9bPL42e-Q.webp'



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
        <h3>Real Estate Price Prediction Application</h3>
        <p>Created a web-app designed to predict real-estate prices based on trades history in the area, the data records were collected using a web-crawler I created because there was no dedicated API, the prices get evaluated using liner and polynomial regression. Web-app built using Typescript, HTML, CSS.</p>
        <div className="portfolio__item-cta">
            <a href="https://github.com/SemionChi/RealEstateApplication" className='btn' target='_blank'>Git Repo</a>
            


        </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="img1" />
        </div>
        <h3>Web Crawler</h3>
        <p>A web crawler I made in order to have an as accurate as possible real estate data about a particular city. There is no available credible real-estate API so crawling a web form was required.</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com/SemionChi/nadlan_crawler" className='btn' target='_blank'>Git Repo</a>
            <a href="https://youtu.be/ztYr8PwZJ_4" className='btn btn-primary' target='_blank'>Video Demo</a>


        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="img1" />
        </div>
        <h3>Demo Pipeline Setup</h3>
        <p>Set up a continuous integration pipeline using Jenkins server, GIT & GITHUB for version control, build java code using Maven build tool, Slack for notifications, Nexus Sonatype to store artifact and download Maven dependancy`s, SonarQube for code analysis, AWS EC2 for compute resources</p>

        <div className="portfolio__item-cta">
            <a href="https://github.com/SemionChi/vproject-jenkins" className='btn' target='_blank'>Git Repo</a>
            <a href="https://youtu.be/cn5KFwuWhYs" className='btn btn-primary' target='_blank'>Video Demo</a>


        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG4} alt="img1" />
        </div>
        <h3>Academic ML Project</h3>
        <p>Data Preprocessing, Unsupervised learning: – K-means, clustering methods – DBSCAN, Mean Shift, Hierarchical clustering, Supervised learning: regression analysis-linear regression /-regularized regression models, Classification: logistic regression, KNN, SVM, Naïve bayes.  </p>

        <div className="portfolio__item-cta">
            <a href="https://github.com/SemionChi/Data-Science-School-project" className='btn' target='_blank'>Git Repo</a>


        </div>
      </article>

      

      


      
    </div>
    
    </section>
  )
}

export default Port
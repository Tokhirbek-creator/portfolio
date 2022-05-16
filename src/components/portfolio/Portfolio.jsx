import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'This is a portfolio item',
      github: 'https://github.com/',
    },
    {
      id: 1,
      image: IMG2,
      title: 'This is a portfolio item',
      github: 'https://github.com/',
    },
    {
      id: 1,
      image: IMG3,
      title: 'This is a portfolio item',
      github: 'https://github.com/',
    },
    {
      id: 1,
      image: IMG4,
      title: 'This is a portfolio item',
      github: 'https://github.com/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
            data.map(({
              id, image, title, github,
            }) => (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="place" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  {/* <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a> - (This demo button. When project be deployed) */}
                </div>
              </article>
            ))
          }
      </div>
    </section>
  );
}

export default Portfolio;

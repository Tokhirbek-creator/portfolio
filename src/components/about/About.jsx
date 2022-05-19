import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineProject } from 'react-icons/ai';
import ME from '../../assets/me-about.jpg';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            I am engaged in
            {' '}
            <strong>frontend</strong>
            {' '}
            and
            {' '}
            <strong>backend</strong>
            {' '}
            development for more than a year.
            I have experience in implementing various projects, which you can see at:
            {' '}
            <a href="https://github.com/Tokhirbek-creator">github.com/Tokhirbek-creator</a>
            <br />
            <br />
            I strive to develop complex services, create visually appealing projects,
            translate static content into interactive web applications,
            as well as deal with the software and administrative part of the web application, the system's internal content,
            server technologies, database, architecture, software logic.
            <br />
            <br />
            About life: I like cats, math, traveling, sunset, etc.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;

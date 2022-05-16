import React from 'react';
import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { RiContactsBook2Fill } from 'react-icons/ri';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">MARK</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/karamattov">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/karamattov">
          <BsTwitter />
        </a>
        <a href="https://vk.com/karamattov">
          <RiContactsBook2Fill />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MARK Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

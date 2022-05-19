import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTelegram } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/karamattov" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Tokhirbek-creator" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://t.me/karamattov" target="_blank" rel="noreferrer"><FaTelegram /></a>
    </div>
  );
}

export default HeaderSocials;

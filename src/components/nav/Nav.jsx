import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

function Nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><FiUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  );
}

export default Nav;

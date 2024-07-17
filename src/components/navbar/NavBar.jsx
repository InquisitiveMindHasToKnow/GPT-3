import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg';


/**
 * classNames follow CSS convention called BEM (Block Element Modifier)
 * 
 */
const NavBar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar_links_logo'>
              <img src={logo}/>
          </div>
      </div> 
    </div>
  )
}

export default NavBar
import React from 'react'
import logo from "../../images/logoHeader.png"
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <div className="header__menu">
      <div className="container">
        <div className='header__menu-inner'>
          <a className="header__menu-logo" href="#!">
            <img src={logo} alt="" />
          </a>
          <div className='header__menu-links'>
            <ul className={burgerMenu ? "header__menu-nav active" : "header__menu-nav"}>
              <div className='header__menu-close' onClick={() => setBurgerMenu(false)}><FontAwesomeIcon icon={faXmark} /></div>
              <li><a href="#!" className='header__menu-link'>О компании</a></li>
              <li><a href="#services" onClick={() => setBurgerMenu(false)} className='header__menu-link'>Наши услуги</a></li>
              <li><a href="#transport" onClick={() => setBurgerMenu(false)} className='header__menu-link'>Транспорт</a></li>
            </ul>
            <div><a href="#!" className='header__menu-link header__menu-phone'>+998 93 505 97 97</a></div>
          </div>
          <div onClick={() => setBurgerMenu(true)} className="header__menu-burger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
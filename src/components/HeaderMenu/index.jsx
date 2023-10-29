import React from 'react'
import logo from "../../images/logo.svg"
import "./Header.scss"

const HeaderMenu = () => {
  return (
    <div className="header__menu">
      <div className="container">
        <div className='header__menu-inner'>
          <a className="header__menu-logo" href="#!">
            <img src={logo} alt="" />
          </a>
          <ul className="header__menu-nav">
            <li><a href="#!" className='header__menu-link'>О компании</a></li>
            <li><a href="#!" className='header__menu-link'>Наши услуги</a></li>
            <li><a href="#!" className='header__menu-link'>Транспорт</a></li>
            <li><a href="#!" className='header__menu-link header__menu-phone'>+998 93 505 97 97</a></li>
          </ul>
          <div className="header__menu-burger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
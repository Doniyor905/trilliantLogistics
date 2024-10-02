import logo from '../../images/logoHeader.png';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeaderMenu = ({ setBurgerMenu, burgerMenu, dataPartner }) => {
  return (
    <div initial="hidden" whileInView="visible" className="header__menu">
      <div className="container">
        <div className="header__menu-inner">
          <a className="header__menu-logo" href="#!">
            <img src={logo} alt="" />
          </a>
          <div className="header__menu-links">
            <ul className={burgerMenu === true ? 'header__menu-nav active' : 'header__menu-nav'}>
              <div className="header__menu-close" onClick={() => setBurgerMenu(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </div>

              {dataPartner.map((item, i) => (
                <li key={i}>
                  <a
                    onClick={() => setBurgerMenu(false)}
                    href={item.link}
                    className="header__menu-link">
                    {item.text}
                  </a>
                </li>
              ))}
              {/* <li><Link to="/#company" className='header__menu-link'>{text}</Link></li>
              <li><Link to="#services" onClick={() => setBurgerMenu(false)} className='header__menu-link'>Наши услуги</Link></li>
              <li><Link to="/partners " onClick={() => setBurgerMenu(false)} className='header__menu-link'>Наши партнеры</Link></li>
              <li><Link to="/#transport" onClick={() => setBurgerMenu(false)} className='header__menu-link'>Транспорт</Link></li> */}
            </ul>
            <a href="tel:+998935059797" className="header__menu-link header__menu-phone">
              +998 93 505 97 97
            </a>
          </div>
          <div className="header__rejim">
            <p className="header__rejim-title">Режим работы</p>
            <p className="header__rejim-time">9:00 - 18:00</p>
            <p className="header__rejim-hol">Вскресения выходной</p>
          </div>
          <div onClick={() => setBurgerMenu(true)} className="header__menu-burger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;

import React from 'react'
import logo from "../../images/footer/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import "./Footer.scss"

const Footer = ({setModal}) => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__left">
                        <div className="footer__left-img">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer__left-social">
                            <a className='footer__left-links' href="tel:+998935059797">
                                <div>
                                    <FontAwesomeIcon className='footer__left-icon' icon={faPhone} />
                                </div>
                                <p>+998 93 505 97 97</p>
                            </a>
                            <a className='footer__left-links' href="#!">
                                <div>
                                    <FontAwesomeIcon className='footer__left-icon' icon={faFacebook} />
                                </div>
                                <p>trilliantlogistics.uz</p>
                            </a>
                            <a className='footer__left-links' href="#!">
                                <div>
                                    <FontAwesomeIcon className='footer__left-icon' icon={faInstagram} />
                                </div>
                                <p>Trilliantlogistics.uz</p>
                            </a>
                            <a className='footer__left-links' href="mailto:logistic.triliant@mail.ru">
                                <div>
                                    <FontAwesomeIcon className='footer__left-icon' icon={faEnvelope} />
                                </div>
                                <p>logistic.triliant@mail.ru</p>
                            </a>
                        </div>
                    </div>

                    <div className="footer__right">
                        <ul className="footer__right-nav">
                            <li><a href="#!">О компании</a></li>
                            <li><a href="#!">Наши услуги</a></li>
                            <li><a href="#!">Транспорт</a></li>
                        </ul>
                        <button onClick={() => setModal(true)} href="#!" className='footer__right-btn'>СВЯЗАТЬСЯ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
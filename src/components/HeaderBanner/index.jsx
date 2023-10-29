import React from 'react'
import headerTruck from "../../images/header/headerTruck.png"

import "./HeaderBanner.scss"

const HeaderBanner = ({setModal, modal}) => {

    return (
        <div className='header__banner'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <h1 className='header__left-title'>Мы занимаемся логистикой,
                            все дело в доставке посылок
                            вовремя в любое место</h1>
                        <p className='header__left-text'>000 "trilliant logistics» - транспортно-экспедиторская компания предлагает
                            вам комплекс услуг по организации авто, железнодорожных и авиа
                            грузоперевозок из узбекистана в страны ближнего востока, китаи,
                            оаэ, пакистан, индию, вьетнам, малазию, сингапур и др.
                            и обратно, из стран ближнего востока в узбекистан.</p>
                        <button onClick={() => setModal(true)} className='header__left-btn'>Связаться</button>
                    </div>
                    <div className="header__right">
                        <div className='header__right-img'>
                            <img src={headerTruck} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner
import React from 'react'
import "./Company.scss"

import bg from "../../images/company/company.png"

const Company = () => {
    return (
        <div className='company'>
            <div className="container">
                <div className="company__inner">
                    <div className="company__left">
                        <h2 className="company__left-title">
                            Познакомьтесь с нашей
                            компанией
                        </h2>
                        <h3 className='company__left-subtitle'>Мы работаем для развития вашего бизнеса</h3>
                        <p className='company__left-text'>
                            000 "TRILLIANT LOGISTICS» - ТРАНСПОРТНО-ЭКСПЕДИТОРСКАЯ
                            КОМПАНИЯ ПРЕДЛАГАЕТ ВАМ КОМПЛЕКС УСЛУГ ПО ОРГАНИЗАЦИИ
                            АВТО, ЖЕЛЕЗНОДОРОЖНЫХ И АВИА ГРУЗОПЕРЕВОЗОК ИЗ
                            УЗБЕКИСТАНА В СТРАНЫ БЛИЖНЕГО ВОСТОКА, КИТАИ,
                            ОАЭ, ПАКИСТАН, ИНДИЮ, ВЬЕТНАМ, МАЛАЗИЮ,
                            СИНГАПУР И ДР. И ОБРАТНО, ИЗ СТРАН БЛИЖНЕГО
                            ВОСТОКА В УЗБЕКИСТАН.</p>
                    </div>
                    <div className="company__right">
                        <img src={bg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Company
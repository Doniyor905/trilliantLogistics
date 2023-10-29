import React from 'react'
import headerTruck from "../../images/header/headerTruck.png"

import "./HeaderBanner.scss"
import { motion } from 'framer-motion'

const HeaderBanner = ({ setModal, modal }) => {

    const TeaxtAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x:0,
            opacity:1,
            transition: {delay:custom * 0.2},
        })
    }

    const ImagesAnimation = {
        hidden: {
            scale: 0,
        },
        visible: custom => ({
            scale: 1,
            transition: {delay:custom * 0.5},
        })
    }

    return (
        <motion.div
        viewport={{ once: true}}
        initial="hidden"
        whileInView="visible"
        className='header__banner'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <motion.h1 custom={1} variants={TeaxtAnimation} className='header__left-title'>Мы занимаемся логистикой,
                            все дело в доставке посылок
                            вовремя в любое место</motion.h1>
                        <motion.p custom={2} variants={TeaxtAnimation} className='header__left-text'>000 "trilliant logistics» - транспортно-экспедиторская компания предлагает
                            вам комплекс услуг по организации авто, железнодорожных и авиа
                            грузоперевозок из узбекистана в страны ближнего востока, китаи,
                            оаэ, пакистан, индию, вьетнам, малазию, сингапур и др.
                            и обратно, из стран ближнего востока в узбекистан.</motion.p>
                        <motion.button variants={TeaxtAnimation} custom={3} onClick={() => setModal(true)} className='header__left-btn'>Связаться</motion.button>
                    </div>
                    <div className="header__right">
                        <motion.div custom={2} variants={ImagesAnimation} className='header__right-img'>
                            <img src={headerTruck} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeaderBanner
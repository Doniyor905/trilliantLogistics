import React from 'react'
import "./Advantages.scss"
import icon from "../../images/advantages/icon.png"
import icon2 from "../../images/advantages/icon_2.png"
import icon3 from "../../images/advantages/icon_3.png"
import icon4 from "../../images/advantages/icon_4.png"

import counters from "../../images/advantages/counters.png"
import counters2 from "../../images/advantages/counters_2.png"
import counters3 from "../../images/advantages/counters_3.png"
import counters4 from "../../images/advantages/counters_4.png"
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from "react-countup";
import { motion } from 'framer-motion'


const Advantages = () => {
    const [counterOn, setCounterOn] = React.useState(false);
    const TitleAnimation = {
        hidden: {
            scale: 0,
        },
        visible: custom => ({
            scale: 1,
            transition: {delay:custom * 0.5},
        })
    }

    const ItemAnimationLeft = {
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
    const ItemAnimationRight = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x:0,
            opacity:1,
            transition: {delay:custom * 0.2},
        })
    }
    const ItemCountAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y:0,
            opacity:1,
            transition: {delay:custom * 0.2},
        })
    }
    const ItemAnimationCentre = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: custom => ({
            scale:1,
            opacity:1,
            transition: {delay:custom * 0.2},
        })
    }
    return (
        <motion.div
            viewport={{amount:0.5, once: true }}
            initial="hidden"
            whileInView="visible"
            className='advantages'>
            <div className="container">
                <motion.h2 variants={TitleAnimation} className="advantages__title">
                    Наши преимущества
                </motion.h2>
                <div className="advantages__inner">
                    <motion.div variants={ItemAnimationLeft} custom={1} className="advantages__item">
                        <div className='advantages__item-img'>
                            <img src={icon} alt="" />
                        </div>
                        <p className='advantages__item-text'>
                            Надежность
                        </p>
                    </motion.div>

                    <motion.div variants={ItemAnimationCentre} custom={2} className="advantages__item">
                        <div className='advantages__item-img'>
                            <img src={icon2} alt="" />
                        </div>
                        <p className='advantages__item-text'>
                            Честность
                        </p>
                    </motion.div>

                    <motion.div variants={ItemAnimationCentre} custom={2} className="advantages__item">
                        <div className='advantages__item-img'>
                            <img src={icon3} alt="" />
                        </div>
                        <p className='advantages__item-text'>
                            Xрабрость
                        </p>
                    </motion.div>

                    <motion.div variants={ItemAnimationRight} custom={1} className="advantages__item">
                        <div className='advantages__item-img'>
                            <img src={icon4} alt="" />
                        </div>
                        <p className='advantages__item-text'>
                            Упорство
                        </p>
                    </motion.div>
                </div>
                <motion.div variants={ItemCountAnimation} custom={3} className="counters">
                    <div className="counters__inner">
                        <div className="counters__item">
                            <div className='counters__item-img'>
                                <img src={counters} alt="" />
                            </div>
                            <div className="counters__item-numbres">
                                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                    <h3 className='counters__item-number'>
                                        {counterOn && <CountUp duration={10} end={100} />}
                                        +
                                    </h3>
                                </ScrollTrigger>
                                <p className='counters__item-text'>Завершенные
                                    проекты</p>
                            </div>
                        </div>
                        <div className="counters__item">
                            <div className='counters__item-img'>
                                <img src={counters2} alt="" />
                            </div>
                            <div className="counters__item-numbres">
                                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                    <h3 className='counters__item-number'>
                                        {counterOn && <CountUp duration={10} end={100} />}
                                        +
                                    </h3>
                                </ScrollTrigger>
                                <p className='counters__item-text'>Клиенты по
                                    всему миру</p>
                            </div>
                        </div>
                        <div className="counters__item">
                            <div className='counters__item-img'>
                                <img src={counters3} alt="" />
                            </div>
                            <div className="counters__item-numbres">
                                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                    <h3 className='counters__item-number'>
                                        {counterOn && <CountUp duration={10} end={100} />}
                                        +
                                    </h3>
                                </ScrollTrigger>
                                <p className='counters__item-text'>Принадлежащие
                                    транспортные
                                    средства</p>
                            </div>
                        </div>
                        <div className="counters__item">
                            <div className='counters__item-img'>
                                <img src={counters4} alt="" />
                            </div>
                            <div className="counters__item-numbres">
                                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                                    <h3 className='counters__item-number'>
                                        {counterOn && <CountUp duration={10} end={100} />}
                                        +
                                    </h3>
                                </ScrollTrigger>
                                <p className='counters__item-text'>Люди в команде</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Advantages
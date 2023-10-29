import React from 'react'
import "./Services.scss"
import { motion } from 'framer-motion'

const Services = () => {

    const AnimateItemLeft = {
        hidden: {
            x:-100,
            opacity:0,
        },
        visible: custom => ({
            x:0,
            opacity:1,
            transition: {delay:custom * 0.5},
        })
    }
    const AnimateItemRight = {
        hidden: {
            x:100,
            opacity:0,
        },
        visible: custom => ({
            x:0,
            opacity:1,
            transition: {delay:custom * 0.5},
        })
    }

    const TitleAnimation = {
        hidden: {
            scale:0,
            opacity:0,
        },
        visible: custom => ({
            scale:1,
            opacity:1,
            transition: {delay:custom * 0.5},
        })
    }
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.2, once: true}}
            className='services' id="services">
            <div className="container">
                <motion.h2 variants={TitleAnimation} className="services__title">
                    Наши услуги
                </motion.h2>
                <div className="services__inner">
                    <motion.div  variants={AnimateItemLeft} custom={1} className="services__item multi">
                        <h3 className="services__item-title">
                            Мультимодальные
                            грузоперевозки
                        </h3>
                        <p className="services__item-text">
                            Это транспортировка грузов по одному
                            договору, но выполненная, по меньшей
                            мере, двумя видами транспорта;
                        </p>
                    </motion.div>
                    <motion.div variants={AnimateItemRight} custom={2} className="services__item avia">
                        <h3 className="services__item-title">
                            авиаперевозки
                        </h3>
                        <p className="services__item-text">
                            Способ транспортировки грузов и
                            перевозки пассажиров при помощи
                            воздушных судов.
                        </p>
                    </motion.div>
                    <motion.div variants={AnimateItemLeft} custom={1} className="services__item auto">
                        <h3 className="services__item-title">
                            Автоперевозки
                        </h3>
                        <p className="services__item-text">
                            Это перевозки грузов и пассажиров
                            сухопутным транспортом по
                            безрельсовым путям.
                        </p>
                    </motion.div>
                    <motion.div variants={AnimateItemRight} custom={1} className="services__item tren">
                        <h3 className="services__item-title">
                            Железнодорожные
                            перевозки
                        </h3>
                        <p className="services__item-text">
                            Вид услуги, оказываемой транспортными
                            компаниями, которая подразумевает
                            перевозку грузов при помощи
                            подвижного состава по железным дорогам.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Services
import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'


const About = () => {

    const AnimateItemLeft = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.5 },
        })
    }

    
    const AnimateItemRight = {
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
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className='about'>
            <div className="container">
                <div className="about__inner">
                    <motion.div variants={AnimateItemLeft} className="about__left">
                        <h3 className="about__left-title">
                            Мы даем гарантию в срок и
                            держим свое слово.
                        </h3>
                        <div className="about__left-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing
                        </div>
                        <h3 className="about__left-subtitle">
                            B2B целевая аудитория:
                        </h3>
                        <div className="about__left-subtitle-text">
                            Производители, кторым нужнапомощь в экспорте их товаров
                            в страны ближнего востока или в импорте из стран ближнего
                            востока в узбекистан.
                        </div>
                    </motion.div>
                    <motion.div variants={AnimateItemRight} custom={2} className="about__right">
                        <form className="about__form">
                            <h3 className='about__form-title'>Связаться с нами</h3>
                            <label className='about__form-input'>
                                <p>Имя</p>
                                <input type="text" />
                            </label>
                            <label className='about__form-input'>
                                <p>Телефон</p>
                                <input type="text" />
                            </label>
                            <label className='about__form-input'>
                                <p>Адрес электронной почты</p>
                                <input type="text" />
                            </label>
                            <button className='about__form-button'>Отправить</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About
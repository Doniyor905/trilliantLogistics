import "./Company.scss"
import { motion } from 'framer-motion'

import bg from "../../images/company/company.png"

const Company = () => {
    const ItemAnimationLeft = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    }
    const ItemAnimationRight = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    }

    return (
        <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className='company'
           >
            <div className="container">
                <div className="company__inner">
                    <motion.div variants={ItemAnimationLeft} custom={1} className="company__left">
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
                    </motion.div>
                    <motion.div variants={ItemAnimationRight} custom={2} className="company__right">
                        <img src={bg} alt="" />
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default Company
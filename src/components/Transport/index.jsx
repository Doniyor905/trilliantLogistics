import React from 'react'
import "./Transport.scss"
import { motion } from 'framer-motion'


import icon from "../../images/transport/icon.png";
import icon2 from "../../images/transport/icon_2.png";
import icon3 from "../../images/transport/icon_3.png";

const Transport = () => {
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
    const ItemAnimationCentre = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: custom => ({
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    }
    const ItemAnimationRight = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: custom => ({
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    }
    const TitleAnimation = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: custom => ({
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    }
    return (
        <motion.div
            viewport={{amount:0.2, once: true }}
            initial="hidden"
            whileInView="visible"
            className='transport' id='transport'>
            <div className="container">
                <motion.div variants={TitleAnimation} className='transport__title'>
                    <h2>
                        объединенный транспорт
                    </h2>
                    <p>Мы поддерживаем транспортировку на том же уровне, что и логистику, с круглосуточной
                        диспетчерской службой, гарантией своевременности и командой, которая заботится о вашем грузе так же, как и вы.
                        Мы не просто верим в обслуживание клиентов, мы верим в ПРЕВОСХОДСТВО клиентов.</p>
                </motion.div>

                <div className="transport__inner">
                    <motion.div variants={ItemAnimationLeft} custom={1} className="transport__item">
                        <div className='transport__item-icon'>
                            <img src={icon} alt="" />
                        </div>
                        <h3 className='transport__item-title'>Ускоренная / HVHR</h3>
                        <p className='transport__item-text'>
                            Мы знаем, что безопасность, надежность и
                            прозрачность являются главным приоритетом
                            для наших клиентов. Наша команда
                            ускоренной службы специализируется на
                            срочных решениях и ускоренной доставке.
                            Мы можем доставить ваши товары быстро и
                            эффективно, наши водители принимают
                            строгие меры безопасности при перевозке
                            дорогостоящих грузов, а также отслеживают
                            их в режиме реального времени Каждый
                            ускоренный груз обрабатывается командой
                            водителей и диспетчеров, которые были
                            тщательно отобраны для обеспечения
                            первоклассного обслуживания, которого
                            заслуживает ваш груз.</p>
                    </motion.div>
                    <motion.div variants={ItemAnimationCentre} custom={2} className="transport__item">
                        <div className='transport__item-icon'>
                            <img src={icon2} alt="" />
                        </div>
                        <h3 className='transport__item-title'>Ускоренная / HVHR</h3>
                        <p className='transport__item-text'>
                            Наш рефрижераторный парк способен
                            перевозить все, от фармацевтических
                            препаратов до производства. Благодаря новому
                            оборудованию, передовым технологиям и
                            лучшим водителям в стране мы
                            фокусируемся на потребностях наших клиентов.
                            Наша команда и технологии — это то, что
                            отличает нас от любого другого поставщика
                            услуг в стране. У нас есть своевременная
                            гарантия, 250 тысяч грузов,
                            страховка от поломки рефрижератора и
                            отслеживание каждой поставки в реальном
                            времени. В случае поломки мы восстановим
                            ваш груз и вернем его в дорогу в течение
                            4 часов без каких-либо затрат с вашей стороны.
                            Мы очень серьезно относимся к нашему
                            сервису и не остановимся ни перед чем, чтобы
                            ваш груз был БЕЗОПАСНЫМ, НАДЕЖНЫМ И
                            СВОЕВРЕМЕННЫМ.</p>
                    </motion.div>
                    <motion.div variants={ItemAnimationRight} custom={1} className="transport__item">
                        <div className='transport__item-icon'>
                            <img src={icon3} alt="" />
                        </div>
                        <h3 className='transport__item-title'>Ускоренная / HVHR</h3>
                        <p className='transport__item-text'>
                            Мы в «Юнайтед» придерживаемся высоких
                            стандартов. Мы не верим в «достаточно
                            хорошо», наша команда и гонщики
                            стремятся быть лучшими в своем деле.
                            У нас напряженный
                            процесс найма, который фокусируется
                            на найме людей с позитивным
                            настроем, непреклонным
                            подходом и личной стойкостью,
                            позволяющей быть настоящими
                            профессионалами в той роли,
                            которую они играют в «Юнайтед».</p>
                    </motion.div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987132212!2d69.11455647780456!3d41.282737946304906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2str!4v1698516451639!5m2!1sru!2str" loading="lazy"></iframe>
            </div>
        </motion.div>
    )
}

export default Transport
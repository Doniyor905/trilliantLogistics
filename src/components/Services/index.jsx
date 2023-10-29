import React from 'react'
import "./Services.scss"

const Services = () => {
    return (
        <div className='services' id="services">
            <div className="container">
                <h2 className="services__title">
                    Наши услуги
                </h2>
                <div className="services__inner">
                    <div className="services__item multi">
                        <h3 className="services__item-title">
                            Мультимодальные
                            грузоперевозки
                        </h3>
                        <p className="services__item-text">
                            Это транспортировка грузов по одному
                            договору, но выполненная, по меньшей
                            мере, двумя видами транспорта;
                        </p>
                    </div>
                    <div className="services__item avia">
                        <h3 className="services__item-title">
                            авиаперевозки
                        </h3>
                        <p className="services__item-text">
                            Способ транспортировки грузов и
                            перевозки пассажиров при помощи
                            воздушных судов.
                        </p>
                    </div>
                    <div className="services__item auto">
                        <h3 className="services__item-title">
                            Автоперевозки
                        </h3>
                        <p className="services__item-text">
                            Это перевозки грузов и пассажиров
                            сухопутным транспортом по
                            безрельсовым путям.
                        </p>
                    </div>
                    <div className="services__item tren">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
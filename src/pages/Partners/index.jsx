import React from 'react'
import HeaderMenu from '../../components/HeaderMenu'
import "./Partners.scss"
import About from '../../components/About'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

import logo from "../../images/partners/partner-logo.png"
import logo2 from "../../images/partners/partner-logo2.png"
import logo3 from "../../images/partners/partner-logo3.png"
import logo4 from "../../images/partners/partner-logo4.jpg"
const Partners = () => {
    const [modal, setModal] = React.useState();
    const [burgerMenu, setBurgerMenu] = React.useState(false);

    let dataPartner = [
        {
            text: "Главная",
            link: "/"
        },

        {
            text: "Наши партнеры",
            link: "/partners"
        },

    ]

    return (
        <>
            <HeaderMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} dataPartner={dataPartner} />
            <div className='partners'>
                <div className='partners__wrapper'>
                    <div className='container'>
                        <div className='partners__inner'>
                            <h2 className="partners__title">Наши партнеры</h2>
                            <p className='partners__text'>000 "trilliant logistics» - транспортно-экспедиторская компания предлагает вам комплекс услуг по организации авто,
                                железнодорожных и авиа грузоперевозок из узбекистана в страны ближнего востока, китаи,
                                оаэ, пакистан, индию, вьетнам, малазию, сингапур и др. и обратно, из стран ближнего востока в узбекистан.
                            </p>
                            <button onClick={() => setModal(true)} className='partners__btn'>СВЯЗАТЬСЯ</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="partners__logo">
                        <div className="partners__logo-item">
                            <img src={logo} alt="" />
                        </div>
                        <div className="partners__logo-item">
                            <img src={logo2} alt="" />
                        </div>
                        <div className="partners__logo-item">
                            <img src={logo3} alt="" />
                        </div>
                        <div className="partners__logo-item">
                            <img src={logo4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <Footer dataPartner={dataPartner} />
            <Modal modal={modal} setModal={setModal} />
        </>
    )
}

export default Partners
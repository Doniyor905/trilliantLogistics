import React from 'react'

import logo from "../../images/partners/partner-logo.png"
import logo2 from "../../images/partners/partner-logo2.png"
import logo3 from "../../images/partners/partner-logo3.png"
// import logo4 from "../../images/partners/partner-logo4.png"

import "./Partners.scss"

const Partners = () => {
    return (
        <div className='partners'>

            <h2 className="partners__title">Наши партнеры</h2>

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
                        {/* <img src={logo4} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
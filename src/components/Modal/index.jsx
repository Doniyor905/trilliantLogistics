import React from 'react'
import "./Modal.scss"

const Modal = ({modal, setModal}) => {
    return (
        <div className={modal ? "modal active" : "modal"}>
            <div className="modal__inner">
                <div onClick={() => setModal(false)} className="modal__close"><span></span></div>
                <div className="modal__title">
                <h2>
                    заполните форму
                </h2>
                <p>и мы свяжемся с вами</p>
                </div>
                <div className="modal__item">
                    <form>
                        <input placeholder='Имя' className='modal__form-name' type="text" />
                        <input placeholder='Телефон номер' className='modal__form-phone' type="text" />
                        <button className='modal__form-btn'>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
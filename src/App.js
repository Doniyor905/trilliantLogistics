import React from 'react';
import './App.scss';
import About from './components/About';
import Advantages from './components/Advantages';
import Company from './components/Company';
import Footer from './components/Footer';
import HeaderBanner from './components/HeaderBanner';
import HeaderMenu from './components/HeaderMenu';
import Modal from './components/Modal';
import Services from './components/Services';
import Transport from './components/Transport';

function App() {
  const [modal, setModal] = React.useState();
  const [burgerMenu, setBurgerMenu] = React.useState(false);

    let dataPartner = [
    {
      text: "О компании",
      link: "#company",
      tag: "a"
    },
    {
      text: "Наши услуги",
      link: "#services",
      tag: "a"

    },
    {
      text: "Наши партнеры",
      link: "/partners",
      tag: "Link"
    },
    {
      text: "Транспорт",
      link: "#transport",
      tag: "a"

    }
  ]

  return (
    <>
      <HeaderMenu setBurgerMenu={setBurgerMenu} dataPartner={dataPartner} burgerMenu={burgerMenu}/>
      <HeaderBanner setModal={setModal} modal={modal}/>
      <Services />
      <About />
      <Advantages />
      <Company />
      <Transport />
      <Footer setModal={setModal} modal={modal} dataPartner={dataPartner}/>
      <Modal setModal={setModal} modal={modal}/>
    </>
  );
}

export default App;

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
  const [burgerMenu, setBurgerMenu] = React.useState();

  return (
    <>
      <HeaderMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
      <HeaderBanner setModal={setModal} modal={modal}/>
      <Services />
      <About />
      <Advantages />
      <Company />
      <Transport />
      <Footer setModal={setModal} modal={modal}/>
      <Modal setModal={setModal} modal={modal}/>
    </>
  );
}

export default App;

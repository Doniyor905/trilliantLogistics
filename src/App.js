import './App.scss';
import About from './components/About';
import Advantages from './components/Advantages';
import Company from './components/Company';
import Footer from './components/Footer';
import HeaderBanner from './components/HeaderBanner';
import HeaderMenu from './components/HeaderMenu';
import Services from './components/Services';
import Transport from './components/Transport';

function App() {
  return (
    <>
      <HeaderMenu />
      <HeaderBanner/>
      <Services/>
      <About/>
      <Advantages/>
      <Company/>
      <Transport/>
      <Footer/>
    </>
  );
}

export default App;

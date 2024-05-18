import './App.css';
import Header from './header/header.tsx';
import HeroSection from './heroSection/heroSection.tsx'
import AboutUs from './aboutUs/aboutUs.tsx';
import WhyUs from './whyUs/whyUs.tsx';
import Menu from './menu/menu.tsx'

function App() {
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="#nav-header" data-bs-offset="0">
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <WhyUs/>
      <Menu/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './header/header.tsx';
import HeroSection from './heroSection/heroSection.tsx'
import AboutUs from './aboutUs/aboutUs.tsx';
import WhyUs from './whyUs/whyUs.tsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <WhyUs/>
    </div>
  );
}

export default App;

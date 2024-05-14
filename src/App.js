import './App.css';
import Header from './header/header.tsx';
import HeroSection from './heroSection/heroSection.tsx'
import AboutUs from './aboutUs/aboutUs.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutUs/>
    </div>
  );
}

export default App;

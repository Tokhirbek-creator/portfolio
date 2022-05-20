import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
// import Services from './components/services/Services';
import Achievements from './components/achievements/Achievements';
import Stars from './Stars';

function App() {
  return (
    <>
      <Nav />
      <Stars />
      <Header />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

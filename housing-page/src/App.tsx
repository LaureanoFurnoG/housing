import './App.css'
import Banner from './sections/banner/Banner'
import About from './sections/About/About'
import Project from './sections/Projects/Project'
import Services from './sections/Services/Services'
import Clients from './sections/Clients/Clients'
import Contact from './sections/Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
    });
  }, []);
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Services></Services>
      <Clients></Clients>
      <Contact></Contact>
    </>
  )
}

export default App

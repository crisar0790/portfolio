import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/service/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App;
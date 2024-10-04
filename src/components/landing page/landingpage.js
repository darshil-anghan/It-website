import React from 'react';
import '../../App.css'; 
import Navbar from '../navbar/navbar'
import Home from '../home/home';
import About from '../About/about'
import Service from '../Servics/service';
import Other from '../other/other';
import Portfolio from '../portfolio/portfolio';
import Ourclient from '../our client/ourclient';
import Footer from '../Footer/footer';

function landingpage() {
    return (
      <div className="App">
        <Navbar /> 
        <Home />
      <About />
      <Service />
      <Other />
      <Portfolio />
      <Ourclient />
      <Footer />
          </div>
  );
}

export default landingpage;
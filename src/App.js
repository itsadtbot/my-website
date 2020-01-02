import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import About from './components/about/about'
import Resume from './components/resume/resume';
import ContactUs from './components/contact/contact';
import Footer from './components/footer/footer';
import Portfolio from './components/portfolio/portfolio';
import resumeData from './resumeData';
import LazyLoad from 'react-lazyload';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Header resumeData={resumeData} />
        
        
        <About />
        
        <Resume />
        <Portfolio />
        {/* <ContactUs /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

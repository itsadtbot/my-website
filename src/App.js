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
import ReactGA from 'react-ga';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


class App extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  render() {
    ReactGA.initialize('UA-156664098-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    const { loading } = this.state;
    if (loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div className="App" style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
          <Loader
            type="Triangle"
            color="#F06000"
            height={200}
            width={200}
            timeout={5000} //3 secs

          />
        </div>);
    }
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
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5000));
}
export default App;

import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li>
                                <a className="smoothscroll" href="#resume">Resume
                                    
                                </a>
                            </li>
                            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Hello, I'm Aditi Bhat.</h1>
                            <h3>Thank you for visiting my website! Start Scrolling to learn <a className="smoothscroll" href="#about" style={{ fontWeight: "bold" }}>About Me</a>.</h3>
                            <hr />
                            <ul className="social">

                                <li><a href="https://www.facebook.com/aditi.bhat.37" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.instagram.com/itsadtbot" target="_blank"><i className="fa fa-instagram" /></a></li>
                                <li><a href="https://www.youtube.com/hoopsdontlie" target="_blank"><i className="fa fa-youtube" /></a></li>
                                <li><a href="https://www.linkedin.com/in/aditibhat7" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                {/* <li><a href="https://www.linkedin.com/in/aditibhat7" target="_blank"><i className="fa fa-wordpress" /></a></li> */}
                                <li><a href="https://twitter.com/itsadtbot" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://github.com/itsadtbot" target="_blank"><i className="fa fa-github" /></a></li>
                                <li><a href="mailto:aditiabhat@gmail.com" target="_blank"><i className="fa fa-envelope" /></a></li>

                                {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
                                <li><a href="https://join.skype.com/invite/kP12MErRSocy" target="_blank"><i className="fa fa-skype" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
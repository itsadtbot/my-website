import React, { Component } from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Portfolio from '../portfolio/portfolio';
export default class Home extends Component {

    render() {
        // let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/* <header id="home"> */}

                <div className="home">
                    <div className="banner-text">
                        <Typist show="false">
                            <h1 className="responsive-headline">Hello, I'm Aditi Bhat.</h1>
                            <br />

                        </Typist>

                        {/* <h2 className="responsive-headline">
                            <Fade cascade delay={2000}>Head over here to learn <Link to="/about">About Me.</Link>
                            </Fade>
                        </h2> */}

                        <h3 className="responsive-headline">
                            <Fade cascade delay={2000}>The word amateur originally comes from the latin verb ‘amare: to love’, which means that an amateur is someone who loves what they are doing. This makes me an amateur at many things, head over here to see what they are and learn more <Link to="/about">About Me!</Link>
                            </Fade>
                        </h3>

                        {/* <a className="smoothscroll" href="#about" style={{ fontWeight: "bold", display: "inline" }}>About Me</a> */}
                        {/* <h3 className="responsive-headline"><Fade cascade delay={2000}>Thank you for visiting my website! Click here to learn <Link to="/about">About Me</Link>.</Fade></h3> */}
                        {/* <h3>Thank you for visiting my website! Click here to learn <Link to="/about">About Me</Link></h3> */}
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
                {/* <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p> */}
                {/* </header> */}
            </React.Fragment>
        );
    }
}
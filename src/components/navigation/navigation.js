import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Home from '../home/home'
import About from '../about/about'
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';

const Navigation = () => (
    // <Router basename={`${process.env.PUBLIC_URL}/`}>
        <header>
        {/* <div className="App"> */}

            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    {/* <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li>
                                <a className="smoothscroll" href="#resume">Resume

                                </a>
                            </li>
                            <li><a className="smoothscroll" href="#portfolio">Projects</a></li> */}
                    <li><Link to="/" className="nav-link"> Home </Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/resume" className="nav-link">Resume</Link></li>
                    <li><Link to="/projects" className="nav-link">Projects</Link></li>
                    <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
                    {/* <li><Link to={`/projects/example`}>About</Link> </li> */}
                    {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
                </ul> {/* end #nav */}
            </nav>
            {/* <Switch>
                <Route exact path='/' component={Header} />
                <Route path='/about' component={About} />
                <Route path='/resume' component={Resume} />
                <Route path='/projects' component={Portfolio} />
                {/* <Route exact path='/projects/example' component={Resume} /> */}
            {/* <Route path='/test'>
                    <Topics />
                </Route> */}

            {/* <Route path ='/projects'>
              <Projects/>
            </Route> */}
            {/* </Switch> */}
            {/* end #nav-wrap */}
            {/* <Header resumeData={resumeData} />


        <About />

        <Resume />
        <Portfolio /> */}
            {/* <ContactUs /> */}
            {/* <Footer /> */}
            {/* <Switch>
                <Route exact path="/" component={About} />
                <Route path="/:id" component={Resume} />
                <Route path="/:id" component={Portfolio} />

            </Switch> */}
        </header>
    // </Router>
)
export default Navigation;
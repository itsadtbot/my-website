import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about'
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import Blogs from '../blogs/blogs'
import Projects from '../projects/projects';
import DotArt from '../general/dotart';
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/dotart' component={DotArt} />
            {/* <Route path='/test'>
                    <Topics />
                </Route> */}

            {/* <Route path ='/projects'>
              <Projects/>
            </Route> */}
        </Switch>
    </main>
)

export default Main;
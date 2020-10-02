import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Portfolio from '../portfolio/portfolio' 
import About from '../about/about'
import Pinwheel from '../projects/pinwheel'
// The Roster component matches one of two different routes
// depending on the full pathname
const Projects = () => (
  <Switch>
    <Route exact path='/projects' component={Portfolio}/>
    <Route path='/projects/example' component={About}/>
    <Route path='/projects/Instagram-Assessment' component={About}/>
    <Route path='/projects/pinwheel' component={Pinwheel}/>
  </Switch>
)


export default Projects
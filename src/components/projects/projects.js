import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Portfolio from '../portfolio/portfolio' 
import About from '../about/about'
// The Roster component matches one of two different routes
// depending on the full pathname
const Projects = () => (
  <Switch>
    <Route exact path='/projects' component={Portfolio}/>
    <Route path='/projects/example' component={About}/>
    <Route path='/projects/Instagram-Assessment' component={About}/>
  </Switch>
)


export default Projects
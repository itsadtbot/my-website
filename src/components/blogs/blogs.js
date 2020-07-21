import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from '../portfolio/portfolio';
import BlogCards from '../blogs/blogcards';
import About from '../about/about';
import WFH from '../blogs/wfh';
// The Roster component matches one of two different routes
// depending on the full pathname
const Blogs = () => (
  <Switch>
    <Route exact path='/blogs' component={BlogCards} />
    <Route path='/blogs/travel' component={About} />
    <Route path='/blogs/workfromhomefun' component={WFH} />
    
    {/* <Route path='blogs/workfromhomefun/skribbl' component={() => {
      window.location.href = 'https://www.skribbl.io';
      return null;
    }} /> */}
  </Switch>
)


export default Blogs
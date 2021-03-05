import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
class DotArt extends Component {

    render() {

        return (

            <React.Fragment>
                <section id="portfolio">
                    <div>
                        <h1><span>Dot Art</span></h1>
                    </div>
                    <br />
                    <div>
                        <h2>Check out some of my work here!</h2>
                        {/* <li>
                            <Link to={`/projects/example`}>About</Link>
                        </li> */}
                    </div>
                    <br />
                    
                
                    {/* <Switch>
                        <Route exact path='/projects' component={Portfolio} />
                        <Route path='/projects/example' component={About} />
                    </Switch> */}

                </section>
                {/* <Switch>
                    <Route exact path='/projects' component={Projects} />
                    <Route path='/projects/example' component={About} />
                </Switch> */}
            </React.Fragment >

        );
    }
}
export default DotArt;

{/* <Link to={`/roster/${p.number}`}>{p.name}</Link> */ }
// const Roster = () => (
//     <Switch>
//       <Route exact path='/roster' component={FullRoster}/>
//       <Route path='/roster/:number' component={Player}/>
//     </Switch>
//   )
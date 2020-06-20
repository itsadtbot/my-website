import {Link, Route, Switch} from 'react-router';
import React, {Component} from 'react';
import About from './about/about';

class ProjectLayout extends Component {
    render() {
        return (
            <div>
                {/* <header>
                    <NavBar/>
                </header> */}
                <div>
                    <Switch>
                        <Route path="/projects/test" component={About}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

export default ProjectLayout;
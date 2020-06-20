import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/home/home';
import About from './components/about/about'
import Resume from './components/resume/resume';
import Navigation from './components/navigation/navigation'
import Main from './components/main/main'
import ProjectLayout from './components/test';
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
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import Emoji from 'a11y-react-emoji'
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
            timeout={2000} //3 secs

          />
        </div>);
    }
    return (
      <div>
        <Navigation/>
        <Main />
        <Footer/>
      </div>


    );
  }
}
// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <br />
//       <br />
//       {/* <ul>
//         <li>
//           <Link to={`${url}/about`}>About</Link>
//         </li>
//         <li>
//           <Link to={`${url}/resume`}>Resume</Link>
//         </li>
//         <li>
//           <Link to={`${url}/props-v-state`}>Port</Link>
//         </li>
//       </ul> */}
//       <Link to={`${url}/about`}>
//         <Card>
//           <CardContent>

//             <h2 className="card-title">TRAVEL
//                                             <span>
//                 <Emoji symbol="🏕️" label="travel" />
//               </span>
//             </h2>
//           </CardContent>
//         </Card>
//       </Link>
//       <br/>
//       <Link to={`${url}/resume`}>
//         <Card>
//           <CardContent>

//             <h2 className="card-title">TRAVEL
//                                             <span>
//                 <Emoji symbol="🏕️" label="travel" />
//               </span>
//             </h2>
//           </CardContent>
//         </Card>
//       </Link>

//       <Switch>
//         {/* <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route> */}
//         <Route path={`${path}/about`}>
//           <About />
//         </Route>
//         <Route path={`${path}/resume`}>
//           <Resume />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}
export default App;

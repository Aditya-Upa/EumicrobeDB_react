import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // package for routing functionality
import Home from './components/pages/index';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Query from './components/pages/query';
import Help from './components/pages/help';
import jbrowsetree from "./components/pages/jbrowsetree";
// import CSV_Upload from './components/pages/csvuploader'; (not required for our purpose)
// different components which are called during runtime are imported from their respective JS files
function App()
{
    return (
        <React.Fragment> {/*  */}
     <Router> {/*non-HTML component imported from the router dom package which wraps around the various components imported from various JS files in the React app*/}
          <Navbar /> {/*this component renders the nav bar at the top of the React DOM*/}
          <Switch> {/* at most one of these routes should be loaded at a time */}
            <Route exact path='/' component={Home} /> 
            {/* unless specified React router does a partial matching*/}
            <Route path='/jbrowsetree' component={jbrowsetree} /> 
            {/* <Route exact path='/jbrowse/jbrowse' render ={(props) => <View {...props} id={genomename} />} /> */}
            {/* <Route exact path='/csvupload' component={CSV_Upload} /> */}
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/query' component={Query} />
            <Route path='/help' component={Help} />
          
          </Switch>
        </Router>
        </React.Fragment>
      );

}
export default App;

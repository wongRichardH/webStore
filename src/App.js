import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Shop} from './Shop';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import {LandingPage} from './components/LandingPage';

function App() {
  return (
   <React.Fragment>
     <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path = "/" component= {Home}></Route>
            <Route exact path = "/shop" component= {Shop}></Route>
            <Route exact path = "/about" component= {About}></Route>
            <Route exact path = "/contact" component= {Contact}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

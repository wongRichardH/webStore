import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import Shop from './Shop';
import {ItemDetails} from './ItemDetails';


import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

function App() {
  return (
   <React.Fragment>
     <NavigationBar />
      <Layout>
        <Router>
          <Switch>

            {/* Routes add ability to go to this webpage */}

            <Route path = "/" exact component= {Home}></Route>
            <Route path = "/about" exact component= {About}></Route>
            <Route path = "/contact" exact component= {Contact}></Route>
            <Route path = "/shop" exact component= {Shop}></Route>
            <Route path = "/shop/:itemID" exact strict component= {ItemDetails}></Route>

            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tables from './Tables'
import OrderScreen from './OrderScreen'
import Admin from './Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/tables" component={Tables} />
            <Route path="/tables/:table" component={OrderScreen} />
            <Route exact path="/admin" component={Admin}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

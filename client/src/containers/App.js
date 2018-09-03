import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tables from './Tables'
import OrderScreen from './OrderScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/order" component={OrderScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tables from './Tables'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/tables" component={Tables} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

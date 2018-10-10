import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import store from '../store'
import Tables from './Tables'
import OrderScreen from './OrderScreen'
import Admin from './Admin'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/tables" component={Tables} />
              <Route path="/tables/:table" component={OrderScreen} />
              <Route path="/admin" component={Admin}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

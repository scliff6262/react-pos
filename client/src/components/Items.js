import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'

const Items = (props) => {
  console.log(props)
  return(
    <div>
      <div>
      <Router>
        <div>
          <NavBar tableNumber={props.tableNumber}/>
          <Switch>
            <Route exact path="/tables/:table/beverages" render={ () => {
              return(
                <div>
                  <p onClick={props.handleClick}>Cabernet</p>
                  <p onClick={props.handleClick}>Chianti</p>
                  <p onClick={props.handleClick}>Pinot Grigio</p>
                  <p onClick={props.handleClick}>Sauvignon Blanc</p>
                </div>
              )
            }
          }/>
            <Route exact path="/tables/:table/food" render={ () => {
              return(
                <div>
                  <p onClick={props.handleClick}>Pizza</p>
                  <p onClick={props.handleClick}>Salad</p>
                  <p onClick={props.handleClick}>Burger</p>
                  <p onClick={props.handleClick}>Fries</p>
                </div>
              )
            }
          }/>
          </Switch>
        </div>
      </Router>
        <p onClick={props.handleClick}>Cabernet</p>

      </div>
    </div>
  )
}

export default Items

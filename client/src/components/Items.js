import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Category from './Category'

const Items = (props) => {
  return(
    <div>
      <div>
      <Router>
        <div>
          <NavBar tableNumber={props.tableNumber}/>
          <Switch>
            <Route path={`/tables/${props.tableNumber}/beer`} render={ () => {
              const items = props.items.filter( item => item.category === "beer" )
              return(
                <Category items={items} handleClick={props.handleClick} />
              )
            }
          }/>
            <Route exact path={`/tables/${props.tableNumber}/wine`} render={ () => {
              const items = props.items.filter( item => item.category === "wine" )
              return(
                <Category items={items} handleClick={props.handleClick} />
              )
            }
          }/>
            <Route exact path={`/tables/${props.tableNumber}/liq`} render={ () => {
              const items = props.items.filter( item => item.category === "liquor" )
              return(
                <Category items={items} handleClick={props.handleClick} />
              )
            }
          }/>
            <Route exact path={`/tables/${props.tableNumber}/food`} render={ () => {
              const items = props.items.filter( item => item.category === "food" )
              return(
                <Category items={items} handleClick={props.handleClick} />
              )
            }
          }/>
          </Switch>
        </div>
      </Router>
      </div>
    </div>
  )
}

export default Items

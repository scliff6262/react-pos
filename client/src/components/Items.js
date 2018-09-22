import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'

const Items = (props) => {
  return(
    <div>
      <div>
      <Router>
        <div>
          <NavBar tableNumber={props.tableNumber}/>
          <Switch>
            <Route path={`/tables/${props.tableNumber}/beer`} render={ () => {
              const items = props.items.filter( item => item.category === "beer" ).map( item => <p data-price={item.price} data-id={item.id} onClick={props.handleClick}>{item.name}</p>)
              return(
                <div>
                  {items}
                </div>
              )
            }
          }/>
            <Route exact path={`/tables/${props.tableNumber}/wine`} render={ () => {
              const items = props.items.filter( item => item.category === "wine" ).map( item => <p data-price={item.price} data-id={item.id} onClick={props.handleClick}>{item.name}</p>)
              return(
                <div>
                  {items}
                </div>
              )
            }
          }/>
            <Route exact path={`/tables/${props.tableNumber}/liq`} render={ () => {
              const items = props.items.filter( item => item.category === "liquor" ).map( item => <p data-price={item.price} data-id={item.id} onClick={props.handleClick}>{item.name}</p>)
              return(
                <div>
                  {items}
                </div>
              )
            }
          }/>
            <Route exact path={`/tables/${props.tableNumber}/food`} render={ () => {
              const items = props.items.filter( item => item.category === "food" ).map( item => <p data-price={item.price} data-id={item.id} onClick={props.handleClick}>{item.name}</p>)
              return(
                <div>
                  {items}
                </div>
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

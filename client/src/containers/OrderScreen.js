import React, { Component } from 'react'
import Check from '../components/Check'
import Items from '../components/Items'
import { NavLink } from 'react-router-dom'

const left = {
  float: "left"
}

const right = {
  float: "right",
  marginLeft: "10px"
}

const orderScreenDiv = {
  width: "650px"
}

class OrderScreen extends Component {
  constructor(){
    super()

    this.state = {
      currentCheck: ["Loading"],
      itemsToAdd: [],
      menuItems: []
    }
  }

  fetchMenuItems = () => {
    fetch("/items")
    .then( r => r.json() )
    .then( json => this.setState({ menuItems: json }) )
  }

  fetchCurrentCheck = () => {
    const tableNumber = this.props.match.params.table
    fetch("/checks/" + tableNumber)
    .then(r => r.json() )
    .then( json => this.setState({ currentCheck: json.items }))
  }

  componentWillMount(){
    this.fetchMenuItems()
    this.fetchCurrentCheck()
  }

  addToCheck = (event) => {
    const target = event.target
    const item = {
      name: target.innerText,
      id: target.getAttribute("data-id"),
      price: target.getAttribute("data-price")
    }
    this.setState({
      itemsToAdd: this.state.itemsToAdd.concat(item)
    })
  }

  removeLastNewItem = (event) => {
    const slicedArray = Array(this.state.itemsToAdd).slice(0, -1)
    this.setState({
      itemsToAdd: slicedArray
    })
  }

  render(){
    const tableNumber = this.props.match.params.table
    return(
      <div className="orderScreen" style={orderScreenDiv}>
        <div className="checkDiv" style={left}>
        <Check
        tableNumber={tableNumber}
        initialItems={this.state.currentCheck}
        itemsToAdd={this.state.itemsToAdd}
        removeLastNewItem={this.removeLastNewItem}
        total={this.state.currentTotal}
        />
        <p><NavLink to="/tables">Cancel</NavLink></p>
        </div>
        <div className="menuDiv" style={right}>
          <Items
          handleClick={this.addToCheck}
          tableNumber={tableNumber}
          items={this.state.menuItems}
          />
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default OrderScreen

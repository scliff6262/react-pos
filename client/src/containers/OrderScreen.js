import React, { Component } from 'react'
import Check from '../components/Check'
import Items from '../components/Items'

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
      currentCheck: ["Pinot Grigio", "Salmon"],
      itemsToAdd : []
    }
  }

  addToCheck = (event) => {
    const item = event.target.innerText
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
        />
        <p><a href="/tables">Cancel</a></p>
        </div>
        <div className="menuDiv" style={right}>
          <Items handleClick={this.addToCheck} tableNumber={tableNumber}/>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default OrderScreen

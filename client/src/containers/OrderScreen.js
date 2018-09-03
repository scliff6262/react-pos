import React, { Component } from 'react'
import Check from '../components/Check'

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
  render(){
    const tableNumber = this.props.location.pathname.split("/")[2]
    console.log("number:", tableNumber)
    return(
      <div className="orderScreen" style={orderScreenDiv}>
        <div className="checkDiv" style={left}>
        <Check tableNumber={tableNumber}/>
        </div>
        <div className="menuDiv" style={right}>
          Menu Items Here
        </div>
        <div className="clear" />
      </div>
    )
  }
}

export default OrderScreen

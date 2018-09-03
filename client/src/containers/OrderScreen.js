import React, { Component } from 'react'

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
    return(
      <div className="orderScreen" style={orderScreenDiv}>
        <div className="checkDiv" style={left}>
        Check Here
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
